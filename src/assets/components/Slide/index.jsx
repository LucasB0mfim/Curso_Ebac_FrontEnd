import styles from './Slide.module.css';
import slide1 from '../../../images/1.png';
import slide2 from '../../../images/2.png';
import slide3 from '../../../images/3.png';
import slide4 from '../../../images/4.png';
import slide5 from '../../../images/5.png';
import slide6 from '../../../images/6.png';
import slide7 from '../../../images/7.png';
import slide8 from '../../../images/8.png';
import slide9 from '../../../images/9.png';
import slide10 from '../../../images/10.png';



const Slide = () => {
    return (
        <>
            <div id='carousel-exemplo' className='carousel carousel-fade slide' data-bs-ride='carousel'>
                <div className='carousel-inner'>
            
                    <div data-bs-interval="3000" class="carousel-item active">
                        <img className = { styles.slide } src = { slide1 } />
                    </div>
                    
                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide2 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide3 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide4 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide5 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide6 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide7 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide8 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide9 } />
                    </div>

                    <div data-bs-interval="3000" class="carousel-item">
                        <img className = { styles.slide } src = { slide10 } />
                    </div>

                </div>

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-exemplo" class="active" data-bs-slide-to="0"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="5"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="6"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="7"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="8"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="9"></button>
                </div>

            </div>
        </>
    )
}

export default Slide