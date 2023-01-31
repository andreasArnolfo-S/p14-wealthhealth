import DataTableau from '../../components/dataTable/dataTable';
import { useEmployeeTable } from '../../services/useEmployeeTable';

const EmployeeList = () => {
  const [employees ] = useEmployeeTable();
  const data: any = [];
  employees.map((employee: any) => {
    data.push({
      firstname: employee.firstName.toLowerCase(),
      lastname: employee.lastName.toLowerCase(),
      startdate: employee.startDate.toLowerCase(),
      department: employee.department.toLowerCase(),
      dateofbirth: employee.dateOfBirth.toLowerCase(),
      street: employee.street.toLowerCase(),
      city: employee.city.toLowerCase(),
      state: employee.state.toLowerCase(),
      zip: employee.zip.toLowerCase(),
      sortable : true
    });
  });

  return (
    <div data-testid="EmployeeList">
      <DataTableau data={data}/>
    </div>
  );
}

export default EmployeeList;
