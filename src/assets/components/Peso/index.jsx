import { useEffect, useState } from 'react';
import styles from './Peso.module.css';

const Peso = () => {
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [inputError, setInputError] = useState(false);
    const [classificacao, setClassificacao] = useState('');

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

        // Atualiza a classificação com base no valor do IMC
        if ( imc < 16 ) {
            setClassificacao('Magreza Grau III');
        } else if (imc >= 16 && imc <= 16.9 ) {
            setClassificacao('Magreza Grau II');
        } else if ( imc >= 17 && imc <= 18.4 ) {
            setClassificacao('Magreza Grau I');
        } else if ( imc >= 18.5 && imc <= 24.9 ) {
            setClassificacao('Adequado');
        } else if ( imc >= 25 && imc <= 29.9 ) {
            setClassificacao('Pré Obeso');
        } else if ( imc >= 30 && imc <= 34.9 ) {
            setClassificacao('Obesidade Grau I');
        } else if ( imc >= 35 && imc <= 39.9 ) {
            setClassificacao('Obesidade Grau II');
        } else {
            setClassificacao('Obesidade Grau III');
        }
    };

    useEffect(() => {
        $('#altura').mask('0.00');
    }, []);

    useEffect(() => {
        const resultadoElement = document.getElementById('resultado');

        if (resultadoElement) {
            if (resultadoIMC !== null && !isNaN(resultadoIMC)) {
                const imcValue = parseFloat(resultadoIMC);
                if (imcValue >= 18.5 && imcValue <= 24.9) {
                    resultadoElement.classList.remove('ruim');
                    resultadoElement.classList.add('bom');
                } else if (imcValue > 25) {
                    resultadoElement.classList.remove('bom');
                    resultadoElement.classList.add('ruim');
                } else {
                    resultadoElement.classList.remove('bom');
                    resultadoElement.classList.add('ruim');
                }

                // Atualiza a classificação dentro do resultado
                resultadoElement.innerHTML = `IMC: ${resultadoIMC}<br>Classificação: ${classificacao}`;
            }
        }
    }, [resultadoIMC, classificacao]);

    useEffect(() => {
        const apertarEnter = (event) => {
            // Verifica se a tecla pressionada é a tecla Enter (código 13)
            if (event.key === 'Enter') {
                calcularIMC();
            }
        };
    
        // Adiciona o ouvinte de eventos ao documento
        document.addEventListener('keydown', apertarEnter);
    
        // Remove o ouvinte de eventos ao desmontar o componente para evitar vazamentos de memória
        return () => {
            document.removeEventListener('keydown', apertarEnter);
        };
    }, []); // O array vazio [] significa que este efeito será executado apenas uma vez durante a montagem do componente

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
                <p id="resultado" className={`m-0 mb-5 ${styles.resultado}`}>
                    {resultadoIMC && `IMC: ${resultadoIMC}`}
                </p>
            </div>
        </>
    );
};

export default Peso;