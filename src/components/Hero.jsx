import { Link } from 'react-router-dom';
import Button from '../ui/Button';

function Hero() {
  return (
    <section className="flex h-svh flex-col items-center justify-center bg-blue-300 md:py-[96px]">
      <div className="centerContainer flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-9 flex flex-col items-center justify-center text-[30px] font-bold text-slate-950 sm:text-5xl md:text-6xl">
            Track Attendance with Ease
            <span className="-700 my-4 inline-block rounded bg-purple-900 px-3 py-1 text-slate-50 sm:px-5 sm:py-2">
              — Anywhere. Anytime —
            </span>
          </h1>
          <p className="mb-9 text-sm sm:text-center sm:text-base md:text-lg">
            Built for churches and ministries, this smart web app makes it
            simple to register members, manage attendance, and access real-time
            data across all groups and events — locally and globally.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/registration">
              <Button type={'primary'}>Register Now</Button>
            </Link>
            <Link to="/login">
              <Button type={'secondary'}>Admin Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
