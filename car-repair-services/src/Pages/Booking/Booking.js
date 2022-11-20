import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
     const {serviceId} = useParams();
     const [service,setService] = useState({});

     useEffect(()=>{
          fetch(`http://localhost:5000/services/${serviceId}`)
          .then(res => res.json())
          .then(data => setService(data))
     },[])
     return (
          <div>
          <h1>{service.name}</h1>
             <h1>this is booking {serviceId}</h1>  
          </div>
     );
};

export default Booking;