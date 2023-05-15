export type Options = { [key: string]: string };

export type DropdownOptionsProps = {
  label: string;
  type: string;
  name: string;
  tooltipContent: string;
  options?: Options;
};
