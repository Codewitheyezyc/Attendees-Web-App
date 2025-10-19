import StatsCards from './StatsCards';
import ViewTable from './ViewTable';

function GridView() {
  return (
    <div className="grid flex-1 grid-cols-6 grid-rows-6 items-center p-4">
      <StatsCards colsRows="col-[1/5] row-[1/2] " />
      <ViewTable colsRows="col-[1/5] row-[2/6] " />
    </div>
  );
}

export default GridView;
