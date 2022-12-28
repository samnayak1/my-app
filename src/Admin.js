import React, { useState } from 'react'

function Admin(url) {
    const [contracts,setContracts]=useState('');

    fetch(url)
    .then(res=>{
         return res.json();
        
     } )
    .then((data)=>{
        setContracts(data);
    })
  return (


    <div>
    <thead>
        <tr>
            <th>contract_id</th>
            <th>filename</th>
            <th>user that uploaded</th>
            <th>expiry date</th>
        </tr>
    </thead>
    <tbody>
      {contracts&& contracts.map(contract=>
        <tr key={contract.contract_id}>
        <td>{contract.contract_id}</td>
        <td>{contract.filename}</td>
        <td>{contract.uploaded_by}</td>
        <td>{contract.expiry_date}</td>



        </tr>)}

    </tbody>

    </div>
  )
}

export default Admin