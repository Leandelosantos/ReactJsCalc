import './App.css';

import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import Clear from './componentes/clear';
import Logo from './componentes/logo';
import { useState } from 'react';
import { evaluate, prodDependencies, secondRadiationDependencies } from 'mathjs'
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {     {/* esta funcion toma el valor de 'input' (el cual esta en '' (vacio)) y le "suma" o concatena el valor clickeado, el cual seria el props.children que seria el numero de cada boton. */}
        setInput(input + val);
    };

    const resultado = () => {
        if (input) {
            setInput(evaluate(input))
        } else {
            alert ("Ingrese valores para realizar calculos")
        }
        
    };
 
  return (
    <div className="App">
        <Logo />
        <div className='contenedor-calculadora'>
            <Pantalla
                input={input} />
            <div className='fila'>
                <Boton manejarClick={agregarInput}>1</Boton> {/* Al pasar, al prop "manejarClick" la funcion "agregarInput", este toma el valor del boton el cual es un numero y actualiza el estate. */}
                <Boton manejarClick={agregarInput}>2</Boton>
                <Boton manejarClick={agregarInput}>3</Boton>
                <Boton manejarClick={agregarInput}>+</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClick={agregarInput}>4</Boton>
                <Boton manejarClick={agregarInput}>5</Boton>
                <Boton manejarClick={agregarInput}>6</Boton>
                <Boton manejarClick={agregarInput}>-</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClick={agregarInput}>7</Boton>
                <Boton manejarClick={agregarInput}>8</Boton>
                <Boton manejarClick={agregarInput}>9</Boton>
                <Boton manejarClick={agregarInput}>*</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClick={resultado}>=</Boton>
                <Boton manejarClick={agregarInput}>0</Boton>
                <Boton manejarClick={agregarInput}>.</Boton>
                <Boton manejarClick={agregarInput}>/</Boton>
            </div>
            <div className='fila'>
                <Clear manejarClear={() => setInput('')}>
                    Clear
                </Clear>
            </div>

        </div>
    </div>
  );
}

export default App;
