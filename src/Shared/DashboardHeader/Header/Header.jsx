import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";
// import useAuth from "../../../Hooks/useAuth";
// import { FaUserCircle } from "react-icons/fa";
const Header = ({ sidebarOpen, setSidebarOpen }) => {
	const [isOpen, setIsOpen] = useState(false);
	// const { user } = useAuth();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	// if (!user) {
	// 	// Show loading or a fallback UI while fetching the user
	// 	return <div>Loading...</div>;
	// }
	// console.log(user.photoURL);
	return (
		<header className=" flex w-full   ">
			<div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
				<div className="flex items-center gap-2 sm:gap-4 lg:hidden">
					{/* <!-- Hamburger Toggle BTN --> */}
					<button
						aria-controls="sidebar"
						onClick={(e) => {
							e.stopPropagation();
							setSidebarOpen(!sidebarOpen);
						}}
						className="z-99999 block rounded-full border border-stroke bg-white p-1.5 shadow-lg shadow-purple-400 dark:border-strokedark dark:bg-boxdark lg:hidden"
					>
						{isOpen ? (
							<BsList className="text-black" onClick={toggleMenu} />
						) : (
							<BsX className="text-black" onClick={toggleMenu} />
						)}
					</button>
					{/* <!-- Hamburger Toggle BTN --> */}

					<Link className="block flex-shrink-0 lg:hidden" to="/"></Link>
				</div>

				<div className="hidden sm:block"></div>

				<div className="flex items-center gap-3 2xsm:gap-7">
					<div className="flex justify-center items-center">
						<button className=" btn btn-ghost btn-circle">
							<Link to="/profile">home</Link>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
