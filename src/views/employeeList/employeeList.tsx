import React, { FC } from 'react';
import styles from './employeeList.module.css';
import { useSelector } from 'react-redux';
import DataTableau from '../../components/dataTable/dataTable';

interface EmployeeListProps { }

const EmployeeList: FC<EmployeeListProps> = () => {
  const listOfEmployees = useSelector((state: any) => state.EmployeeList);
  const data: any = [];
  listOfEmployees.map((employee: any) => {
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
