import type { DropdownOptionsProps } from './Dropdown/types';
import { useState, useRef } from 'react';
import OptionLabel from './OptionLabel';
import OptionsDropdown from './Dropdown';
import OptionsInput from './Input';
import useOnClickOutside from '@hooks/useOnClickOutside';

type InterviewOptionProps = {
  option: DropdownOptionsProps;
};

const InterviewOption = ({ option }: InterviewOptionProps) => {
  const { label, type, name, tooltipContent } = option;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const optionRef = useRef(null);

  useOnClickOutside(optionRef, () => setIsDropdownOpen(false));

  return (
    <div className="relative w-[200px]" ref={optionRef}>
      <OptionLabel label={label} tooltipContent={tooltipContent} />
      {type === 'dropdown' && (
        <OptionsDropdown
          option={option}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
      {type === 'input' && <OptionsInput name={name} />}
    </div>
  );
};

export default InterviewOption;
