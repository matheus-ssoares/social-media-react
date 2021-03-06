import { Provider } from 'react-redux';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import Routes from 'Routes/public.routes';
import { Themes } from 'interfaces/AuthUser';
import store, { persistor } from 'store';
import GlobalStyle from 'styles/global';

import 'react-toastify/dist/ReactToastify.css';
import { lightTheme, darkTheme } from './styles/themes';

function App(): JSX.Element {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const translateTheme = {
    [Themes.LIGHT]: lightTheme,
    [Themes.DARK]: darkTheme,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<h1>wait</h1>} persistor={persistor}>
        <ThemeProvider
          theme={
            localStorage.getItem('theme')
              ? translateTheme[localStorage.getItem('theme') as Themes]
              : lightTheme
          }
        >
          <Routes />
          <ToastContainer />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
