import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className = { styles.footer }>
            <div className = 'container d-flex justify-content-between p-5'>
                <p className = { styles.p }>
                Cadastre seu e-mail e receba promoções <br />e novidades exclusivas da GSuplementos
                </p>

                <div>
                    <input type="text" placeholder='Digite seu e-mail' className = { styles.input } />
                    <button type='submit'  className = { styles.btn }>Enviar</button>
                </div>

            </div>
        </div>
    )
}

export default Footer;