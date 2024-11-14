import {Modal} from "@mui/base";
import {FC, useState} from "react";
import Box from "@mui/material/Box";
import {Button, TextField, Typography} from "@mui/material";
import {SelectUI} from "../../shared/ui/select";
import {useAppDispatch} from "../../app/store.ts";
import {addEmployee} from "../../entities/employee/model/employee-slice.ts";
import {EmployeeResponseData} from "../../entities/employee/model/types.ts";

type EmployeeEditPageProps = {
  isOpen: boolean,
  onClose: () => void,
}

const options= [
  {value: "driver", label: "Driver"},
  {value: "cook", label: "Cook"},
  {value: "waiter", label: "Waiter"},
]
export const EmployeeEditPage: FC<EmployeeEditPageProps> = ({isOpen, onClose}) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [phone, setPhone] = useState('')
  const [birthday, setBirthday] = useState('')

  const dispatch = useAppDispatch()
   const handleSave = () => {
     const newEmployee: EmployeeResponseData = {
       id: Date.now(),
       name,
       role,
       phone,
       birthday,
       isArchive: false
     };
     dispatch(addEmployee(newEmployee))
     onClose()
   }

 return (
   <Modal
     open={isOpen}
     onClose={onClose}
     aria-labelledby="add-employee-modal"
   >
     <Box
       sx={{
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         width: 400,
         bgcolor: 'background.paper',
         boxShadow: 24,
         p: 4,
         borderRadius: 2,
       }}
     >
       <Typography
         id="add-employee-modal"
         variant="h6"
         component="h2">
         Add New Employee
       </Typography>

       <TextField
         label="Name"
         fullWidth
         margin="normal"
         onChange={(e) => setName(e.target.value)}/>

       <SelectUI
         fullWidth
         value={role}
         label="Role"
         options={options}
         onChange={setRole}
       />

       <TextField
         label="Phone"
         fullWidth
         margin="normal"
         onChange={(e) => setPhone(e.target.value)}/>
       <TextField
         label=""
         type="date"
         fullWidth
         margin="normal"
         onChange={(e) => setBirthday(e.target.value)}/>
       <Box
         mt={2}
         display="flex"
         justifyContent="flex-end">
         <Button onClick={onClose} color="secondary" sx={{ mr: 2 }}>
           Cancel
         </Button>
         <Button onClick={handleSave} variant="contained" color="primary">
           Save
         </Button>
       </Box>
     </Box>
   </Modal>
 )
}