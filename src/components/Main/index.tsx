import { useState } from 'react';
import DropDown from './DropDown';
import OptionsInput from './Input';
import ResponseSection from './ResponseSection';
import RequestSection from './RequestSection';
import { SELECT_DATA } from './DropDown/constants';

const Main = () => {
  const [openAIKey, setOpenAIKey] = useState('');

  return (
    <main className="flex flex-col mt-20">
      <div className="flex">
        {SELECT_DATA.map(({ id, label, name, options }) => (
          <DropDown key={id} label={label} name={name} options={options} />
        ))}
        <OptionsInput openAIKey={openAIKey} setOpenAIKey={setOpenAIKey} />
      </div>
      <div className="flex flex-col gap-7 mt-8">
        <RequestSection />
        <ResponseSection />
      </div>
    </main>
  );
};

export default Main;
