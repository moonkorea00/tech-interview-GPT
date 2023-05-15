import { useState } from 'react';
import OptionsTooltip from './ToolTip';

type OptionLabel = {
  label: string;
  tooltipContent: string;
};

const OptionLabel = ({ label, tooltipContent }: OptionLabel) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <label className="block text-sm font-medium leading-6">
      <span>{label} </span>
      <span
        className="relative"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <span className="cursor-pointer">&#9432;</span>
        {isTooltipVisible && <OptionsTooltip tooltipContent={tooltipContent} />}
      </span>
    </label>
  );
};

export default OptionLabel;
