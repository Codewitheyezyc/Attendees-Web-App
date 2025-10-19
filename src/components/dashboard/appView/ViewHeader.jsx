import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ViewHeader() {
  return (
    <div className="col-[1/-1] flex items-center justify-between px-5">
      <h2 className="text-3xl font-bold">Welcome! Admin 🖐</h2>
      <div className="flex items-center gap-3 rounded-full bg-blue-500 px-8 py-2 font-semibold text-white">
        <FontAwesomeIcon icon={faPlus} />
        <span>Add User</span>
      </div>
    </div>
  );
}

export default ViewHeader;
