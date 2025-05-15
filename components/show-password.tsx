"use client";

import { IconButton } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface Props {
  open: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
}

const ShowPasswordIcon = ({ open, onToggle }: Props) => {
  const handleClick = () => {
    onToggle((prev) => !prev);
  };
  return (
    <IconButton variant="plain" onClick={handleClick}>
      {open ? <HiEye /> : <HiEyeOff />}
    </IconButton>
  );
};

export default ShowPasswordIcon;
