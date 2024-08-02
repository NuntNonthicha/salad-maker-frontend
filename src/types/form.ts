import { FocusEventHandler, FormEvent } from "react";

//Base Checkbox
export type ICheckBoxProps = {
  className?: string;
  id?: string;
  checked?: boolean;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  imageSrc?: string;
  label?: string;
};
