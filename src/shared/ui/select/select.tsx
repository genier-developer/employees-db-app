import Select from '@mui/material/Select';
import {FormControl, InputLabel, SelectChangeEvent} from '@mui/material';
import {MenuItem} from "@mui/material";
import {FC} from "react";

type Option = {
  value: string;
  label: string;
}

type SelectUIProps = {
  label: string;
  options: Option[];
  value: string | undefined;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}
export const SelectUI: FC<SelectUIProps> = ({label, options, value, onChange}) => {

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        // labelId="select-label"
        id="select"
        label={label}
        value={value}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value={''} disabled>
          {label}
        </MenuItem>)
        {options.map(option => <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>)}
      </Select>
    </FormControl>
  )
};
