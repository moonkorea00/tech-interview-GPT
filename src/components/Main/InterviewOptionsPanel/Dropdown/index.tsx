import { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';
import DropdownButton from './DropdownButton';
import DropdownList from './DropdownList';
import { Options, DropdownOptionsProps } from './types';

type OptionsDropdownProps = {
  option: DropdownOptionsProps;
  isDropdownOpen: boolean;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const OptionsDropdown = ({
  option,
  isDropdownOpen,
  setIsDropdownOpen,
}: OptionsDropdownProps) => {
  const { name, options } = option;
  const [searchParams] = useSearchParams();

  const selectedOption = options?.[searchParams.get(name) as string];

  return (
    <>
      <DropdownButton
        selectedOption={selectedOption as string}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {isDropdownOpen && (
        <DropdownList
          name={name}
          options={options as Options}
          selectedOption={selectedOption as string}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </>
  );
};

export default OptionsDropdown;
