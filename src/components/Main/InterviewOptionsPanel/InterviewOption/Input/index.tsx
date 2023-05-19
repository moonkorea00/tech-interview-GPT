import { useState } from 'react';
import eyeVisible from '@assets/Main/eye-visible.svg';
import eyeHidden from '@assets/Main/eye-hidden.svg';
import { useFormSelector } from '@store/formContext';
import useForm from '@hooks/useForm';

type OptionsInputProps = {
  name: string;
};

const OptionsInput = ({ name }: OptionsInputProps) => {
  const [isInputTypePassword, setIsInputTypePassword] = useState(true);

  const { formValues } = useFormSelector();
  const { handleChange } = useForm();

  return (
    <div className="relative">
      <input
        type={isInputTypePassword ? 'password' : 'text'}
        name={name}
        value={formValues[name as keyof typeof formValues]}
        onChange={handleChange}
        className=" w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6"
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
  );
};

export default OptionsInput;
