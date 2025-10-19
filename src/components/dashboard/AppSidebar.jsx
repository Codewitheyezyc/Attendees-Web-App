import DashboardLogo from './DashboardLogo';
import DashboardNavigation from './DashboardNavigation';

function AppSidebar() {
  return (
    <div className="col-[1/2] row-[1/3] bg-[#fff]">
      <DashboardLogo />
      <DashboardNavigation />
    </div>
  );
}

export default AppSidebar;
