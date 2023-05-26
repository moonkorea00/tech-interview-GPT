import { useInterviewSessionSelector } from '@store/interviewSessionContext';
import NavItem from '../NavItem';

const NavList = () => {
  const { sessions } = useInterviewSessionSelector();

  return (
    <>
      <p className="p-3 lg:p-2 sm:p-1.5 mb-3 lg:mb-1 font-medium text-[rgb(101,108,135)] sm:text-sm bg-gray-200 rounded-md">
        Session History
      </p>
      <ul className="flex flex-col gap-2">
        {sessions?.map(({ id, question, search }) => (
          <NavItem key={id} id={id} navLabel={question} search={search} />
        ))}
        {sessions?.length === 0 && (
          <p className="p-3 text-sm rounded-md">No history</p>
        )}
      </ul>
    </>
  );
};

export default NavList;
