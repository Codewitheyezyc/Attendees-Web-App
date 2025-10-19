import { howItWorks } from '../data/datas';

import SectionCard from './SectionCard';

function HowItWorks() {
  return (
    <section className="bg-white pb-[96px]">
      <div className="centerContainer sm:flex sm:flex-col sm:items-center sm:justify-center">
        <h2 className="pt-20 text-2xl font-bold text-slate-800 sm:text-center sm:text-3xl md:text-4xl">
          How It Works
        </h2>
        <p className="break-normal pb-10 pt-5 text-[16px] sm:pb-20 sm:text-center md:text-[20px]">
          Our platform is designed to make your experience smooth and
          stress-free. Here's how it works in just a few simple steps:
        </p>
        <div className="grid grid-cols-1 grid-rows-3 items-center justify-center gap-x-14 md:grid-rows-3 lg:grid-cols-2 lg:gap-x-40 lg:gap-y-14">
          {howItWorks.map((item) => (
            <SectionCard item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
