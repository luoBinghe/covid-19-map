import styled from 'styled-components';
import { Typography, CardContent } from '../../../components/index'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;

`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`;

export const CardContentStyled = styled(CardContent)`
  fdisplay: flex;
  justify-content: space-space-between;
  padding: 25px;
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;