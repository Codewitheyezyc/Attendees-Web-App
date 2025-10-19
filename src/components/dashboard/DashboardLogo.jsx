import Logo from '../../ui/Logo';

function DashboardLogo() {
  return (
    <div className="flex items-center border-b-[1px] border-[#d1e0ee] pb-8 pl-5 pt-3 font-bold text-blue-600">
      <Logo />
      <p className="">Attendees</p>
    </div>
  );
}

export default DashboardLogo;
