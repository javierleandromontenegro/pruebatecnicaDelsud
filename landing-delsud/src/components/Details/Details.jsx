import React from "react";
import { Box} from '@mui/material';
import styles from './Details.module.css'
import flex from '../pics/flex.png'
import accesible from '../pics/accesible.png'
import liquidez from '../pics/liquidez.png'


const Details = () => { 
    return ( 
<Box className={styles.detailsCont} bgcolor="rgb(177,186,185)">
    <Box >
 <Box component="img" alt="accesible"src={accesible}  />
 
 <p className={styles.bolder} >SIMPLE Y ACCESIBLE </p>
 <p className={styles.text1}>Más inclusivo que el sistema tradicional. </p>


    </Box>

    <Box >
 <Box component="img" alt="liquidez"src={liquidez}/>
 <p className={styles.bolder}> LIQUIDEZ INMEDIATA</p>
 <p className={styles.text1}> Ves tu capital crecer desde el inicio. </p>
    </Box>

    <Box >        
 <Box component="img"   alt="flex"src={flex} />
 <p className={styles.bolder}>FLEXIBLE </p>
 <p className={styles.text1} >No te comprometes a pagar una cuota.  </p>
    </Box>

</Box>

     )}





export default Details 