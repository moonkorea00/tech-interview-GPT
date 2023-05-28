import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import destroy from '@assets/Nav/delete.svg';
import confirm from '@assets/Nav/confirm.svg';
import cancel from '@assets/Nav/cancel.svg';
import useOnClickOutside from '@hooks/useOnClickOutside';
import useSession from '@hooks/useSession';

type NavItemProps = {
  id: string;
  navLabel: string;
  toggleNavBar?: () => void;
};

const NavItem = ({ id, navLabel, toggleNavBar }: NavItemProps) => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const navItemRef = useRef(null);

  const { deleteSession } = useSession();

  useOnClickOutside(navItemRef, () => setIsDeleteMode(false));

  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        `p-2 text-sm rounded-md transition-all duration-200 cursor-pointer hover:text-[#385FE8] hover:bg-[#EBF0FE] ${
          isActive && ' text-[#385FE8] bg-[#EBF0FE]'
        }`
      }
      ref={navItemRef}
      onClick={toggleNavBar}
    >
      <li>
        <div className="flex justify-between">
          <span className="w-[200px] lg:w-[260px] truncate sm:text-sm">
            {navLabel}
          </span>
          <div className="flex justify-end gap-2 w-14">
            {isDeleteMode ? (
              <>
                <img
                  src={confirm}
                  alt="confirm"
                  className="w-[18px] border"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteSession(id);
                  }}
                />

                <img
                  src={cancel}
                  alt="cancel"
                  className="w-[16px]"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDeleteMode(false);
                  }}
                />
              </>
            ) : (
              <>
                <img
                  src={destroy}
                  alt="delete"
                  className="w-[16px]"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDeleteMode(true);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </li>
    </NavLink>
  );
};

export default NavItem;
