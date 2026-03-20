import styles from './page.module.css';
import Dessert from '../../../public/imgs/homepage/sobremesa'
import NaturalFood from '../../../public/imgs/homepage/naturalfood';
import Vegetable from '../../../public/imgs/homepage/vegetable';
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Home() {
    return(
        <div className={styles.pageContainer}>
            <section>
                <h1>bem vindo</h1>
                <p>
                    Esta é a página inicial do nosso aplicativo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis illum autem laboriosam explicabo dolore unde nihil maiores beatae at, tenetur ipsa quis vel vero labore cum molestias reiciendis, placeat numquam?
                </p>
            </section>
            <section className={styles.foodSection}>
                <div>
                    <i>
                        <Dessert />
                    </i>
                    <h4>
                        Bom gosto para todos os paladares
                    </h4>
                    <p>
                        Explore um mundo de sabores com nossa oferta abrangente, projetada para satisfazer os paladares de toda a família, desde apetitivos até sobremesas.                    
                    </p>
                </div>

                <div>
                    <i>
                        <NaturalFood />
                    </i>
                    <h4>
                        Excelencia em cada prato
                    </h4>
                    <p>
                        Descubra a excelência em cada prato, onde a qualidade dos ingredientes e a habilidade culinária se unem para criar uma experiência gastronômica incomparável.                    
                    </p>
                </div>

                <div>
                    <i>
                        <Vegetable />
                    </i>
                    <h4>
                        Escolha de ingredientes de primeira.
                    </h4>
                    <p>
                        Escolhemos cuidadosamente os melhores ingredientes para garantir a qualidade e o sabor excepcionais de nossos pratos. 
                    </p>
                </div>
            </section>
            <section className={styles.contactSection}>
                <h1>Permaneça atualizado</h1>
                <p>
                    Entre no mundo da gastronomia e descubra os segredos do universo! Siga-nos nas redes sociais para ficar por dentro das últimas notícias, eventos e curiosidades sobre o cosmos. Junte-se à nossa comunidade de entusiastas e explore as maravilhas do espaço conosco!
                </p>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram /> Instagram</button>
                    <button className={styles.socialButton}><FaFacebookSquare /> Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp /> Whatsapp</button>
                    <button className={styles.socialButton}><FaMapMarkerAlt />Location</button>
                </div>
            </section>

        </div>
    )
}