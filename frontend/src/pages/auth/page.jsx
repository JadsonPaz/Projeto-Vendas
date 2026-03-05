import { useState, useEffect     } from "react"
import { TextField, Button } from "@mui/material"
import styles from "./page.module.css"
import authservices from "../../services/auth.jsx"
import { LuLogIn } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

export default function Auth() {
    const [formType, setFormType] = useState('login')

    const [formData, setFormData] = useState(null)

    const { login, signup, authLoading } = authservices()

    const navigate = useNavigate()

    const authData = JSON.parse(localStorage.getItem('auth'))
    
    useEffect(() => {
    if (authData) {
        navigate('/profile') // sem return
    }
    }, [authData])



    const handleChangeFormType = () => {
        setFormData(null)
        if (formType === 'login') {
            setFormType('signup')
        } else {
            setFormType('login')
        }
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(e)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        switch (formType) {
            case 'login':
                login(formData)
                break
            case 'signup':
                if (formData.password !== formData.confirmPassword) {
                    alert('As senhas não coincidem')
                    return
                }
                signup(formData)
                break
            default:
                break
        }

    }   

    if (authLoading) {
        return (
            <div className={styles.authPageContainer}>
                <h1>Loading...</h1>
            </div>
        )
    }



    if (formType === 'login') {
        return (
            <div className={styles.authPageContainer}>
                <h1>login</h1>
                <button onClick={handleChangeFormType}>Não tem uma conta? Cadastre-se</button>
                <form onSubmit={handleSubmitForm}>
                    <TextField
                        required
                        label="email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        )
    }


    if (formType === 'signup') {
        return (
            <div className={styles.authPageContainer}>
            {formType === 'login' ? (
                <>
                    <h1>Login</h1>
                    <button onClick={handleChangeFormType}>Não tem uma conta? Cadastre-se</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                        />
                        <button type="submit">Login<LuLogIn /></button>
                    </form>
                </>
            ) : null}

            {formType === 'signup' ? (
                <>
                    <h1>Signup</h1>
                    <button onClick={handleChangeFormType}>Já tem uma conta? Clique aqui</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField 
                        required
                        label="Fullname"
                        type="fullname"
                        name="fullname"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Confirm password"
                        type="password"
                        name="confirmPassword"
                        onChange={handleFormDataChange}
                        />
                        <button type="submit">Signup<LuLogIn /></button>
                    </form>
                </>
            ) : null}
        </div>
        )
    }
}