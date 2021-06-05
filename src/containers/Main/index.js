import React, { useState, useEffect } from 'react'
import { ContainerStyled } from './style'
import Board from './components/Board'
import Panel from './components/Panel'
import axios from 'axios' 

function Main(){
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')
  const updateAt = new Date().toLocaleString()

  useEffect(() => {
    const path = `https://coronavirus-19-api.herokuapp.com/countries`
    async function request(){
      try{
        const response = await axios.get(`${path}/${country}`)
        setData(response.data)
      }catch(e){
        console.log(e)
      }
    }
    request()
  }, [country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country, data)
  }

  return(
    <ContainerStyled>
      <div className="mb-2">
        <Panel 
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          //getCovidData={getCovidData}
        />
      </div>
      <Board data={data}></Board>
    </ContainerStyled>
  )
}

export default Main