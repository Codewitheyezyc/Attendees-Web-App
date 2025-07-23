function SectionCard({ item }) {
  return (
    <>
      {/* <FontAwesomeIcon
        icon={item.image}
        className="mr-6 h-4 w-4 rounded-full bg-blue-300 p-3 text-slate-50 sm:h-6 sm:w-6"
      /> */}

      <div className="">
        <p className="mb-2 text-base font-semibold sm:mb-4 sm:text-2xl">
          {item.heading}
        </p>
        <p className="text-sm">{item.text}</p>
      </div>
      <img
        src={item.image}
        alt={item.id}
        className={`${item.id === 2 ? 'max-w-lg lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3' : 'max-w-lg'}`}
      />
    </>
  );
}

/**
 * h-50 mb-4 flex max-w-[500px] place-self-center rounded bg-slate-50 p-4 shadow-lg shadow-blue-200 sm:p-7
 *
 * col-start-2 -col-end-4 row-start-2 row-end-3
 *
 * grid grid-cols-2 items-center gap-96
 */

export default SectionCard;
