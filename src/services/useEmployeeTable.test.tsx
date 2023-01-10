import { useEmployeeTable } from './useEmployeeTable';

describe('useEmployeeTable', () => {
     it('should initialize employees from localStorage', () => {
          // Arrange
          const mockGetItem = jest.fn().mockReturnValue(JSON.stringify([{ firstName: 'John' }]));
          const getItemSpy = jest.spyOn(window.localStorage, 'getItem').mockImplementation(mockGetItem);

          // Act
          const [employees] = useEmployeeTable();

          // Assert
          expect(employees).toEqual([{ firstName: 'John' }]);
          expect(getItemSpy).toHaveBeenCalledWith('employees');
     });

     it('should add employee to employees', () => {
          // Arrange
          const mockSetItem = jest.fn();
          const setItemSpy = jest.spyOn(window.localStorage, 'setItem').mockImplementation(mockSetItem);
          const [, addEmployee] = useEmployeeTable();

          // Act
          addEmployee({ firstName: 'Jane' });

          // Assert
          expect(mockSetItem).toHaveBeenCalledWith('employees', JSON.stringify([{ firstName: 'Jane' }]));
     });

     it('should reset employees', () => {
          // Arrange
          const mockSetItem = jest.fn();
          const setItemSpy = jest.spyOn(window.localStorage, 'setItem').mockImplementation(mockSetItem);
          const [, , resetEmployees] = useEmployeeTable();

          // Act
          resetEmployees();

          // Assert
          expect(mockSetItem).toHaveBeenCalledWith('employees', JSON.stringify([]));
     });
});
