import React from "react";
import { Box} from '@mui/material';
import logo from '../pics/logo.png';
import styles from './Welcome.module.css'
import videoref from '../pics/videoref.png'

const Welcome = () => { 
    return (
        <Box  className={styles.landContainer}bgcolor={"rgb(233,233,233)"} height={"560px"}  > 
        <Box className={styles.textContainer} marginLeft={"2%"}> 
            <h2 className={styles.text1}> BIENVENIDO A   </h2>
            <h1 className={styles.text2}>PLAN E </h1>
            <p className={styles.text3}>Te invitamos a conocer la nueva herramienta financiera de
Elemental Constructora.</p>
            <p className={styles.text4}> Plan E te da la posibilidad de ahorrar en metros cuadrados
poniendo vos los plazos y cantidad de unidades que querés
comprar, mientras tu inversión crece por la actualización de
valores.</p>
        </Box>
        <Box>
        
              <Box
              component="img"
              sx={{
                mr: "2%"
              }}
              alt="videoref"
              src={videoref}
            />
          
        </Box>
       
         </Box>
    )
}


export default Welcome