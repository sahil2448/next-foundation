// "use client"
import Btn from './Btn'
import React from 'react'
async function page() {
  console.log("am i on server side or client side?")
  const response =  await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
  console.log(response[0])
  return (
    <div>
      <p>Contact Page</p>
      <Btn></Btn>


    </div>
  )
}

export default page
