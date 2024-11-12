import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from "@mui/material";
import {FC} from "react";
import * as React from "react";

type CheckboxProps = {
  onChangeChecked?: (checked: boolean) => void;
  isArchive?: boolean;
  label?: string;
}

export const CheckboxUI: FC<CheckboxProps> = ({label, onChangeChecked, isArchive}) => {
  //wrapper for according to type of MUI Checkbox property
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(onChangeChecked){
      onChangeChecked(event.target.checked);
    }
  }

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} checked={isArchive}/>}
      label={label}
    />
  );
};

