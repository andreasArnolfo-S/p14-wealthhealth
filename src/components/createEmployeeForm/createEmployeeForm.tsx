import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEmployeeTable } from './../../services/useEmployeeTable';
import { Modal } from 'modal-andreas';

interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}
/**
 *  CreateEmployeeForm component
 *  Renders a form for creating an employee
 * 
 * @returns {JSX.Element} Form for creating an employee
 */
const CreateEmployeeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [employees, addEmployee] = useEmployeeTable();

  /**
   * The function checks if the employee already exists in the list of employees, if not, it adds the
   * employee to the list of employees and displays a success message, otherwise, it displays an error
   * message
   * @param {any} data - This is the data that is passed to the form.
   */
  const onSubmit = (data: any) => {
    const employeeExist = employees.some((employee: Employee) => employee.firstName === data.firstName && employee.lastName === data.lastName);

    if (!employeeExist) {
      const Employees = [...employees];
      Employees.push(data);
      addEmployee(Employees);
      setIsModalOpen(true);
      setContentTitle('Congratulations !');
      setContentBody('Employee added successfully');
      setSuccess(true);
    } else {
      setIsModalOpen(true);
      setContentTitle('Oops !');
      setContentBody('Employee already exist');
      setSuccess(false);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [contentTitle, setContentTitle] = useState('');
  const [contentBody, setContentBody] = useState('');

  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        {/* A modal component that is used to display a message to the user. */}
        <Modal
          isOpen={isModalOpen}
          contentTitle={contentTitle}
          contentBody={contentBody}
          success={success}
          onClose={handleClose}
          modalSize={'600px'}
          btnColor={''}
          isClosable={true}
          type={'default'}>
        </Modal>
      </div>
      <form className='form m-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label htmlFor="first-name" className='label'>
            <span className='label-text'>First Name</span>
          </label>
          <input type="text" id="first-name" className="input input-bordered" {...register("firstName", { required: true })} />
          {errors.firstName && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        <div className='form-control'>
          <label htmlFor="last-name" className='label'>
            <span className='label-text'>Last Name</span>
          </label>
          <input type="text" id="last-name" className="input input-bordered" {...register("lastName", { required: true })} />
          {errors.lastName && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        <div className='form-control'>
          <label htmlFor="date-of-birth" className='label'>
            <span className='label-text'>Date of Birth</span>
          </label>
          <input type="date" id="date-of-birth" className="input input-bordered" {...register("dateOfBirth", { required: true })} />
          {errors.dateOfBirth && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        <div className='form-control'>
          <label htmlFor="start-date" className='label'>
            <span className='label-text'>Start Date</span>
          </label>
          <input type="date" id="start-date" className="input input-bordered" {...register("startDate", { required: true })} />
          {errors.startDate && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        <fieldset className='border p-5'>
          <legend>Address</legend>
          <div className='form-control'>
            <label htmlFor="street" className='label'>
              <span className='label-text'>Street</span>
            </label>
            <input type="text" id="street" className="input input-bordered" {...register("street", { required: true })} />
            {errors.street && <span style={{ color: 'red' }}>This field is required</span>}
          </div>

          <div className='form-control'>
            <label htmlFor="city" className='label'>
              <span className='label-text'>City</span>
            </label>
            <input type="text" id="city" className="input input-bordered" {...register("city", { required: true })} />
            {errors.city && <span style={{ color: 'red' }}>This field is required</span>}
          </div>

          <div className='form-control'>
            <label htmlFor="state" className='label'>
              <span className='label-text'>State</span>
            </label>
            <input type="text" id="state" className="input input-bordered" {...register("state", { required: true })} />
            {errors.state && <span style={{ color: 'red' }}>This field is required</span>}
          </div>

          <div className='form-control'>
            <label htmlFor="zip" className='label'>
              <span className='label-text'>Zip</span>
            </label>
            <input type="text" id="zip" className="input input-bordered" {...register("zip", { required: true })} />
            {errors.zip && <span style={{ color: 'red' }}>This field is required</span>}
          </div>

        </fieldset>

        <label htmlFor='department'>Department</label>
        <select id='department' className="select" {...register("department", { required: true })}>
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="humanRessources">Human Ressources</option>
          <option value="legal">Legal</option>
        </select>

        <button type="submit" className='btn btn-primary mt-5 w-full'>Save</button>
      </form>
    </div>
  );
}

export default CreateEmployeeForm;
