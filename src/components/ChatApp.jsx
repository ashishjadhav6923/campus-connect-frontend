import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./Shared/Navbar";

const socket = io("http://localhost:5000"); // Update with backend URL

const ChatApp = ({ userId }) => {
  const location = useLocation();
  const chatWithId = new URLSearchParams(location.search).get("chatWith");

  const [users, setUsers] = useState([
    { _id: "1", name: "Alice" },
    { _id: "2", name: "Bob" },
    { _id: "3", name: "Charlie" },
  ]);
  const [chatWith, setChatWith] = useState(null);
  const [messages, setMessages] = useState({}); // Store messages separately per user
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (chatWithId) {
      const selectedUser = users.find((user) => user._id === chatWithId);
      if (selectedUser) setChatWith(selectedUser);
    }
  }, [chatWithId, users]);

  useEffect(() => {
    if (chatWith) {
      axios
        .get(`http://localhost:5000/messages/${userId}/${chatWith._id}`)
        .then((response) => {
          setMessages((prev) => ({ ...prev, [chatWith._id]: response.data }));
        });
    }
  }, [chatWith, userId]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => {
        if (
          message.senderId === chatWith?._id ||
          message.receiverId === chatWith?._id
        ) {
          return {
            ...prev,
            [chatWith._id]: [...(prev[chatWith._id] || []), message],
          };
        }
        return prev;
      });
    });
    return () => socket.off("receiveMessage");
  }, [chatWith]);

  const sendMessage = () => {
    if (newMessage.trim() && chatWith) {
      const messageData = {
        senderId: userId,
        receiverId: chatWith._id,
        message: newMessage,
        timestamp: new Date(),
      };
      socket.emit("sendMessage", messageData);
      setMessages((prev) => ({
        ...prev,
        [chatWith._id]: [...(prev[chatWith._id] || []), messageData],
      }));
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow border-t">
        {/* User List (Left Sidebar) */}
        <div className="w-1/4 p-4 bg-gray-100 border-r overflow-y-auto rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Chats</h2>
          {users.map((user) => (
            <div
              key={user._id}
              className={`p-3 cursor-pointer rounded-lg transition-all ${
                chatWith?._id === user._id ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => setChatWith(user)}
            >
              {user.name}
            </div>
          ))}
        </div>

        {/* Chat Window (Right Side) */}
        <div className="w-3/4 p-4 flex flex-col rounded-lg shadow-sm overflow-hidden">
          {chatWith ? (
            <>
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Chat with {chatWith.name}
              </h2>
              <div className="flex-1 overflow-y-auto border p-3 h-80 rounded-lg bg-white shadow-inner">
                {(!messages[chatWith._id] ||
                  messages[chatWith._id].length === 0) && (
                  <p className="text-center text-gray-400">
                    Say hello to {chatWith.name}!
                  </p>
                )}
                {messages[chatWith._id]?.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-3 max-w-xs rounded-lg ${
                      msg.senderId === userId
                        ? "bg-gray-300 ml-auto"
                        : "bg-gray-200"
                    }`}
                  >
                    <p>{msg.message}</p>
                    <small className="text-xs text-gray-500 block text-right">
                      {new Date(msg.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </small>
                  </div>
                ))}
              </div>
              <div className="flex mt-2 border-t pt-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-grow border p-2 rounded-l shadow-sm"
                  placeholder="Type a message..."
                />
                <button
                  onClick={sendMessage}
                  className="bg-purple-900 text-white px-4 rounded-r shadow-sm"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 flex-1 flex items-center justify-center">
              Select a user to start chatting
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
