import React, { useState } from 'react'

function Admin() {
    const [contracts,setContracts]=useState('');

    fetch('http://admindata/contracts',
    {method:'GET'})
    .then(res=>{
         return res.json();
        
     } )
    .then((data)=>{
        setContracts(data);
    })
    const deleteContract=()=>{
        fetch('http://admindata/contracts/delete+contract_id',{
            method:'Delete'
        })
    }
    const editContract=()=>{
        fetch('http://admindata/contracts/edit+contract_id',{
            method:'PUT',
            headers:{"Content_Type":"appliction/json"},
            body:JSON.stringify(contracts)
        })
        .then(()=>{console.log('new contract added')});
    }
  return (


    <div>
    <thead>
        <tr>
            <th>contract_id </th>
            <th>filename </th>
            <th>user that uploaded </th>
            <th>expiry date </th>
        </tr>
    </thead>
    <tbody>
      {contracts&& contracts.map(contract=>
        <tr key={contract.contract_id}>
        <td>{contract.contract_id}</td>
        <td>{contract.filename}</td>
        <td>{contract.uploaded_by}</td>
        <td>{contract.expiry_date}</td>
        <button onClick={deleteContract}>delete</button>



        </tr>)}

    </tbody>

    </div>
  )
}

export default Admin