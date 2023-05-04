import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Heading from '../Heading';

const RootLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Header />
      <Heading />
      <Outlet />
    </div>
  );
};

export default RootLayout;
