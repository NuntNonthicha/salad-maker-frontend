import { ClassValue } from "clsx";
import { ImageProps } from "next/image";

export type ILogoProps = Omit<ImageProps, "alt" | "src">;

export interface IImageProps extends ILogoProps {}

export interface IconProps {
  className: ClassValue;
  onClick?: () => void;
}
