import React, { useEffect, useState } from 'react'
import Items from './Items';
import axios from 'axios';
import Loading from '../../pages/Loading';

const Itemsall = () => {
  const [blogData, setBlogData,] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
   axios.get("https://api.escuelajs.co/api/v1/products").then((res)=>{
    setBlogData(res.data);
    setLoading(false)
   })
  },[])

  if(loading){
    return <Loading />
  }
  
  
  return (
    <>
    {
      blogData.map((item)=>(
    <Items  data={item} key={item.id} />
  ))
}
    </>
  )
}

export default Itemsall;