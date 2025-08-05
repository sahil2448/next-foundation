import { notFound } from 'next/navigation';
import React from 'react'

async function fetchUser(id:string){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!response.ok){
            return null
        }
        const user = await response.json();
        return user;
}
async function UserPage({params}:{params:Promise<{userId:string}>}) {
    const {userId} = await params;
    const user = await fetchUser(userId)

    if(!user){
        notFound()
    }
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p >Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserPage
