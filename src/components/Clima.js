import PropTypes from 'prop-types'


const Clima = ({ result }) => {
    
    // Extraer valores
    const { name, main } = result
    
    if (!name) return null
    
    const kelvinToF = 273.15

    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es: </h2>
                <p className='temperatura'>
                    {parseFloat(main.temp - kelvinToF).toFixed(2)}<span>&#x2103;</span>
                </p>
                <p> Temperatura máxima: &nbsp;
                    {parseFloat(main.temp_max - kelvinToF).toFixed(2)}<span>&#x2103;</span>
                </p>
                <p> Temperatura mínima: &nbsp;
                    {parseFloat(main.temp_min - kelvinToF).toFixed(2)}<span>&#x2103;</span>
                </p>
            </div>
        </div>
        );
}

Clima.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Clima;