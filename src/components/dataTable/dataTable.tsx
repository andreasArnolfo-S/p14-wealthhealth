import React, { FC } from 'react';
import DataTable from 'react-data-table-component';
import styles from './dataTable.module.css';


interface DataTableProps {
  data: [
    {
      firstname: string;
      lastname: string;
      startdate: string;
      department: string;
      dateofbirth: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      sortable: boolean;
    }
  ]
}

/**
 * A React component that renders a table with the data passed in as props.
 * @param props - data - the data to be displayed in the table
 * @returns A DataTable component with the following props:
 *   title: "Employee List"
 *   columns: [
 *     {
 *       name: 'First Name',
 *       selector: (row: any) => row.firstname,
 *       sortable: true,
 *     },
 *     {
 *       name: 'Last Name',
 *       selector: (row: any) =>
 */
const DataTableau: FC<DataTableProps> = (props) => {
  const columns = [
    {
      name: 'First Name',
      selector: (row: any) => row.firstname,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row: any) => row.lastname,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row: any) => row.startdate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row: any) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row: any) => row.dateofbirth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row: any) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row: any) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row: any) => row.state,
      sortable: true,
    },
    {
      name: 'Zip',
      selector: (row: any) => row.zip,
      sortable: true,
    },
  ];

  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  const filteredItems = props.data.filter((item: any) => item.firstname && item.firstname.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = () => {
    return (
      //search bar
      <>
        <div className="form-control">
          <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered" onChange={(e: any) => setFilterText(e.target.value)} />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        {console.log('render')}
      </>
    );
  };

  return (
    <DataTable
      title="Employee List"
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo()}
      persistTableHead
    />
  );
}

export default DataTableau;
