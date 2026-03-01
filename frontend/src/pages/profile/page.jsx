import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import authServices from "../../services/auth"
import { LuLogOut } from "react-icons/lu"

export default function Profile() {
    const {logout} = authServices()
    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() => {
        if (!authData) {
            navigate('/auth')
        }
    }, [authData, navigate])

    const Sair = () => {
        logout()
        return navigate('/')
    }
    return(
        <>
            <div>
                <h1>{authData?.user?.fullname}</h1>
                <h3>{authData?.user?.email}</h3>
                <button onClick={Sair}>Sair<LuLogOut /></button>
            </div>
        </>
    )
}