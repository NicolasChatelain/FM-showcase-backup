import { useEffect, useState } from 'react'

const Driverslist = ({assigndriver}) => {


    const [alldrivers, setAllDrivers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {

        async function fetchDrivers() {
            const response = await fetch(`http://localhost:5132/api/Driver?page=${page}&pageSize=4`);
            const data = await response.json();
            setAllDrivers(data);
        }

        fetchDrivers();


    }, [page]);


  return (
    <div className='driverslist'>
        <div>
            {alldrivers.map((d) => (
                <p key={d.ssn} data-ssn={d.ssn}onClick={(event) => {assigndriver(event.target.getAttribute('data-ssn'));}}>{d.fristName} {d.lastName} ----------{d.ssn}</p>
            ))}
        </div>
        <div className='pagination'>
            <button className='regularvehicleBTN pagebuttons' onClick={() => {setPage((page) =>  Math.max(page - 1, 1))}}>prev</button>
            <button className='regularvehicleBTN pagebuttons' onClick={() => {setPage(page + 1) }}>next</button>
        </div>
    </div>
  );
};

export default Driverslist