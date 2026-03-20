import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import authServices from "../../services/auth"  
import orderServices from "../../services/order"
import { LuLogOut, LuTimer, LuCheck } from "react-icons/lu"
import { Link } from "react-router-dom"
import styles from './page.module.css'
import Loading from "../loading/page"

export default function Profile() {
    const {logout} = authServices()
    const {getUserOrders, orderLoading, refetchOrders, ordersList} = orderServices()
    const navigate = useNavigate()
    
    // ✅ useMemo evita recriar o objeto a cada render
    const authData = useMemo(() => {
        return JSON.parse(localStorage.getItem('auth'))
    }, [])

    useEffect(() => {
        if (!authData) {
            navigate('/auth')
        } else {
            // ✅ busca sempre que entrar na página, ou quando refetchOrders mudar
            getUserOrders(authData?.user?._id) 
        }
    }, [authData, refetchOrders])

    if (orderLoading){
        return (<Loading />)
    }

    const Sair = () => {
        logout()
        return navigate('/')
    }

    console.log(ordersList)

    return(
        <div className={styles.pageContainer}>
            <div >
                <h1>{authData?.user?.fullname}</h1>
                <h3>{authData?.user?.email}</h3>
                
            </div>
            
            {ordersList.length > 0 ? 
                <div className={styles.ordersContainer}>
                    {ordersList.map((order) => (
                        <div key={order._id} className={styles.orderContainer}>
                            {order.pickupStatus === 'pending' ? <p className={`${styles.pickupStatus} ${styles.pending}`}><LuTimer />{order.pickupStatus}</p> : null}
                            {order.pickupStatus === 'completed' ? <p className={`${styles.pickupStatus} ${styles.completed}`}><LuCheck />{order.pickupStatus}</p> : null}
                            {order.pickupStatus === 'canceled' ? <p className={`${styles.pickupStatus} ${styles.canceled}`}>{order.pickupStatus}</p> : null}
                            <h3>{order.pickupTime}</h3>
                            {order.orderItems.map((item)=> (
                                <div key={item._id}>
                                    <h4>{item.ItemsDetails[0].name}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            : 
                <div>
                    You do not have orders yet.
                    <Link to={'/plates'} className={styles.platesLink}>Click here and see our specialities!</Link>  
                </div>
            }
            
            
            <button onClick={Sair} className={styles.logoutButton}><LuLogOut /> Sair</button>
        </div>
    )
}