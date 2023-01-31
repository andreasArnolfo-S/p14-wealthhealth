import { useState } from 'react';
/* Importing the faker library. */
import { faker } from '@faker-js/faker';
export interface Employee {
     firstName: string;
     lastName: string;
     dateOfBirth: string;
     startDate: string;
     street: string;
     city: string;
     state: string;
     zip: string;
     department: string;
}

/**
 * It creates a list of 200 employees, then returns the list and a function to add an employee to the
 * list.
 * @returns An array with two elements. The first element is the employees array and the second element
 * is the addEmployee function.
 */
export const useEmployeeTable = () => {
     const emp: Employee[] = [];

     for( let i = 0; i < 100; i++) {
          const employee: Employee = {
               firstName: faker.name.firstName(),
               lastName: faker.name.lastName(),
               dateOfBirth: faker.date.past().toISOString().slice(0, 10),
               startDate: faker.date.recent().toISOString().slice(0, 10),
               street: faker.address.streetAddress(),
               city: faker.address.city(),
               state: faker.address.stateAbbr(),
               zip: faker.address.zipCode(),
               department: faker.name.jobArea()
          };
          emp.push(employee);
     }

     const [employees, setEmployees] = useState<any>([...emp]);


     const addEmployee = (employee: any) => {
          setEmployees([...employees, employee]);
     }


     return [employees, addEmployee];
}