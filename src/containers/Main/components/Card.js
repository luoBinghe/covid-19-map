import React from 'react'
import { Card as CardUI } from '../../../components/index'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

function Card({ value, label, color }){
  return(
    <CardUI>
      <CardContentStyled color={color}> 
        <ValueStyled>
          {value}
        </ValueStyled>
        <LabelStyled>
          {label}
        </LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default Card