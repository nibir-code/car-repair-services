import React from 'react';
import notFound from '../../../src/images/notFound/5203299.jpg'
import { Link } from "react-router-dom";

const NotFound = () => {
     return (
          <div>
              <img src={notFound} alt="" />
              <Link to="/">
                    <button>Go back</button>
              </Link>
          </div>
     );
};

export default NotFound;