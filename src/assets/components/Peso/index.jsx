import { useEffect, useState } from 'react';
import styles from './Peso.module.css';

const Peso = () => {
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [inputError, setInputError] = useState(false);

    const calcularIMC = () => {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);

        if (isNaN(peso) || isNaN(altura) || altura <= 0) {
            // Adiciona um alerta se peso ou altura não forem válidos
            alert('Por favor, insira valores válidos para peso e altura.');
            setInputError(true);
            return;
        }

        const imc = peso / (altura * altura);

        if (isNaN(imc)) {
            // Adiciona um alerta se o IMC for NaN
            alert('Por favor, insira valores válidos para peso e altura.');
            setInputError(true);
            return;
        }

        setResultadoIMC(imc.toFixed(2));
        setInputError(false);
    };

    useEffect(() => {
        const resultadoElement = document.getElementById('resultado');
        if (resultadoElement) {
            if (resultadoIMC !== null && !isNaN(resultadoIMC)) {
                const imcValue = parseFloat(resultadoIMC);
                if (imcValue >= 19 && imcValue <= 25) {
                    resultadoElement.classList.remove('ruim');
                    resultadoElement.classList.add('bom');
                } else {
                    resultadoElement.classList.remove('bom');
                    resultadoElement.classList.add('ruim');
                }
            }
        }
    }, [resultadoIMC]);

    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <h1 className='m-0 fs-4'>Descubra seu IMC</h1>
            </div>
            <div className={`container d-flex justify-content-center mb-5 mt-5 ${inputError ? styles.error : ''}`}>
                <input type="text" placeholder="Seu peso em kg" id="peso" className={styles.inputb} />
                <input type="text" placeholder="Sua altura em metros" id="altura" className={styles.inputb} />
                <button type="button" onClick={calcularIMC} className={styles.btn}>
                    Descobrir
                </button>
            </div>
            <div className="container d-flex justify-content-center fs-4">
                <p id="resultado" className={`m-0 mb-5 fs-5 ${styles.resultado}`}>
                    {resultadoIMC && `IMC: ${resultadoIMC}`}
                </p>
            </div>
        </>
    );
};

export default Peso;