FontAwesomeIcon;
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function User() {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-2 self-stretch px-[10px] transition-all hover:bg-gray-400/10">
      <FontAwesomeIcon icon={faUser} className="text-lg" />
      <span className="text-sm">Admin</span>
    </div>
  );
}

export default User;
