import { Link } from 'react-router-dom';

interface HeaderProps{
  operatorName: string;
};

export const Header = (props: HeaderProps) => {
    return (
        <header className="Header">
          <Link to="/" className="Header__operator-name">
            {props.operatorName}
          </Link>
          <nav className="Header__nav">
            <Link to="/lobby" className="Header__nav-link">
              Lobby
            </Link>
            <Link to="/registration" className="Header__nav-link">
              Registration
            </Link>
          </nav>
        </header>
      );
};

