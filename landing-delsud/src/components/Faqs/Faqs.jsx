import React from "react";
import { Box, Button, Card, CardContent,Typography } from '@mui/material';
import style from './Faqs.module.css'
import faqs2 from '../pics/faqs.png'


const Faqs = () => { 
    const [response, SetResponse] = React.useState({ id: 0 });
    const faqs = [
        {
           
            id: 1,
            pregunta: " ¿Por que invertir en Plan E? ¿ A quién está dirigido?",
            respuesta: "El sector inmobiliario es una industria en constante crecimiento y permite un resguardo de valor para tu capital. Plan E esta pensado para aquellos que quieren construir su casa propia y no pueden acceder por la linea de creditos tradicional, y tambien para quienes ven una oportunidad de inversión en el ladrillo."
            
        },
        {
            id: 2,
            pregunta: "¿Como funciona?",
            respuesta: "El sector inmobiliario es una industria en constante crecimiento y permite un resguardo de valor para tu capital. Plan E esta pensado para aquellos que quieren construir su casa propia y no pueden acceder por la linea de creditos tradicional, y tambien para quienes ven una oportunidad de inversión en el ladrillo."
        },
        {
            id: 3,
            pregunta: "  ¿Cual es el precio de un metro cuadrado?",
            respuesta: "El sector inmobiliario es una industria en constante crecimiento y permite un resguardo de valor para tu capital. Plan E esta pensado para aquellos que quieren construir su casa propia y no pueden acceder por la linea de creditos tradicional, y tambien para quienes ven una oportunidad de inversión en el ladrillo."
        },
        {
            id: 4,
            pregunta: " ¿Desde que momento puedo decidir vender mis m2?",
            respuesta: "El sector inmobiliario es una industria en constante crecimiento y permite un resguardo de valor para tu capital. Plan E esta pensado para aquellos que quieren construir su casa propia y no pueden acceder por la linea de creditos tradicional, y tambien para quienes ven una oportunidad de inversión en el ladrillo."
        },
        {
            id: 5,
            pregunta: " ¿Cuanto tiempo pasa hasta que recupere el dinero de mi inversión?",
            respuesta: "El sector inmobiliario es una industria en constante crecimiento y permite un resguardo de valor para tu capital. Plan E esta pensado para aquellos que quieren construir su casa propia y no pueden acceder por la linea de creditos tradicional, y tambien para quienes ven una oportunidad de inversión en el ladrillo."
        },
        
    ]
    const handleResponse = (e) => {

        SetResponse({ id: e.target.value })

    } 
    return ( 
<Box bgcolor="rgb(233,233,233)" className={style.container}>

<Box width="68rem" bgcolor="rgb(233,233,233)">
{faqs?.map((faqs) => {
                            return (
                                
                                

                                <Box className={style.card}   sx={{  display: 'flex',ml : 3 ,  mb: 2, height: "fit-content", width: "50rem",  justifyContent: "start" }}>

                                    <Box >
                                        <CardContent className={style.typo} sx={{ display: 'flex', flexDirection: 'column', p: 0, m: 0 }}>
                                            <Typography className={style.typo} component="div" variant="h6" sx={{ mb: 1 }}>
                                                <Button
                                                    value={faqs.id}
                                                    onClick={handleResponse}
                                                    sx={{ color: "black" }}>
                                                    {faqs.pregunta}
                                                </Button>
                                            </Typography >
                                            {response.id == faqs.id ? <Typography className={style.typo} variant="body2" color="text.secondary" component="div">
                                                {faqs.respuesta}
                                            </Typography> :
                                                []
                                            }

                                        </CardContent>
                                    </Box>


                                </Box>

)
                        })}
</Box>
                        <Box>
                        <Box  className={style.img}
                component="img"
                sx={{
                  mr: "2rem"
                }}
                alt="faqs2"
                src={faqs2}
              />
                        </Box>
</Box>

    )}


    export default Faqs