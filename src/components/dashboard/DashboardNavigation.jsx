import { dashboardNav } from '../../data/datas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DashboardNavigation() {
  return (
    <div className="">
      <h2 className="px-10 pb-5 pt-10 text-xl font-semibold text-[rgba(5,20,34,0.6)]">
        Main Menu
      </h2>
      <ul className="flex flex-col justify-center gap-5 text-gray-400">
        {dashboardNav.map((item) => (
          <li
            className="flex w-full list-none items-center gap-5 px-10 py-3 transition-all hover:bg-blue-600/30 hover:text-blue-600"
            key={item.id}
          >
            <FontAwesomeIcon icon={item.icon} className="w-6 text-xl" />
            <span className="text-lg font-medium">{item.iconName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardNavigation;
