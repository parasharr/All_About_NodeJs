import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [details, setDetails] = useState([])

  useEffect(()=> {
    axios.get('/api/details')
    .then((response)=> {
      setDetails(response.data);
      console.log(response.data)
    })
    .catch((error)=> {
      console.log(error);
    })
  })

  return (
   <>
   <h1 className='text-3xl text-zinc-900 font-semibold mb-4'>Product Details</h1>
   <div className='bg-blue-200 rounded-md p-4'>
      {
        details.map((detail)=> (
          <div key={detail.id} className='flex justify-around'>
            <div className='font-xl text-zinc-800 font-semibold'>{detail.name}</div>
            <div className='text-blue-600 text-lg'>{detail.price}</div>
          </div>
        ))
      }
   </div>
   </>
  )
}

export default App
