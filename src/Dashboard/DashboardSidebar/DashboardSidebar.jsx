import { useState } from "react";
import { BiSolidContact, BiSolidUser, BiCodeAlt } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";

import { Link } from "react-router-dom";

import {
	FiMenu,
	FiX,
	FiHome,
	FiUpload,
	FiBarChart2,
	FiMessageSquare,
} from "react-icons/fi";

const labelToIconMapping = {
	Dashboard: FiHome,
	Messaging: FiMessageSquare,
	PhoneBook: BiSolidContact,
	"SMS Rate": TbCurrencyTaka,
	Reports: FiBarChart2,
	"My Account": BiSolidUser,
	API: BiCodeAlt,
	"Terms & conditions": IoDocumentText,
};

const getIcon = (label) => {
	return labelToIconMapping[label] || FiHome; // default to FiHome if label doesn't have a mapping
};

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ label, isOpen, to }) => {
	const Icon = getIcon(label);

	return (
		<li className="flex items-center py-2 px-4 hover:text-purple-500">
			<Link to={to} className="flex items-center">
				<Icon className="mr-2 text-xl" />
				{isOpen && <span className="ml-2">{label}</span>}
			</Link>
		</li>
	);
};

const DashboardSidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			{/* Sidebar Toggle Button */}

			{/* Sidebar */}
			<div
				className={`fixed inset-y-0 z-10 bg-white border-r transition duration-300 ease-in-out transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				style={{ width: isOpen ? "20%" : "0" }}
			>
				{/* Close Icon */}
				<div className="pl-7 pt-5">
					<button
						onClick={handleToggle}
						className="-top-10  z-10 w-12 h-12 bg-white rounded-full shadow-md transition duration-300 ease-in-out flex items-center justify-center"
					>
						{isOpen ? (
							<FiX className="text-gray-500 hover:text-gray-700 text-2xl" />
						) : (
							<FiMenu className="text-gray-500 hover:text-gray-700 text-2xl" />
						)}
					</button>
				</div>
				{/* Sidebar Content */}
				<nav className="px-4 py-8">
					<ul className="space-y-2">
						<SidebarItem
							icon={FiHome}
							label="Dashboard"
							isOpen={isOpen}
							to="/dashboard"
						/>
						<SidebarItem
							icon={FiUpload}
							label="Messaging"
							isOpen={isOpen}
							to="/dashboard/message"
						/>

						<SidebarItem
							icon={BiSolidContact}
							label="PhoneBook"
							isOpen={isOpen}
							to="/dashboard/phone-book"
						/>
						<SidebarItem
							icon={TbCurrencyTaka}
							label="SMS Rate"
							isOpen={isOpen}
							to="dashboard/sms-rate"
						/>
						<SidebarItem
							icon={FiMessageSquare}
							label="Reports"
							isOpen={isOpen}
							to="dashboard/reports"
						/>
						<SidebarItem
							icon={BiSolidUser}
							label="My Account"
							isOpen={isOpen}
							to="dashboard/my-account"
						/>
						<SidebarItem
							icon={BiCodeAlt}
							label="API"
							isOpen={isOpen}
							to="dashboard/api"
						/>
						<SidebarItem
							icon={IoDocumentText}
							label="Terms & conditions"
							isOpen={isOpen}
							to="dashboard/condition"
						/>
					</ul>
				</nav>
			</div>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-white opacity-25"
					onClick={handleToggle}
					style={{ zIndex: 999 }}
				></div>
			)}
		</div>
	);
};

export default DashboardSidebar;
