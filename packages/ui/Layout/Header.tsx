import Link from 'next/link';
import { useRouter } from 'next/router';
interface HeaderProps{
  operatorName: string;
  mainColorNav: string;
  colorLetters: string;
};

export const Header = (props: HeaderProps) => {
    const router = useRouter();
    
    return (
        <nav className={props.mainColorNav}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <h1>{props.operatorName}</h1>
          </Link>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`${props.colorLetters} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/' ? 'bg-gray-900 text-white' : ''}`}>
                  Home
                </Link>
                <Link
                  href="/lobby"
                  className={`${props.colorLetters} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/lobby' ? 'bg-gray-900 text-white' : ''}`}>
                  Lobby
                </Link>
                <Link
                  href="/registration"
                  className={`${props.colorLetters} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/registration' ? 'bg-gray-900 text-white' : ''}`}>
                  Registration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
      );
};

