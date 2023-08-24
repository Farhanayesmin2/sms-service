import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/HomePage/HomePage";

import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
		],
	},
]);
export default router;