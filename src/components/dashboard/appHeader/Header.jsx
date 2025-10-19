import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <button className="rounded-full bg-red-600 px-5 py-3 text-white">
        logout
      </button>
      <div className="flex items-center gap-6">
        <div className="relative flex items-center">
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
            <p className="text-[12px] font-semibold text-red-500">0</p>
          </div>
          <FontAwesomeIcon
            icon={faBell}
            className="h-[24px] w-[24px] text-blue-500"
          />
        </div>
        <p className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-4 text-sm font-semibold text-white">
          AD
        </p>
      </div>
    </div>
  );
}

export default Header;
