import React, { FC } from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import Logo from './../../components/logo/logo';
import CreateEmployeeForm from './../../components/createEmployeeForm/createEmployeeForm';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home} data-testid="Home">
      <Logo />
      <section className={styles.container}>
        <div>
          <Link to={'/employees'} className='btn btn-primary'>View Current Employees</Link>
        </div>
        <CreateEmployeeForm />
      </section>
    </div>
  );
}

export default Home;
