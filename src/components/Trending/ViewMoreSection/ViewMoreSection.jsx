import React from 'react'
import { useHistory } from "react-router-dom";

function ViewMoreSection() {
    const history = useHistory();
  return (
    <div>
          <div align='center'>
   <button  onClick={() => {
                      history.push('Productlisting')
                  } } className="btnview">View more ></button> </div> 
    </div>
  )
}

export default ViewMoreSection