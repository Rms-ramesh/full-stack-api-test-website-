import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("/api/data")
      .then((response) => {
        setData(response.data)   // ✅ fixed here
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <>
      <h1>Here is our API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name} ki age hai equalto {item.age}</li>
        ))}
      </ul>
    </>
  )
}

export default App
