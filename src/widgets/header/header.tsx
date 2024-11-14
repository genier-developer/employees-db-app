import {FC} from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {EmployeeFilter} from "../../features/employee-filter/ui/employee-filter.tsx";

type HeaderProps = {
  onAddEmployeeClick: ()=> void
}
export const Header: FC<HeaderProps> = ({onAddEmployeeClick}) => {
  return (
    <header>
      <AppBar
        position={'static'}
        color={'default'}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employees DB app
          </Typography>
          <EmployeeFilter />
          <Button color="inherit"
                  sx={{textTransform: 'none', fontSize: '15px'}}
                  onClick={onAddEmployeeClick}
          >
            Add employee
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};