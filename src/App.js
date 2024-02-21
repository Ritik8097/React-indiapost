import axios from 'axios';
import React, { useState } from 'react'



function App() {
 const [First, setFirst] = useState([])
  const data = async()=>{
      const all = await axios.get('https://kavarindiabackend.vercel.app/data');
      const json =  all.data.orders;
      console.log(json)
    setFirst(json);

  }
data();




  return (
   <div>
   {
    First.map((e,i)=>(
      <table key={i} id="table1">
                 
 
  <tr key={i}>
   
 

 
    <td>{e.order_number}</td>
    
   
    
   
    <td>{e.line_items[0].name}</td>
    <td>{e.payment_gateway_names}</td>
   
     
 

    <td>{e.tags}</td>
    <td>{e.shipping_address.phone}</td>
    <td>{e.current_total_price}</td>
    <td>{e.shipping_address.first_name}</td>
    <td>{e.shipping_address.address1} , {e.shipping_address.city}</td>
   
   
  
    </tr>

   
  </table>
    ))
   }
   </div>
  )
}

export default App
