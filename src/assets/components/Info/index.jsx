import styles from './Info.module.css';

const Info = () => {
    return (
        <>
            <div className = 'container d-flex justify-content-between mt-4 mb-5 p-0'>
                <div className = { styles.info }>
                    <div>
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/01-ab.png" />
                    </div>
                    <div className = { styles.description }>
                        <h1 className = { styles.text }>FRETE GRÁTIS</h1>
                        <a className = { styles.paragraph }>Clique aqui</a>
                    </div>
                </div>

                <div className = { styles.info }>
                    <div>
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/02-ab.png" />
                    </div>
                    <div className = { styles.description }>
                        <p className = { styles.paragraph }>10% off</p>
                        <h1 className = { styles.text }>NO BOLETO</h1>
                    </div>
                </div>

                <div className = { styles.info }>
                    <div>
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/03-ab.png" />
                    </div>
                    <div className = { styles.description }>
                        <h1 className = { styles.text }>CASHBACK</h1>
                        <a className = { styles.paragraph }> <b>G PONTOS</b> </a>
                    </div>
                </div>

                <div className = { styles.info }>
                    <div>
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/04-ab.png" />
                    </div>
                    <div className = { styles.description }>
                        <h1 className = { styles.text }>NUTRICIONISTA<br />ONLINE</h1>
                        <a className = { styles.paragraph }>Clique aqui</a>
                    </div>
                </div>

                <div className = { styles.info }>
                    <div>
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/05-ab.png" />
                    </div>
                    <div className = { styles.description }>
                        <h1 className = { styles.text }>BAIXE NOSSO APP</h1>
                        <p className = { styles.paragraph }>Totalmente grátis</p>
                    </div>
                </div>

            </div>
            <div className = { styles.banner } >
                <img className = { styles.banners } src="https://www.gsuplementos.com.br/tema/growth/img/home/banners/banner2.png" />
                <img className = { styles.banners2 } src="https://www.gsuplementos.com.br/tema/growth/img/home/banners/banner1.png" />
            </div>
        </>
    )
}

export default Info