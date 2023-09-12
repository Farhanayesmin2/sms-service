import { useState } from "react";
import Header from "../../Shared/DashboardHeader/Header/Header";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Dashboard/DashboardSidebar/DashboardSidebar";
import Footer from "../../Shared/Footer/Footer";
const DashboardLayout = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleSidebarToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
		<div
			className="dark:bg-boxdark-2 dark:text-bodydark h-screen transform transition-transform duration-300 grid"
			style={{
				gridTemplateColumns: isOpen ? "20% 80%" : "5% 95%",
			}}
		>
			<div className="bg-white border-r transition-all duration-300 ease-in-out">
				<DashboardSidebar isOpen={isOpen} />
			</div>
			<div className="h-full flex flex-col">
				<div className="w-full h-14 bg-gray-200">
					<Header handleSidebarToggle={handleSidebarToggle} isOpen={isOpen} />
				</div>
				<div className="flex-1 overflow-y-auto bg-white">
					<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
						<Outlet />
					</div>
				</div>
				<Footer></Footer>
			</div>
		
		</div>
	
		</>
	);
};

export default DashboardLayout;
{
	/* <div
				className={`h-full flex flex-col transform transition-transform duration-300 ${
					isOpen ? "w-1/5" : "w-19/20 translate-x-[5%]"
				}`}
			></div> */
}
