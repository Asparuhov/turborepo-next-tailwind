import { Route, Routes} from 'react-router-dom';
/* import {HomePage} from './pages';
import Lobby from './pages/Lobby';
import Registration from './pages/Registration'; */
interface RoutesProps {
    children?: React.ReactNode;
    location?: Partial<Location> | string;
  }
  
const RoutesNav = (props: RoutesProps) => {
  return (
    <Routes location={props.location}>
      <Route path="/" element={<></>} />
      <Route path="/lobby" element={<></>} />
      <Route path="/registration" element={<></>} />
    </Routes>
  );
};

export default Routes;