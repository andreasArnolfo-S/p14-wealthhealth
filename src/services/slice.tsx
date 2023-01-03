import { createSlice } from '@reduxjs/toolkit';

const EmployeeSlice = createSlice({
     name: 'employee',
     initialState: {
          EmployeeList: [],
          filteredUsers: [],
          status: '',
     },
     reducers: {
          addEmployee: (state, action) => {
               state.EmployeeList = action.payload;
               state.status = 'success';
          },
          searchByName: (state, action) => {
               const searchString = action.payload.trim().toLowerCase();

               const filteredUsers = state.EmployeeList.filter((user: any) => {
                    if (user.hasOwnProperty('firstName') && user.hasOwnProperty('lastName') && user.hasOwnProperty('city')) {
                         const firstName = user.firstName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                         const lastName = user.lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                         const city = user.city.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                         return firstName.includes(searchString) || lastName.includes(searchString) || city.includes(searchString);
                    }
               });
               state.filteredUsers = filteredUsers;
          },
     }
});

export const { addEmployee, searchByName } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
