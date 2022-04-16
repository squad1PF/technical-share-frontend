import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/auth';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/themes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
