import React from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components/index'
import countries from '../../../commons/constants/countries'
import { ItemStyled, CardPanelContentStyled } from './style'

function Panel({ updateAt, onChange, data, country }){
  const {
    deaths,
    recovered,
  } = data
  const navigatorHasShare = navigator.share
  const textCovid19 = `País: ${country} - recuperados: ${recovered} - mortes: ${deaths}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  // não tenho url pra ser compartilhada :c
  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: "localhost:3000" 
    })
  }

  const renderCountries = (country, index) => {
    return(
      <MenuItem key={`country-${index}`} value={country.value} >
        <ItemStyled>
          <div>{country.label}</div>
        </ItemStyled>
      </MenuItem>
    )
  }

  return(
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary" >
            COVID19
          </Typography>
          <Typography variant="h6" component="span" color="primary" >
            Painel CoronaVírus
          </Typography>
          <Typography variant="body2" component="span" color="primary" >
            atualizado em: {updateAt}
          </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {countries.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare && (
          <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
              Copiar
            </Button>
          </div>)
        }
        {!navigatorHasShare && (
          <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
              Compartilhar
            </Button>
        </div>)
        }
      </CardPanelContentStyled>
    </Card>
  )
}

export default Panel