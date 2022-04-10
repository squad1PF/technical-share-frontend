import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/themes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
