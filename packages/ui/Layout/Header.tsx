import Link from "next/link";
interface HeaderProps {
  operatorName: string;
  mainColorNav: string;
  secondaryColor: string;
  colorLetters: string;
  menuOpener: any;
  document: any;
  sidebarRef: any;
  sidebarButtonRef: any;
}

export const Header = (props: HeaderProps) => {
  const toggleMenu = () => {
    props.menuOpener.func(!props.menuOpener.value);
  };

  return (
    <div className={"bg-"+props.mainColorNav + " px-4 fixed w-full z-50 "}>
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
            className={`${props.colorLetters}px-3 py-2 rounded-md text-sm font-medium`}
          >
            Registration
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            className={`${props.colorLetters}inline-flex focus:outline-none items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none`}
            aria-expanded={props.menuOpener.value}
            onClick={toggleMenu}
            ref={props.sidebarButtonRef}
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
          props.menuOpener.value
            ? "translate-x-0 active "
            : "translate-x-full inactive"
        } sm:hidden right-0 h-screen w-1/2 z-50 ease-in-out duration-500 md:w-full md:sticky md:top-16 md:z-0 top-13 z-20 fixed md:h-[calc(100vh_-_64px)] h-full w-[300px] bg-${props.mainColorNav} border-t-4`}
        ref={props.sidebarRef}
      >
        <div className="flex flex-col items-center h-full">
          <Link
            href="/lobby"
            className={`text-black py-4 text-xl font-medium text-center text-white`}
            onClick={toggleMenu}
          >
            Lobby
          </Link>

          <Link
            href="/registration"
            className={`text-black py-4 text-xl font-medium text-center text-white`}
            onClick={toggleMenu}
          >
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

/*  "flex flex-col justify-between bg-indigo-700 text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[calc(100vh_-_64px)] h-full w-[300px] transition-transform .3s ease-in-out md:translate-x-0" */
