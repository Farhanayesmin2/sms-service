import { FaHashtag, FaRegCalendarAlt } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const DashboardTable = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto py-6 px-4 sm:px-4 lg:px-8 border border-2">
        <h1 className="text-2xl font-semibold text-gray-900">Latest Transactions</h1>
        <hr />
        <div className="mt-4">
          <div className="overflow-x-auto">
            <div className="w-full shadow overflow-hidden bg-white shadow-dashboard rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 bg-gray-50 text-left text-xs sm:text-sm md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      <FaHashtag className="inline-block mr-1" />
                      ID
                    </th>
                    <th className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 bg-gray-50 text-left text-xs sm:text-sm md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Reference
                    </th>
                    <th className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 bg-gray-50 text-left text-xs sm:text-sm md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      <TbCurrencyTaka className="inline-block mr-1 text-xl" />
                      Amount
                    </th>
                    <th className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 bg-gray-50 text-left text-xs sm:text-sm md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      <FaRegCalendarAlt className="inline-block mr-1" />
                      DateTime
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 whitespace-no-wrap border-b border-gray-200">
                      5504
                    </td>
                    <td className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 whitespace-no-wrap border-b border-gray-200">
                      Sign UP Bonus
                    </td>
                    <td className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 whitespace-no-wrap border-b border-gray-200">
                      $2.50
                    </td>
                    <td className="px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 whitespace-no-wrap border-b border-gray-200">
                      August 10, 2023 at 4:44 PM
                    </td>
                  </tr>
                  {/* Add more rows with data here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
