import { useState, Dispatch, SetStateAction } from 'react';
import eyeVisible from '@assets/eye-visible.svg'
import eyeHidden from '@assets/eye-hidden.svg'

type OptionsInputProps = {
  openAIKey: string;
  setOpenAIKey: Dispatch<SetStateAction<string>>;
};

const OptionsInput = ({ openAIKey, setOpenAIKey }: OptionsInputProps) => {
  const [isInputTypePassword, setIsInputTypePassword] = useState(true);

  return (
    <div className="w-[200px] m-4">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        OpenAI API Key
      </label>
      <div className="relative">
        <input
          type={isInputTypePassword ? 'password' : 'text'}
          value={openAIKey}
          onChange={e => setOpenAIKey(e.target.value)}
          className=" w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
        <span
          className="absolute right-0 top-1 cursor-pointer"
          onClick={() => setIsInputTypePassword(prev => !prev)}
        >
          <img
            src={isInputTypePassword ? eyeVisible : eyeHidden}
            alt="view/hide"
            className="w-[28px]"
          />
        </span>
      </div>
    </div>
  );
};

export default OptionsInput;
