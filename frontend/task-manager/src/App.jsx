import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserDashboard from './pages/User/UserDashboard';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Admin/Dashboard';
import CreateTask from './pages/Admin/CreateTask';
import ManageUsers from './pages/Admin/ManageUsers';
import ManageTasks from './pages/Admin/ManageTasks';
import MyTasks from './pages/User/MyTasks';
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import PrivateRoute from './routes/PrivateRoute';
import UserProvider from './context/userContext';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/' element={<Navigate to="/login" replace/>} />


          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            </Route>
            
            
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
            </Route>
          
          <Route path="/" element={<Root />} />

        </Routes>
      </Router>
    </div>
    <Toaster
      toastOptions={{
        className: "",
        style:{
          fontSize: "13px",
        } 
          
            
          
        }}
      />
    </UserProvider>
  )
}

export default App

const Root = () => {
    const { user, loading } = useContext(UserContext);

    if (loading) return <Outlet />;

    if (!user) {
        return <Navigate to="/login" />;
    }

    return user.role === "admin"
        ? <Navigate to="/admin/dashboard" />
        : <Navigate to="/user/dashboard" />;
};

