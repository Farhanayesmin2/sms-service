import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Dashboard/DashboardSidebar/DashboardSidebar";
// import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
import Header from "../../Shared/DashboardHeader/Header/Header";

const DashboardLayout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleToggle = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="dark:bg-boxdark-2 dark:text-bodydark">
			{/* <!-- ===== Page Wrapper Start ===== --> */}
			<div className="flex h-screen overflow-hidden">
				{/* <!-- ===== Sidebar Start ===== --> */}
				<DashboardSidebar
					sidebarOpen={sidebarOpen}
					setSidebarOpen={handleToggle}
				/>
				{/* <!-- ===== Sidebar End ===== --> */}

				{/* <!-- ===== Content Area Start ===== --> */}
				<div className="relative flex flex-col flex-1 h-full">
					{/* <!-- ===== Header Start ===== --> */}
					<Header sidebarOpen={sidebarOpen} setSidebarOpen={handleToggle} />
					{/* <!-- ===== Header End ===== --> */}

					{/* <!-- ===== Outlet Content Start ===== --> */}
					<div className="flex-1 overflow-y-auto bg-white">
						<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
							<Outlet />
						</div>
					</div>
					{/* <!-- ===== Outlet Content End ===== --> */}
				</div>
				{/* <!-- ===== Content Area End ===== --> */}
			</div>
			{/* <!-- ===== Page Wrapper End ===== --> */}
		</div>
	);
};

export default DashboardLayout;

// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
// import Header from "../../Shared/DashboardHeader/Header/Header";

// const DashboardLayout = () => {
// 	const [sidebarOpen, setSidebarOpen] = useState(false);

// 	return (
// 		<div className="dark:bg-boxdark-2 dark:text-bodydark">
// 			{/* <!-- ===== Page Wrapper Start ===== --> */}
// 			<div className="flex h-screen overflow-hidden">
// 				{/* <!-- ===== Sidebar Start ===== --> */}
// 				<DashboardSidebar
// 					sidebarOpen={sidebarOpen}
// 					setSidebarOpen={setSidebarOpen}
// 				/>
// 				{/* <!-- ===== Sidebar End ===== --> */}

// 				{/* <!-- ===== Content Area Start ===== --> */}
// 				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
// 					{/* <!-- ===== Header Start ===== --> */}
// 					<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
// 					{/* <!-- ===== Header End ===== --> */}

// 					{/* <!-- ===== Main Content Start ===== --> */}
// 					<main>
// 						<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
// 							<Outlet />
// 						</div>
// 					</main>
// 					{/* <!-- ===== Main Content End ===== --> */}
// 				</div>
// 				{/* <!-- ===== Content Area End ===== --> */}
// 			</div>
// 			{/* <!-- ===== Page Wrapper End ===== --> */}
// 		</div>
// 	);
// };

// export default DashboardLayout;
