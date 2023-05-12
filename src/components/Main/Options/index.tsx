import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import DropDownOptions from './DropDownOptions';
import OptionsInput from './Input';
import { DropDownSVG } from './Svg';
import useOnClickOutside from '../hooks/useOnClickOutside';

type Options = { [key: string]: string };
type InterviewOptionsProps = {
  option: {
    label: string;
    type: string;
    name: string;
    options?: Options;
  };
};

const InterviewOptions = ({ option }: InterviewOptionsProps) => {
  const { label, type, name, options } = option;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const optionRef = useRef(null);
  const [queryOptions] = useSearchParams();

  const selectedOption = options?.[queryOptions.get(name) as string];

  useOnClickOutside(optionRef, () => setIsDropDownOpen(false));

  return (
    <div className="relative w-[200px] mx-4" ref={optionRef}>
      <label className="block text-sm font-medium leading-6">
        {label} &#9432;
      </label>
      {type === 'dropdown' && (
        <>
          <button
            className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6"
            onClick={() => setIsDropDownOpen(prev => !prev)}
          >
            <span className="flex items-center">
              <span className="ml-3">{selectedOption || 'Select'}</span>
            </span>
            <span className="absolute inset-y-0 right-0 ml-3 flex items-center pr-2 pointer-events-none">
              <DropDownSVG />
            </span>
          </button>
          {isDropDownOpen && (
            <DropDownOptions
              options={options as Options}
              name={name}
              selectedOption={selectedOption as string}
              setIsDropDownOpen={setIsDropDownOpen}
            />
          )}
        </>
      )}
      {type === 'input' && <OptionsInput name={name} />}
    </div>
  );
};

export default InterviewOptions;
