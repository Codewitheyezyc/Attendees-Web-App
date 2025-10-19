import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Form() {
  return (
    <form className="flex basis-[40%] items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="mr-[-30px] w-[90%] rounded-full bg-gray-400/50 px-8 py-2 transition-all placeholder:font-thin focus:w-[100%] focus:bg-gray-500/50 focus:outline-0"
      />
      <button className="border-[0] focus:outline-0 active:translate-y-[2px]">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="h-4 w-4 text-[#999]"
        />
      </button>
    </form>
  );
}

export default Form;
