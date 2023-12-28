import styles from './Header.module.css';
import logo from '../../../images/logo.png';
import lupa from '../../../images/lupa.png';
import user from '../../../images/user.png';
import phone from '../../../images/telephone.png';
import cart from '../../../images/cart.png';

const Header = () => {
    return (
        <header className = { styles.header }>
            <div className = { styles.black }>
                <p className = { styles.blackP }>
                    <b>Qualidade internacional </b> comprovada e preço <b> direto da fábrica.</b>
                </p>
            </div>
            <div className = { styles.container }>
                <img className = { styles.headerLogo } src = { logo } alt="Growth Suplementos" />
                

                <div className = { styles.pesquisa }>
                    <input className= { styles.headerBusca } type="text" placeholder = 'Encontre Suplementos' />
                    <button className = { styles.botaoLupa }> <img className = { styles.lupa } src = { lupa } /> </button>
                </div>

                <div className = { styles.div }>
                    <img className = { styles.headerUsuario } src = { user } alt="Usuario" />
                    <p className = { styles.p }>
                        Bem vindo visitante, <br /> <b>cadastre-se</b> ou <br /> <b>faça seu login</b>
                    </p>
                </div>

                <div className = { styles.div }>
                    <img className = { styles.headerUsuario } src = { phone } alt="Telefone" />
                    <p className = { styles.p }>
                        Fale conosco <br /> clique aqui
                    </p>
                </div>

                <img className = { styles.headerUsuario } src = { cart } alt="Carrinho" />
            </div>

            <nav className = { styles.nav }>  
                <ul className = { styles.ul }>
                    <li className = { styles.li }>
                        <a className = { styles.a } href="#"><span className = { styles.span }>TOP 20</span></a>
                        <a className = { styles.a } href="#"><span className = { styles.span }>LANÇAMENTOS</span></a>
                        <a className = { styles.a } href="#"><span className = { styles.span }>WHEY PROTEIN</span></a>
                        <a className = { styles.a } href="#"><span className = { styles.span }>CREATINA</span></a>
                        <a className = { styles.a } href="#"><span className = { styles.span }>PRÉ-TREINO</span></a>
                        <a className = { styles.a } href="#"><span className = { styles.span }>OBJETIVOS</span></a>
                        <a className = { styles.a } href="#"><span className = { styles.span }>ROUPAS</span></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header