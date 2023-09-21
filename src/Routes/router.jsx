import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/HomePage/HomePage";

import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Shared/Login/Login";
import SentSms from "../Pages/SentSms/SentSms";
import SentFile from "../Pages/Dashboard/SentFile/SentFile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login ></Login>    ,
			},
		],
	},
	{
		path: "dashboard",
		element: <DashboardLayout></DashboardLayout>,

		children: [
			{
				path: "dashboard",
				element: <Dashboard></Dashboard>,
			},
			{
				path: "send-sms",
				element: <SentSms></SentSms> 
			},
			{
				path: "send-from-file",
				element: <SentFile></SentFile>
			}
		],
	},
]);
export default router;
