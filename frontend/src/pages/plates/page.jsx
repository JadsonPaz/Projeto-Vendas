
import platesServices from "../../services/plates"
import { useEffect, useState } from "react"
import Loading from "../loading/page"
import PlateCard from "../../components/plateCard/platecard"
import styles from './page.module.css'
import PlatePopup from "../../components/platePopup/platePopup"

export default function plates() {

    const { getAvailablePlates, platesLoading, refetchPlates, platesList} = platesServices()
    const [plateSelected, setPlateSelected] = useState(null)

    useEffect(() => {
        if (refetchPlates) {
            getAvailablePlates()
        }
    }, [refetchPlates]) 

    const handlePlateSelect = (plate) => {
        setPlateSelected(plate)
    }

    const handleClosePopup = () => {
        setPlateSelected(null)

    }

    if (platesLoading){
        return (<Loading />)
    }

    console.log(platesList)
    

    return (

        <>
            <div>

                {platesList.map((plate) => (
                    <div key={plate._id} className={styles.cardContainer} onClick={() => { handlePlateSelect (plate) }}>
                        <PlateCard plateData={plate} />
                    </div>
                ))}
            </div>

            {plateSelected && (
                <>
                    <PlatePopup 
                        plateData={plateSelected} 
                        onClose={handleClosePopup} 
                        onAddToCart={(plate) => {
                            // Lógica para adicionar ao carrinho
                            console.log('Adicionar ao carrinho:', plate)
                        }} 
                    />
                </>
            )}
        </>

    )
}