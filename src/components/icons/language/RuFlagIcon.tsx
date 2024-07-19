import { FC } from "react";
import { IIconProps } from "../../../types/interfaces";

export const RuFlagIcon: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 513 343" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.986328V342.985H513V0.986328H0Z" fill="white" />
      <path d="M0 0.989258H513V342.993H0V0.989258Z" fill="#0052B4" />
      <path d="M0 0.989258H513V114.986H0V0.989258Z" fill="white" />
      <path d="M0 228.984H513V342.982H0V228.984Z" fill="#D80027" />
    </svg>
  );
};
