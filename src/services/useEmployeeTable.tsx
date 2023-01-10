import { useState, useEffect } from 'react';

export interface Employee {
     firstName: string;
     lastName: string;
     dateOfBirth: string;
     startDate: string;
     street: string;
     city: string;
     state: string;
     zip: string;
}

export const useEmployeeTable = () => {
     const [employees, setEmployees] = useState<any>(() => {
          if (!window.localStorage) {
               throw new Error('Local storage is not available');
          }

          const storedEmployees = localStorage.getItem('employees');
          return storedEmployees ? JSON.parse(storedEmployees) : [];
     });

     useEffect(() => {
          if (!window.localStorage) {
               throw new Error('Local storage is not available');
          }
          localStorage.setItem('employees', JSON.stringify(employees));
     }, [employees]);

     const addEmployee = (employee: any) => {
          setEmployees(employee);
     }

     const resetEmployees = () => {
          setEmployees([]);
     }

     return [employees, addEmployee, resetEmployees];
}