import React  from 'react'

async function users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const usersArr = await response.json();


  return (
    <div>
      {usersArr.map((user:{id:number,name:string})=>{
        return <div key={user.id}>{user.name}</div>
      })}
    </div>
  )
}

export default users
