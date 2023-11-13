import { useState } from 'react'; 
import VehicleForm from '../Forms/VehicleForm';
import DriversList from './Driverslist';

const VehiclesPage = () => {


  const [driver, setDriver] = useState();

  const statechange = (newvalue) => {
    setDriver(newvalue);
  }

  return (
    <div className='generalcontent'>
        <VehicleForm assigneddriver={driver}></VehicleForm>
        <DriversList assigndriver={statechange}></DriversList>
    </div>
  )
}

export default VehiclesPage