import DashboardTable from "../DashboardTable/DashboardTable";
import LineChart from "../LineChart/LineChart";
import Balance from "./Balance/Balance";
import BalanceCard from "./BalanceCard/BalanceCard";
import QuickText from "./QuickText/QuickText";


const Dashboard = () => {
  return (
    <>
    <div>
       <div>
       <BalanceCard
       >  </BalanceCard>
       </div>
       <div className="grid grid-rows-2 lg:grid-cols-3 gap-2 ">
<div className=" md:row-span-2 md:col-span-2 "> <LineChart></LineChart>  </div>
<div className="md:row-span-1 pb-0 mb-0 ">  <Balance></Balance>    </div>
<div className="    md:row-span-1 lg:-mt-14 md:-mt-28  "><QuickText></QuickText>      </div>

</div>
<div>
  <DashboardTable></DashboardTable>
</div>
    </div>
</>
  );
};

export default Dashboard;
