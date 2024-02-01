import React from 'react'

const Users = ({data}) => {
  return (
    <>
    {
        data.map((curruser) =>{
            const {id,name,email,website} = curruser;
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{website}</td>
                </tr>
            )
        })
    }
    </>
  )
}

export default Users