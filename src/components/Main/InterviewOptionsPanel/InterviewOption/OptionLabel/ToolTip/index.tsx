import parse from 'html-react-parser';

type OptionsTooltipProps = {
  tooltipContent?: string;
};

const OptionsTooltip = ({ tooltipContent }: OptionsTooltipProps) => {
  return (
    <div className="absolute bottom-full left-1/2 min-w-[240px] mb-2 transform -translate-x-1/2">
      <div className="bg-[#555555] text-white text-xs px-2.5 py-2 rounded-lg whitespace-pre-line">
        {parse(tooltipContent as string)}
      </div>
      <div className="absolute bottom-0 w-4 h-4 mx-auto inset-x-0">
        <div className="w-3 h-4 bg-[#555555] transform rotate-45 origin-bottom-left"></div>
      </div>
    </div>
  );
};

export default OptionsTooltip;
