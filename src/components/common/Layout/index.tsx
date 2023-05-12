import { Outlet } from 'react-router-dom';
import Heading from '../Heading';
import Nav from '../Nav';

const RootLayout = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <Nav />
      <div className="flex flex-col items-center w-full h-full gap-8 pt-20 overflow-y-auto">
        <Heading />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
