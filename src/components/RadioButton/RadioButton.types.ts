export interface Option {
  label: string;
  value: string;
}

export interface Props {
  onSelect: (option: Option) => void;
  options: Option[];
  selected: Option;
}
