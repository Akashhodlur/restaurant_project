import React from 'react';
import './style.css';

const useState = () => {

  const [myData,setMyData] = React.useState(0);


  return (
    <>
     <div className="center_div">
        <p>{myData}</p>
        <div className="button2" 
          onClick={() => setMyData(myData+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            INCREMENT
        </div>

        <div className="button2" 
          onClick={() => (myData > 0 ?  setMyData(myData-1): setMyData(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
           DECREENT
        </div>
      </div> 
    </>
  )
}

export default useState
