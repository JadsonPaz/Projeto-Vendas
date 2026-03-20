import { CircularProgress } from '@mui/material'
import styles from './page.module.css'

export default function Loading() {
    return (
        <div className={styles.loadingPageContainer}>
            <p>Carregando...</p>
            <CircularProgress color='inherit' />
        </div>
    )
}