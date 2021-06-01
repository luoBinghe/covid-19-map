import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components/index'
import Card from './Card'

function Board({ data }){
  const {
    active,
    cases,
    casesPerOneMillion,
    critical,
    deaths,
    recovered,
    totalTests,
  } = data

  const getValue = (value) => value ? value : <Skeleton  variant="text" width={182} height={60} />

  return(
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#e4e4e4"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(active)} label="Ativos" color="#A4A4A4"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(critical)} label="Critico" color="#A4A4A4"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Mortes" color="#A4A4A4"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Recuperados" color="#A4A4A4"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(totalTests)} label="Total de testes" color="#A4A4A4"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(casesPerOneMillion)} label="Casos por milhão" color="#A4A4A4"/>
      </Grid>
    </Grid>
  )
}

export default Board