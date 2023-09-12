import { BiTimeFive } from "react-icons/bi";
import { GiBackwardTime } from "react-icons/gi";
import { BsCalendar2Week } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const BalanceCard = () => {
    return (
        <div className="pb-8 pt-2">
           <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center bg-white border rounded-sm overflow-hidden border-r-teal-400 shadow-teal-400 shadow">
            <div className="p-4 bg-teal-400">
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
    );
};

export default BalanceCard;