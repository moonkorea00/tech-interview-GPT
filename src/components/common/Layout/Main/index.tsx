import type { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col items-center w-[950px] xl:w-[730px] lg:w-[100%] lg:px-[40px] md:px-[20px] sm:px-[10px]">
      {children}
    </div>
  );
};

export default MainLayout;
