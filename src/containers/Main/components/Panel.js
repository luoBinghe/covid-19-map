import React from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components/index'
// import RefreshIcon from '@material-ui/icons/Refresh'
import countries from '../../../commons/constants/countries'
import { ItemStyled, CardContentStyled } from './style'

function Panel({ updateAt, onChange, data, country, getCovidData }){
  const {
    active,
    cases,
    casesPerOneMillion,
    critical,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    totalTests,
  } = data

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
      <CardContentStyled>
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
      </CardContentStyled>
    </Card>
  )
}

export default Panel