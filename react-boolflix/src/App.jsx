import Header from './components/Header'
import Main from './components/Main'
import { GlobalProvider } from './Context/GlobalContext'
import './App.css'


function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
      </GlobalProvider>
    </>
  )
}

export default App
