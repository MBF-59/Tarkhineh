import React from 'react'
import usegetAppetizer from '../featuers/Appetizer/Appetizer'
import Foodmenupage from '../featuers/Menupage/Foodmenupage'
import Loading from '../ui/Loading';

function Appetizer() {
  const  {data,isLoading}=usegetAppetizer() ;
  if(isLoading) return <Loading/>
  console.log(data)
  return (
    <div> <Foodmenupage data={data} title={"ایرانی"}/></div>
  )
}

export default Appetizer