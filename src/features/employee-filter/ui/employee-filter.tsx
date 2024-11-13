import {CheckboxUI} from "../../../shared/ui/checkbox";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {setShowArchivedOnly} from "../../../entities/employee/model/employee-slice.ts";
import {FC} from "react";

export const EmployeeFilter: FC = () => {
  const dispatch = useAppDispatch();
  const showArchivedOnly = useAppSelector((state) => state.employee.showArchivedOnly);

  const handleCheckboxChange = (checked: boolean)=> {
    dispatch(setShowArchivedOnly(checked))
  }

  return (
    <CheckboxUI
      label={"Archived only"}
      isArchive={showArchivedOnly}
      onChangeChecked={handleCheckboxChange}
    />
  );
};
