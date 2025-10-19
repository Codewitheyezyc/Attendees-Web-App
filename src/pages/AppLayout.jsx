import AppHeader from '../components/dashboard/appHeader/AppHeader';
import AppSidebar from '../components/dashboard/AppSidebar';
import AppView from '../components/dashboard/appView/AppView';

function AppLayout() {
  return (
    <div className="grid h-svh grid-cols-[300px_1fr] grid-rows-[90px_1fr]">
      <AppHeader />
      <AppSidebar />
      <AppView />
    </div>
  );
}

export default AppLayout;
