import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

export type BaseModalProps = PropsWithChildren & {
  isOpen: boolean;
  modalClassName?: ClassValue;
  closeModal: () => void;
};
