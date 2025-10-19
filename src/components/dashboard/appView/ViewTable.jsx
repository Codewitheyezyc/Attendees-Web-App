import { useAuth } from '../../../context/useAuth';

function ViewTable({ colsRows }) {
  const { users } = useAuth();
  console.log(users);

  return (
    <div
      className={`col-[1/4] row-[3/4] h-full w-full rounded-2xl bg-white p-4 shadow-md ${colsRows}`}
    >
      <h3 className="mb-3 text-xl font-semibold">Attendance</h3>
      <div className="grid w-full grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr_2fr] items-center gap-8 border-b pb-2 text-lg font-semibold text-gray-500/30">
        <h4 className="">Name</h4>
        <h4 className="">KC Username</h4>
        <h4 className="">Email</h4>
        <h4 className="">Gender</h4>
        <h4 className="">Campus</h4>
        <h4 className="">Role</h4>
        <h4 className="">Phone Number</h4>
      </div>
      {users === undefined ? (
        <p>No user</p>
      ) : (
        users.map((person) => (
          <div
            className="grid w-full grid-cols-[2fr_2fr_2fr_1fr_1fr_1fr_2fr] items-center justify-between gap-8 border-b border-gray-500/10 py-5 pt-5 text-sm font-bold"
            key={person.name}
          >
            <p className="">
              {person.firstname} {person.lastname}
            </p>
            <p className="">{person.kc}</p>
            <p className="">{person.email}</p>
            <p className="">{person.gender}</p>
            <p className="">{person.zone}</p>
            <p className="rounded-full bg-[#d1e0ee] px-3 py-2 text-[#1864ab]">
              {person.role}
            </p>
            <p className="">{person.phoneNumber}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewTable;
