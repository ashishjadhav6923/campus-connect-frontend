import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Authentication/Login.jsx";
import ProfileUpdate from "./components/StudentProfileUpdate.jsx";
import Home from "./components/Pages/Home.jsx";
import Profile from "./components/Pages/Profile.jsx";
import ViewAlumniProfile from "./components/ViewAlumniProfile.jsx";
import Footer from "./components/Shared/Footer.jsx";
import Connections from "./components/Pages/Connections.jsx";
import Admin from "./components/Admin/Admin.jsx";
import CreateStudent from "./components/Admin/CreateStudent.jsx";
import DeleteStudent from "./components/Admin/DeleteStudent.jsx";
import UpdateProfileDialog from "./components/UpdateProfileDialog.jsx";
import ChatApp from "./components/ChatApp.jsx";
import AlumniProfileUpdate from "./components/Alumni/AlumniProfileUpdate.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/student/home",
    element: <Home />,
  },
  {
    path: "/student/profileUpdate",
    element: <ProfileUpdate />,
  },
  {
    path: "/student/connections",
    element: <ChatApp />,
  },
  {
    path: "/chat",
    element: <ChatApp />, // Handles chat via query parameters
  },
  {
    path: "/viewProfile/:id",
    element: <ViewAlumniProfile />,
  },
  {
    path: "/student/UpdateProfileDialog",
    element: <Profile />,
  },
  {
    path: "/alumni/profileUpdate",
    element: <AlumniProfileUpdate />,
  },

  {
    path: "/admin/home",
    element: <Admin />,
  },
  {
    path: "/admin/create-student",
    element: <CreateStudent />,
  },
  {
    path: "/admin/delete-student",
    element: <DeleteStudent />,
  },
]);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      <div className="flex-grow">
        <RouterProvider router={appRouter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
