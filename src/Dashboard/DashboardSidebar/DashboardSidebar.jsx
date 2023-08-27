import { useState } from "react";
import { BiSolidContact, BiSolidUser, BiCodeAlt } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";

import { Link } from "react-router-dom";

import { FiHome, FiBarChart2, FiMessageSquare } from "react-icons/fi";

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
	return labelToIconMapping[label] || null;
};

const SidebarItem = ({ label, to, isOpen }) => {
	const Icon = getIcon(label);

	return (
		<li className="flex items-center py-2 px-4 hover:text-purple-500">
			<Link to={to} className="flex items-center">
				<div className="flex items-center justify-center w-8 h-8 mr-2">
					<Icon className="text-xl" />
				</div>
				{isOpen && (
					<span className="ml-2 max-w-xs truncate whitespace-nowrap">
						{label}
					</span>
				)}
			</Link>
		</li>
	);
};

// eslint-disable-next-line react/prop-types
// const SidebarItem = ({ label, to, isOpen }) => {

// 	const Icon = getIcon(label);

// 	return (
// 		<li className="flex items-center py-2 px-4 hover:text-purple-500">
// 			<Link to={to} className="flex items-center">
// 				<div className="flex items-center justify-center w-8 h-8 mr-2">
// 					<Icon className="text-xl" />
// 				</div>
// 				{isOpen && (
// 					<span className="ml-2 max-w-xs truncate whitespace-nowrap">
// 						{label}
// 					</span>
// 				)}
// 			</Link>
// 		</li>
// 	);
// };

const DashboardSidebar = ({ isOpen }) => {
	//const [isOpen, setIsOpen] = useState(false);

	// const handleToggle = () => {
	// 	setIsOpen(!isOpen);
	// };

	return (
		<div
			className={`fixed inset-y-0 z-10 bg-white border-r transition duration-300 ease-in-out transform ${
				isOpen ? "translate-x-0" : ""
			}`}
			style={{ width: isOpen ? "20%" : "5%", zIndex: 9 }}
		>
			<nav className="px-4 py-8">
				<ul className="space-y-2">
					{Object.keys(labelToIconMapping).map((label) => (
						<SidebarItem
							key={label}
							label={label}
							isOpen={isOpen}
							to={`/dashboard/${label.toLowerCase().replace(/ & | /g, "-")}`}
						/>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default DashboardSidebar;
