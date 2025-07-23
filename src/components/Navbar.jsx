import { Link, NavLink } from 'react-router-dom';
import attendeesLogo from '../assets/attendees-logo.png';
import Button from '../ui/Button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-blue-200 py-5 text-base font-normal text-slate-800 sm:py-6">
      <div className="mx-auto flex w-[90%] max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={attendeesLogo} alt="Attendees Logo" className="h-14" />
            <span className="text-lg font-semibold text-slate-800">
              Atendees
            </span>
          </Link>
        </div>

        {/* Hamburger menu (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-slate-800 focus:outline-none"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        <nav className="hidden items-center gap-12 md:flex">
          <ul className="flex items-center gap-12">
            <li className="">
              <NavLink>How It Works</NavLink>
            </li>
            <li className="">
              <NavLink>Why This App</NavLink>
            </li>
          </ul>
          <Link to="/registration">
            <Button type={'small'}>Register</Button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu (only visible when isOpen is true) */}
      {isOpen && (
        <div className="space-y-6 px-6 pb-4 pt-4 md:hidden">
          <NavLink
            to="/how-it-works"
            className="block text-slate-800 hover:text-blue-700"
          >
            How It Works
          </NavLink>
          <NavLink
            to="/why-this-app"
            className="block text-slate-800 hover:text-blue-700"
          >
            Why This App?
          </NavLink>
          <Link to="registration">
            <Button type={'small'}>Register</Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
