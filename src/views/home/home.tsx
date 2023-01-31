import { Link } from 'react-router-dom';
import Logo from './../../components/logo/logo';
import CreateEmployeeForm from './../../components/createEmployeeForm/createEmployeeForm';

const Home = () => {
  return (
    <div className='min-h-screen' data-testid="Home">
      <Logo />
      <section className='flex flex-col justify-center items-center'>
        <div>
          <Link to={'/employees'} className='btn btn-primary'>View Current Employees</Link>
        </div>
        <CreateEmployeeForm />
      </section>
    </div>
  );
}

export default Home;
