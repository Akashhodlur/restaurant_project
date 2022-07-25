import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {

    const[data,setData]=useState([])

    useEffect(() => {
    axios.get('https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25')
    // .then((response) => setData(response.data))
    .then((response) =>console.log(response))
}, [])
    
  return (
    
    <>
     {/* <h1>{c.title}</h1> */}
     
      {/* {
        data.map((c) => <p>{c.id}{c.title}</p>)
      }
  */}
    </>
  )
}

export default Api
