import React, { useEffect, useState } from 'react'
import { ContainerStyled } from './style'
import Board from './components/Board'
import axios from 'axios' 

function Main(){
  const path = `https://coronavirus-19-api.herokuapp.com/countries`
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')

  async function request(){
    try{
      const response = await axios.get(`${path}/${country}`)
      setData(response.data)
    }catch(e){
      console.log(e)
    }
  }
  request()

  return(
    <ContainerStyled>
      <div className="mb-2">
          
      </div>
      <Board data={data}></Board>
    </ContainerStyled>
  )
}

export default Main