import React from "react";
import { Box, Button, Divider} from '@mui/material';
import styles from './Plan.module.css'
import item from '../pics/item.png'


const Plan = () => { 
   
   
    return ( 
<Box className={styles.h1s}>
    <Divider className={styles.divider1}/>
    <Box className={styles.imgtext}>
           
    <Box component="img" sx={{ ml: "0%"}}    alt="item" src={item} />
     <Box className={styles.text1} > 
<h3 className={styles.text2} > PLAN E </h3>
<h3 className={styles.text2}>ES UNA INVERSIÓN SIMPLE SEGURA Y RENTABLE</h3>
<h3 className={styles.text4}> QUE TE GENERA LIQUIDEZ INMEDIATA SIN CONDICIONARTE A INGRESAR DINERO DE MANERA CONSTANTE</h3>
<h3 className={styles.text4}>UNA ALTERNATIVA FINANCIERA PARA AQUELLOS QUE TIENEN DIFICULTADES PARA ACCEDER A CONSTRUIR SU CASA PROPIA COMO ASI TAMBIEN PARA QUIENES VEN AL LADRILLO COMO UN RESGUARDO DE VALOR PARA SU CAPITAL.</h3>
      <button className={styles.button12}> Conocé Más</button>
        </Box>      
    </Box>

</Box>

    )}

    export default Plan 