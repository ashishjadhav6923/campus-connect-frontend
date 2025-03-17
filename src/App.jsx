import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Authentication/Login.jsx";
import ProfileUpdate from "./components/ProfileUpdate.jsx";
import Home from "./components/Pages/Home.jsx";
import Profile from "./components/Pages/Profile.jsx";
import ViewAlumniProfile from "./components/ViewAlumniProfile.jsx";
import Footer from "./components/Shared/Footer.jsx";
import Connections from "./components/Pages/Connections.jsx";
import Admin from "./components/Admin/Admin.jsx";
import CreateStudent from "./components/Admin/CreateStudent.jsx";
import DeleteStudent from "./components/Admin/DeleteStudent.jsx";
import UpdateProfileDialog from "./components/UpdateProfileDialog.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/student/home",
    element: <Home />,
  },
  {
    path: "/student/connections",
    element: <Connections />,
  },
  {
    path: "/profileupdate",
    element: <ProfileUpdate />,
  },
  {
    path: "/viewAlumniProfile/:id",
    element: <ViewAlumniProfile />,
  },
  {
    path: "/student/UpdateProfileDialog",
    element: <Profile />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/create-student",
    element: <CreateStudent />,
  },
  {
    path: "/delete-student",
    element: <DeleteStudent />,
  },
]);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      {/* Main content takes up the available space */}
      <div className="flex-grow">
        <RouterProvider router={appRouter} />
      </div>
      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
