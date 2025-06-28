import React from 'react'
import usegetDessert from '../featuers/Dessert/usegetDessert'
import Foodmenupage from '../featuers/Menupage/Foodmenupage'
import Loading from '../ui/Loading'

function Dessert() {
    const {data,isLoading} =usegetDessert()
  if(isLoading) return <Loading/>
  console.log(data)
  return (
    <div> <Foodmenupage data={data} title={"دسر"}/></div>
  )
}

export default Dessert