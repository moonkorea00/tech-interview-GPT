import { useState, useRef, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import DropDownOptions from './DropDownOptions';
import OptionsInput from './Input';
import { DropDownSVG } from './Svg';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { formValuesProps } from '@types';

type Options = { [key: string]: string };
type InterviewOptionsProps = {
  optionProps: {
    label: string;
    type: string;
    name: string;
    options?: Options;
  };
  formValues: formValuesProps;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InterviewOptions = ({
  optionProps,
  formValues,
  handleChange,
}: InterviewOptionsProps) => {
  const { label, type, name, options } = optionProps;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const optionRef = useRef(null);
  const [queryOptions] = useSearchParams();

  const selectedOption = options?.[queryOptions.get(name) as string];

  useOnClickOutside(optionRef, () => setIsDropDownOpen(false));

  return (
    <div className="relative w-[200px] m-4" ref={optionRef}>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label} &#9432;
      </label>
      {type === 'dropdown' && (
        <>
          <button
            className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
      {type === 'input' && (
        <OptionsInput
          name={name}
          formValues={formValues}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default InterviewOptions;
