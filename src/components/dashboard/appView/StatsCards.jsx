import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { statsCards } from '../../../data/datas';

function StatsCards() {
  return (
    <div className="$ col-[1/4] row-[2/3] flex w-full items-center gap-5">
      {statsCards.map((card) => (
        <div
          className="flex w-full flex-1 items-center gap-5 rounded-2xl px-8 py-4 shadow-md"
          style={{ backgroundColor: card.shade }}
        >
          <FontAwesomeIcon
            icon={card.icon}
            className="w-6 rounded-md px-1 py-2 text-white shadow-xl"
            style={{
              backgroundColor: card.tint,
              boxShadow: `0px 2px 10px ${card.tint}`,
            }}
          />
          <div className="">
            <p className="text-lg font-medium text-gray-500/50">
              {card.message}
            </p>
            <p className="text-2xl font-bold">{card.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
