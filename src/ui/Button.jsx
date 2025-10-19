function Button({ children, type, onClick }) {
  const base =
    'inline-block cursor-pointer rounded bg-blue-600  font-semibold uppercase text-blue-50 transition-all hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-offset-2 duration-300 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' md:px-6 md:py-3 px-4 py-1 ',
    small: base + ' px-3 py-1 md:px-4 md:py-2 ',
    secondary:
      'inline-block cursor-pointer rounded   font-semibold uppercase text-slate-800 hover:text-slate-800 transition-all duration-300 border-2 border-slate-300 hover:bg-blue-100 focus:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-2.5 px-4 py-0.5',
    signIn:
      'inline-block cursor-pointer rounded   font-semibold uppercase text-purple-50 hover:text-slate-800 transition-all duration-300 border-2 border-purple-300 hover:bg-purple-100 focus:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-2.5 px-4 py-0.5 bg-purple-800 w-full rounded-full',

    cancel:
      'inline-block cursor-pointer rounded bg-black-600  font-semibold uppercase text-blue-50 transition-all hover:bg-black-900 focus:bg-black-900 focus:outline-none focus:ring focus:ring-black focus:ring-offset-2 duration-300 bg-black disabled:cursor-not-allowed md:px-6 md:py-3 px-4 py-1',
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
