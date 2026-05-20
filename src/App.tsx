import { MantineProvider,createTheme } from '@mantine/core'
import './App.css'
import './index.css'
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors: {
      'mine-shaft': ['#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121'],
      'bright-sun': ['#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300'],
    },
  })

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
