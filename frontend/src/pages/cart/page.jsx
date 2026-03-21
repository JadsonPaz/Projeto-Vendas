import { useCartContext } from "../../contexts/useCartContext"
import styles from './page.module.css'
import { FaMinusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function cart() {

    const { cartItems, updateCartItems, removeFromCart } = useCartContext()

    const handleChangeItemQty = (mode, itemId) => {
        const updatedCartItem = cartItems.map((item) => {
            if(item._id === itemId) {
                if(mode === 'less' && item.quantity > 1) {
                    item.quantity -= 1 
                } else if (mode === 'more') {
                    item.quantity += 1
                }
            }

            return item 
        })

        updateCartItems(updatedCartItem)
    }

    if (!cartItems.length) {
        
        return(
            <div>
                <h1>seu carrinho está vazio</h1>
                <Link to={'/plates'}><button >Veja nossas opções </button></Link>
            </div>
        )
        
    }
    return(
        <div className={styles.pageContainer}>

            <h1>Seus items: </h1>
            <section>
                <div className={styles.itemsListContainer}>
                    {cartItems.map((item) => (
                        <div className={styles.itemContainer} key={item._id}>
                            <img src={item.imgUrl} alt="" />
                            <div className={styles.itemContent}>
                                <h2>{item.name}</h2>
                                <p>
                                    [{String(item.ingredients)}]
                                </p>
                                <div className={styles.portionContainer}>
                                    <p>Quantidade</p>
                                    <p>{item.quantity}</p>
                                    <div className={styles.portionBtns}>
                                        <button onClick={() => {handleChangeItemQty('less', item._id)}}>-</button>
                                        <button onClick={() => {handleChangeItemQty('more', item._id)}}>+</button>
                                    </div>

                                </div>

                                <button onClick={() =>{removeFromCart(item._id)}}>
                                    <FaMinusCircle />
                                    Remover do carrinho
                                </button>

                            </div>


                        </div>
                    ))}
                </div>
            </section>
            <button>Confirme seu pedido</button>
        </div>
    )
} 