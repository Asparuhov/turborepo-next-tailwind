import { useRouter } from 'next/router';
import Link from 'next/link';

interface RoutesProps {
  children?: React.ReactNode;
}

const RoutesNav = (props: RoutesProps) => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Operator Name */}
          <Link href="/" className="flex-shrink-0 flex items-center">

            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
            <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />

          </Link>

          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/' ? 'bg-gray-900 text-white' : ''}`}>
                  Home
                </Link>
                <Link
                  href="/lobby"
                  className={`text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/lobby' ? 'bg-gray-900 text-white' : ''}`}>
                  Lobby
                </Link>
                <Link
                  href="/registration"
                  className={`text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/registration' ? 'bg-gray-900 text-white' : ''}`}>
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

export default RoutesNav;