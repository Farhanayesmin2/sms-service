import {
	FiHome,
	FiUpload,
	FiBarChart2,
	FiMessageSquare,
	FiMonitor,
	FiTrash2,
	FiSend,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
	return (
		<div className="w-[20%] h-full flex flex-col items-center  justify-between">
			<div className="logo flex-col items-center justify-center mt-4 ml-0">
				<img src="/dashboard logo.jpg" />
				<br />
				<span className="text-2xl font-bold">SMS Service</span>
			</div>
			<div className="">
				<ul className="link-list flex flex-col items-start justify-center ml-0">
					<li className="text-start">
						<Link to="/">
							<span className="flex text-md font-semibold items-center">
								<FiHome className="icon mr-1" />
								<span>Home</span>
							</span>
						</Link>
					</li>
					<li className="text-start">
						<Link to="/dashboard/upload">
							<span className="flex items-center text-md font-semibold">
								<FiUpload className="icon mr-1" />
								<span>Upload</span>
							</span>
						</Link>
					</li>
					<li className="text-start">
						<Link to="/dashboard/explore">
							<span className="flex items-center text-md font-semibold">
								<FiBarChart2 className="icon mr-1" />
								<span>Explore Your Data</span>
							</span>
						</Link>
					</li>
					<li className="text-start">
						<Link to="/dashboard/chat">
							<span className="flex items-center text-md font-semibold">
								<FiMessageSquare className="icon mr-1" />
								<span>Chat with your Data</span>
							</span>
						</Link>
					</li>
					<li className="text-start">
						<Link to="/dashboard/train">
							<span className="flex items-center text-md font-semibold">
								<FiMonitor className="icon mr-1" />
								<span>Train</span>
							</span>
						</Link>
					</li>
					<li className="text-start">
						<Link to="/dashboard/predict">
							<span className="flex items-center text-md font-semibold">
								<FiSend className="icon mr-1" />
								<span>Start Predicting! 🚀</span>
							</span>
						</Link>
					</li>
					<li className="text-start">
						<Link to="/dashboard/delete">
							<span className="flex items-center text-md font-semibold">
								<FiTrash2 className="icon mr-1" />
								<span>Delete Your Data</span>
							</span>
						</Link>
					</li>
					<li className="text-start">
						<Link to="/feedback">
							<span className="flex items-center text-md font-semibold">
								<FiSend className="icon mr-1" />
								<span>Give us Feedback</span>
							</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="toggle-icon ml-4 mb-4">
				<p className=" text-gray-600 font-medium">
					You'll be able to build your own ML model in just a few clicks! 🤩
				</p>
			</div>
		</div>
	);
};

export default DashboardSidebar;
