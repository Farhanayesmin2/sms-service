import { FiMenu } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";

const Header = ({ handleSidebarToggle, isOpen }) => {
	return (
		<header className="flex w-full">
			<div className="pt-0 mt-0">
				<button
					onClick={handleSidebarToggle}
					className="z-10 w-12 h-12 bg-white rounded-full shadow-md transition duration-300 ease-in-out flex items-center justify-center"
				>
					{isOpen ? (
						<FiMenu className="text-gray-500 hover:text-gray-700 text-2xl" />
					) : (
						<RiMenu2Fill className="text-gray-500 hover:text-gray-700 text-2xl" />
					)}
				</button>
			</div>
		</header>
	);
};

export default Header;
