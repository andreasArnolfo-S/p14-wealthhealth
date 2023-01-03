import { useForm } from 'react-hook-form';
import styles from './createEmployeeForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../services/slice';
import Toast from './../toast/toast';
import { useState, useEffect } from 'react';

const CreateEmployeeForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const listOfEmployees = useSelector((state: any) => state.EmployeeList);
  const response = useSelector((state: any) => state.status);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (response === 'success') {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000); // masquer le toast après 5 secondes
    }
  }, [response]);

  const hideToast = () => {
    setShowToast(false);
  };

  const onSubmit = (data: any) => {
    const employeeExists = listOfEmployees.some((employee: any) => employee.firstName === data.firstName && employee.lastName === data.lastName && employee.dateOfBirth === data.dateOfBirth);
    if (!employeeExists) {
      const newEmployee = [...listOfEmployees];
      newEmployee.push(data);
      dispatch(addEmployee(newEmployee));
    } else {
      alert('Employee already exists');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      {showToast && <Toast onClose={hideToast} />}
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

      <fieldset>
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
      <select id='department' className="select w-full max-w-xs" {...register("department", { required: true })}>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
        <option value="engineering">Engineering</option>
        <option value="humanRessources">Human Ressources</option>
        <option value="legal">Legal</option>
      </select>

      <button type="submit" className='btn btn-primary mt-5'>Save</button>
    </form>
  );
}

export default CreateEmployeeForm;
