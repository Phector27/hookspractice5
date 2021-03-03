import { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Form = ({search, setSearch, setObtain}) => {

    const [error, setError] = useState(false)

    const { ciudad, pais } = search
    
    const handleChange = e => {
        // Actualizar state
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    // Submit form
    const handleSubmit = e => {
        e.preventDefault()

        // Validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return
        }

        setError(false)

        //Pasar a componente principal
        setObtain(true)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje='Ambos campos son obligatorios' /> : null}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=''>-- Seleccione un país --</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='pais'>País: </label>
            </div>
            <div className='input-field col s12'>
                <input 
                    type='submit'
                    value='Buscar Clima'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form>
    );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setObtain: PropTypes.func.isRequired
}

export default Form;