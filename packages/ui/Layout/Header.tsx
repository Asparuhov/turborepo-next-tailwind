import Link from "next/link";
interface HeaderProps {
  operatorName: string;
  mainColorNav: string;
  colorLetters: string;
  menuOpener: any;
  document: any;
}

export const Header = (props: HeaderProps) => {
  const toggleMenu = () => {
    props.menuOpener.func(!props.menuOpener.value);
  };

  return (
    <nav className={props.mainColorNav + " px-4"}>
      <div className="flex flex-wrap items-center justify-between h-16">
        <Link href="/" className="flex-shrink-0 flex items-center">
          <h1>{props.operatorName}</h1>
        </Link>

        <div className="hidden sm:flex sm:items-center">
          <Link
            href="/lobby"
            className={`${props.colorLetters} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
          >
            Lobby
          </Link>

          <Link
            href="/registration"
            className={`${props.colorLetters} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
          >
            Registration
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            className={`${props.colorLetters} hover:bg-gray-700 inline-flex focus:outline-none items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none`}
            aria-expanded={props.menuOpener.value}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`focus:outline-none h-6 w-6 ${
                props.menuOpener.value ? "hidden" : "block"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className={`focus:outline-none h-6 w-6 ${
                props.menuOpener.value ? "block" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="sidebar"
        className={`${
          props.menuOpener.value ? "block" : "hidden"
        } sm:hidden fixed top-0 right-0 h-screen w-1/2 bg-gray-800 z-50 transition-all ease-in-out duration-500`}
      >
        <div className="flex flex-row-reverse">
          <button
            className="text-gray-400 hover:text-white focus:outline-none pr-4 pt-2"
            onClick={toggleMenu}
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <Link
            href="/lobby"
            className={`${props.colorLetters} hover:bg-gray-700 py-4 text-xl font-medium text-center border-b border-gray-700 text-white`}
            onClick={toggleMenu}
          >
            Lobby
          </Link>

          <Link
            href="/registration"
            className={`${props.colorLetters} hover:bg-gray-700 py-4 text-xl font-medium text-center text-white`}
            onClick={toggleMenu}
          >
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};
