import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';
import {MenuItem} from "@mui/material";
import {FC, useState} from "react";

type SelectProps = {
  role: 'driver'|'cook'|'waiter'
}
export const SelectUI: FC<SelectProps> = ({role}) => {
  const [role1, setRole1] = useState<string>(role);
  const handleChange = (event: SelectChangeEvent) => {
    setRole1(event.target.value as string);
  }
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Role"
      onChange={handleChange}
      value={role1}
    >
      <MenuItem value={'driver'}>Driver</MenuItem>
      <MenuItem value={'cook'}>Cook</MenuItem>
      <MenuItem value={'waiter'}>Waiter</MenuItem>
    </Select>
  )
};
