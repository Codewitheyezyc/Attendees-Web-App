import GridView from './GridView';
import StatsCards from './StatsCards';
import ViewFooter from './ViewFooter';

import ViewHeader from './ViewHeader';
import ViewLeaders from './ViewLeaders';
import ViewReport from './ViewReport';
import ViewTable from './ViewTable';

function AppView() {
  return (
    <div className="col-[2/3] row-[2/3] grid grid-cols-[1fr_1fr_1fr_300px] grid-rows-[100px_100px_500px_60px] gap-10 bg-[#e8f0f7] px-20">
      <ViewHeader />
      <StatsCards />
      <ViewTable />
      <ViewReport />
      <ViewLeaders />
      <ViewFooter />
      {/* <GridView /> */}
    </div>
  );
}

export default AppView;
