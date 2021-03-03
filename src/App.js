import { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Clima from './components/Clima'
import Form from './components/Form'
import Error from './components/Error'


function App() {

  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  })
  const [obtain, setObtain] = useState(false)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const { ciudad, pais } = search;

  useEffect(() => {
    const obtainAPI = async () => {

      if (obtain) {
        const appId = '0896e886f57470db9de7b599d9319074';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const response = await fetch(url)
        const result = await response.json()

        setResult(result)
        setObtain(false)
      }

      // Detecta si hubo resultado correcto o no en la consulta
      if (result.cod === '404') {
        setError(true)
      } else {
        setError(false)
      }
    }

    obtainAPI()
    // eslint-disable-next-line
  }, [obtain])

  let component;
  if (error) {
    component = <Error mensaje='No hay resultados' />
  } else {
    component = <Clima
      result={result}
    />
  }

  return (
    <Fragment>
      <Header
        title='Clima React App'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search={search}
                setSearch={setSearch}
                setObtain={setObtain}
              />
            </div>
            <div className='col m6 s12'>
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
