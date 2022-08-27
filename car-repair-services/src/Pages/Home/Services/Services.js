import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from "./../Service/Service";


const Services = () => {
     const [services , setServices] = useState([]);
     useEffect(()=>{
          fetch('services.json')
          .then(res => res.json())
          .then(data => setServices(data))

     },[])
     return (
          
          <div className ="service-container mt-5">

          
               {
                    services.map(service=> <Service
                         key={service.id} service={service}></Service>)
               }
          </div>
     );
};

export default Services;