import React from 'react';
import "./Service.css";

const Service = ({service}) => {
     const {name, price , description, img} = service;
     return (
          
          <div className="service">
               <img src={img} alt="" />
               <h1>{name}</h1>
               <h2>Price: $ {price}</h2>
               <p className="px-3">{description}</p>
          </div>
     );
};

export default Service;