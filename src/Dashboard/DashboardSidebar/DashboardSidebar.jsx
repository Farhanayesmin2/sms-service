import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiHome, FiMessageSquare, FiBarChart2 } from "react-icons/fi";
import { BiSolidContact, BiSolidUser, BiCodeAlt } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const getIcon = (label) => {
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

  const Icon = labelToIconMapping[label];
  return Icon ? <Icon className="text-xl" /> : null;
};

const DropdownMenuItem = ({ label, to }) => (
  <li className="py-2 px-4 hover:text-purple-500">
    <Link to={to} className="flex items-center">
      <span className="ml-2 max-w-xs truncate whitespace-nowrap">
        {label}
      </span>
    </Link>
  </li>
);

const SidebarItem = ({ label, to, isOpen, subMenuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const Icon = getIcon(label);

  return (
    <li className="py-2 px-4 hover:text-purple-500">
      <div className="flex items-center justify-between" onClick={() => subMenuItems && setIsDropdownOpen(!isDropdownOpen)}>
        <Link to={to} className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 mr-2">
            {Icon}
          </div>
          {isOpen && <span className="ml-2 max-w-xs truncate whitespace-nowrap">{label}</span>}
        </Link>
		{subMenuItems && (
    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
    </div>
)}

      </div>
      {isOpen && isDropdownOpen && subMenuItems && (
        <ul className="ml-6">
          {subMenuItems.map((subMenuItem) => (
            <DropdownMenuItem
              key={subMenuItem.label}
              label={subMenuItem.label}
              to={subMenuItem.to}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const DashboardSidebar = ({ isOpen }) => {
  const menuItems = [
    {
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      label: "Messaging",
      to: "/dashboard/messaging",
      subMenuItems: [
        {
          label: "Send SMS",
          to: "/dashboard/send-sms",
        },
        {
          label: "Send From File",
          to: "/dashboard/send-from-file",
        },
        {
          label: "Sender ID",
          to: "/dashboard/messaging/sender-id",
        },
        {
          label: "Scheduled SMS",
          to: "/dashboard/messaging/scheduled-sms",
        },
        {
          label: "Templates",
          to: "/dashboard/messaging/templates",
        },
      ],
	  
    },
	{
		label: "PhoneBook",
		to: "/dashboard/phonebook",
	  },
	  {
		label: "SMS Rate",
		to: "/dashboard/sms-rate",
	  },
	  {
		label: "Reports",
		to: "/dashboard/reports",
	  },
	  {
		label: "My Account",
		to: "/dashboard/my-account",
	  },
	  {
		label: "API",
		to: "/dashboard/api",
	  },
	  {
		label: "Terms & conditions",
		to: "/dashboard/terms-conditions",
	  },
	];
 

  return (
    <div
      className={`fixed inset-y-0 z-10 bg-white border-r transition duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : ""
      }`}
      style={{ width: isOpen ? "20%" : "5%", zIndex: 9 }}
    >
      <nav className="px-4 py-8">
        <ul className="space-y-2">
          {menuItems.map((menuItem) => (
            <SidebarItem
              key={menuItem.label}
              label={menuItem.label}
              to={menuItem.to}
              isOpen={isOpen}
              subMenuItems={menuItem.subMenuItems}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
