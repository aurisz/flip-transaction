export interface Option {
  label: string;
  value: string;
}

interface CommonProps {
  onSelect: (option: Option) => void;
  selected: Option;
}

export interface OptionProps extends CommonProps {
  option: Option;
}

export interface Props extends CommonProps {
  options: Option[];
}
