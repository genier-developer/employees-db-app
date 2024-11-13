import {CheckboxUI} from "../../../shared/ui/checkbox";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {setShowArchivedOnly} from "../../../entities/employee/model/employee-slice.ts";

export const EmployeeFilter = () => {
  const dispatch = useAppDispatch();
  const showArchivedOnly = useAppSelector((state) => state.employee.showArchivedOnly);

  const handleCheckboxChange = (checked: boolean)=> {
    dispatch(setShowArchivedOnly(checked))
  }

  return (
    <CheckboxUI
      label={"Show archived only"}
      isArchive={showArchivedOnly}
      onChangeChecked={handleCheckboxChange}
    />
  );
};
