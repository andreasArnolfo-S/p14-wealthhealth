import { useState } from 'react';
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

export const useEmployeeTable = () => {
     const emp: Employee[] = [];

     for( let i = 0; i < 200; i++) {
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