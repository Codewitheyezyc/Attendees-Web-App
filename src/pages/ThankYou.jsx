import { Link } from 'react-router-dom';
import thankYou from '../assets/Thank-you-img.png';
import Button from '../ui/Button';

function ThankYou() {
  return (
    <section className="flex h-svh flex-col items-center justify-center bg-white">
      <div className="centerContainer grid grid-cols-2 items-center justify-center gap-24">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-blue-950">Thank You!</h1>
          <p className="mb-10 text-lg text-slate-950">
            Thank you for using our platform. <br />
            Your information has been registered
          </p>
          <Link to="/">
            <Button type={'primary'}>Go back home</Button>
          </Link>
        </div>
        <img src={thankYou} alt="Thank you image" className="w-full" />
      </div>
    </section>
  );
}

export default ThankYou;
