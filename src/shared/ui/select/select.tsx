import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';
import {MenuItem} from "@mui/material";
import {useState} from "react";


// const  role: 'driver'|'cook'|'waiter'

export const SelectUI = () => {
  const [role, setRole] = useState<string>();

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  }
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Role"
      onChange={handleChange}
      value={role}
    >
      <MenuItem value={'driver'}>Driver</MenuItem>
      <MenuItem value={'cook'}>Cook</MenuItem>
      <MenuItem value={'waiter'}>Waiter</MenuItem>
    </Select>
  )
};
