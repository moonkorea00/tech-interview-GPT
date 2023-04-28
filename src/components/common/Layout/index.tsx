import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Heading from '../Heading';

const RootLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-w-7xl">
       {/* border border-black border-solid */}
      <Header />
      <Heading />
      <Outlet />
    </div>
  );
};

export default RootLayout;
