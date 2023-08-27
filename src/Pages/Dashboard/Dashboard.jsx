import { BiTimeFive } from "react-icons/bi";
import { GiBackwardTime } from "react-icons/gi";
import { BsCalendar2Week } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import LineChart from "../LineChart/LineChart";
const Dashboard = () => {
	return (
		<>
			<div className="pb-8 pt-2">
				<div className="grid grid-cols-2 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
					<div className=" flex items-center bg-white border rounded-sm overflow-hidden border-r-teal-400 shadow-teal-400 shadow">
						<div className="p-4  bg-teal-400">
							<BiTimeFive className="text-white w-11 h-11"></BiTimeFive>
						</div>
						<div className="px-4 text-gray-700">
							<h3 className="text-sm tracking-wider">Today</h3>
							<p className="text-3xl">0</p>
							<span className="text-sm font-thin">Cost: 0.0</span>
						</div>
					</div>
					<div className="flex items-center bg-white border rounded-sm overflow-hidden shadow-cyan-400 border-r-cyan-400 shadow">
						<div className="p-4 bg-cyan-400">
							<GiBackwardTime className="text-white w-11 h-11"></GiBackwardTime>
						</div>
						<div className="px-4 text-gray-700">
							<h3 className="text-sm tracking-wider">Yesterday</h3>
							<p className="text-3xl">0</p>
							<span className="text-sm font-thin">Cost: 0.0</span>
						</div>
					</div>
					<div className="flex items-center bg-white border rounded-sm overflow-hidden shadow-indigo-400 border-r-indigo-400 shadow">
						<div className="p-4 bg-indigo-400">
							<BsCalendar2Week className="text-white w-11 h-11"></BsCalendar2Week>
						</div>
						<div className="px-4 text-gray-700">
							<h3 className="text-sm tracking-wider">This Week</h3>
							<p className="text-3xl">0</p>
							<span className="text-sm font-thin">Cost: 0.0</span>
						</div>
					</div>
					<div className="flex items-center bg-white border rounded-sm overflow-hidden border-r-rose-400 shadow-rose-400 shadow">
						<div className="p-4 bg-rose-400">
							<MdOutlineCalendarMonth className="text-white w-11 h-11"></MdOutlineCalendarMonth>
						</div>
						<div className="px-4 text-gray-700">
							<h3 className="text-sm tracking-wider">This Month</h3>
							<p className="text-3xl">0</p>
							<span className="text-sm font-thin">Cost: 0.0</span>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12">
				<div className="col-span-8">
					{" "}
					{/* Use col-span-8 here */}
					<LineChart />
				</div>
				<div className="col-span-4">
					<div className="bg-white p-6 rounded-lg shadow-md w-80 mx-auto">
						<div className="text-lg font-bold mb-4">Available Balance</div>
						<hr></hr>
						<div className="text-base mb-6">
							BDT 2.50
							<br />
							Valid till: 10 Nov 2023
						</div>
						<hr></hr>
						<div className="flex justify-between mt-5">
							<button className="px-1 py-1 bg-sky-500 text-white rounded hover:bg-blue-700">
								SMS Rate
							</button>
							<button className="px-1 py-1 bg-sky-500 text-white rounded hover:bg-blue-700">
								Recharge
							</button>
						</div>
					</div>
				</div>{" "}
				{/* Use col-span-4 here */}
			</div>
		</>
	);
};

export default Dashboard;
