import './App.css';
import GlobalStyle from './commons/styles/GlobalStyle'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
    </StylesProvider>
  );
}

export default App;
