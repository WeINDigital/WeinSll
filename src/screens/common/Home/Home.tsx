import React, { useContext } from 'react';

import SalesHome from './SalesHome';
import { AuthContext } from '../../../context/AuthContext';
import SupervisorHome from './SupervisorHome';
import ManagerHome from './ManagerHome';

const Home = () => {
  const { role } = useContext(AuthContext);

  if (role === 'salesman') return <SalesHome />;
  if (role === 'supervisor') return <SupervisorHome />;
  if (role === 'manager') return <ManagerHome />;

  return null;
};

export default Home;
