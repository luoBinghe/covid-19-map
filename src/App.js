import './App.css';
import GlobalStyle from './commons/styles/GlobalStyle'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Main from './containers/Main'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
