import React, { useEffect, useState } from 'react'
import axios from 'axios' 

function Main(){
  const path = `https://coronavirus-19-api.herokuapp.com/countries`
  const [country, setCountry] = useState('brazil')

  async function request(){
    try{
      const response = await axios.get(`${path}/${country}`)
      console.log('response', response)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    setCountry(country)
  }, [country])

  return(
    <div>
      <select>
        <option country='brazil'>Brasil</option>
        <option country="italy">Italy</option>
      </select>
      <button onClick={request}>
        pesquisar
      </button>
    </div>
  )
}

export default Main