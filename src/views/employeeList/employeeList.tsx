import React, { FC } from 'react';
import styles from './employeeList.module.css';
import DataTableau from '../../components/dataTable/dataTable';
import { useEmployeeTable } from '../../services/useEmployeeTable';

interface EmployeeListProps { }

const EmployeeList: FC<EmployeeListProps> = () => {
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
    <div className={styles.EmployeeList} data-testid="EmployeeList">
      <DataTableau data={data}/>
    </div>
  );
}

export default EmployeeList;
