import React from 'react';

const Expert = ({expert}) => {
     const {name, img, description} = expert;
     return (
          <div className="col-lg-4">
               <img src={img} alt="" />
               <h3 className="text-danger">{name}</h3>
               <h5>{description}</h5>
          </div>
     );
};

export default Expert;