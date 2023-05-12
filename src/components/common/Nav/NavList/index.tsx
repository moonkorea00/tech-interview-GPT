import { useInterviewSessionSelector } from '@hooks/useInterviewSessionContext';
import NavItem from '../NavItem';

const NavList = () => {
  const { sessions } = useInterviewSessionSelector();
  
  return (
    <>
      <p className="p-3 mb-3 font-medium text-[rgb(101,108,135)] bg-gray-200 rounded-md">
        Session History
      </p>
      <ul className="flex flex-col gap-2">
        {sessions?.map(({ id, question, search }) => (
          <NavItem key={id} id={id} navLabel={question} search={search} />
        ))}
        {sessions?.length === 0 && (
          <p className="p-3 text-sm rounded-md cursor-pointer">No history</p>
        )}
      </ul>
    </>
  );
};

export default NavList;
