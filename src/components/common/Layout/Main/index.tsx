import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
};

const MainLayout = ({ children, tag: LayoutTag = 'div' }: LayoutProps) => {
  return (
    <LayoutTag className="flex flex-col items-center w-[950px] xl:w-[730px] lg:w-[100%] lg:px-[40px] md:px-[20px] sm:px-[10px]">
      {children}
    </LayoutTag>
  );
};

export default MainLayout;
