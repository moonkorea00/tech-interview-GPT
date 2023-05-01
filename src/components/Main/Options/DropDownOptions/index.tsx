import { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SelectSVG } from '../Svg';

type DropDownOptionsProps = {
  options: { [key: string]: string };
  name: string;
  selectedOption: string;
  setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
};

const DropDownOptions = ({
  options,
  name,
  selectedOption,
  setIsDropDownOpen,
}: DropDownOptionsProps) => {
  const [queryOptions, setQueryOptions] = useSearchParams();

  const handleOptionsParam = (key: string, value: string) => {
    setQueryOptions(prev => {
      queryOptions.set(key, value);
      return prev;
    });
    setIsDropDownOpen((prev: boolean) => !prev);
  };

  return (
    <ul className="absolute mt-1 max-h-56 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      {Object.keys(options).map((value, i) => (
        <li
          key={i}
          onClick={() => handleOptionsParam(name, value)}
          className="w-full relative py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-indigo-100"
        >
          <div className="flex items-center">
            <span
              className={`${
                selectedOption === options[value]
                  ? 'font-semibold'
                  : 'font-normal'
              } ml-3 block`}
            >
              {options[value]}
            </span>
          </div>
          <span
            className={`${
              selectedOption === options[value]
                ? 'text-indigo-600'
                : 'text-white'
            } absolute inset-y-0 right-0 flex items-center pr-4`}
          >
            <SelectSVG />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DropDownOptions;
