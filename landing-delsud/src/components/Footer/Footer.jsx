import React ,{useState} from "react";
import { Box, Button, Card, Paper, TextField, Input, } from '@mui/material';
import styles from './Footer.module.css'
import footer from '../pics/footer.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
    
        const [email, setEmail] = useState("");
        const [error, setError] = useState("");
        const [error1 , setError1] = useState({
          names : "",
          tel : "",
          mail : "",
          msj : "", 
      
        })

      const [mail , setMail]= useState("");
      const [names , setNames]= useState("");
      const [tel , setTel]= useState("");
      const [msj , setMsj]= useState("");

     const validateEmail =(email) => {
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
          }

        const handleSubmit = (event) => {
       
          event.preventDefault();
          console.log(`Subscribed with email: ${email}`);
          setEmail("");
        };

        const handleSubmit2 = (event) => {
          //validar con if 
            event.preventDefault();
           
            console.log(`Subscribed with email: ${email}`);
            setEmail("");
          };

          const handleChange2 = (event) => {
            event.preventDefault();
            
            let value = event.target.value
            let name = event.target.name 
            
            if(name == "mail" ) { 
              console.log("entro")
              setMail(event.target.value);
              if (!validateEmail(event.target.value)) {
                   setError1({...error1 , [event.target.name] : "Email no válido"});
                 } else {
                   setError1({...error1 , [event.target.name] : ""});
                 }
              }

              if(name == "names" ) { 
                setNames(event.target.value);
                }
                
            if(name == "tel" ) { 
              setTel(event.target.value);
              }
              
            if(name == "msj" ) { 
              setMsj(event.target.value);
              }
            // if (!validateEmail(event.target.value)) {
            //   setError("Email no válido");
            // } else {
            //   setError("");
            // }
            console.log(error1)
            console.log("se va a submitear con el siguiente mail ", mail, "y nombre", names, "y mensaje" ,msj , "y telefono" , tel)
          }

const handleChange = (event) => {
  setEmail(event.target.value);
  if (!validateEmail(event.target.value)) {
    setError("Email no válido");
  } else {
    setError("");
  }
}

return (

    <Box className={styles.container}>
     <Box className={styles.leftcont}>
        <Box className={styles.logo}>
            <Box>
                 <Box  className={styles.imgl} component="img" alt="footer" src={footer} />
         </Box>
                <Box className={styles.logotextcont} >
                    <p className={styles.logotext1}> © ELEMENTAL CONSTRUCTORA</p>
                        <p className={styles.logotext}>
                            Todos los derechos reservados. 2021.
                             Todas las imágenes son ilustrativas.</p>
                        </Box>
                     </Box>


    {/* hasta aca es el logo con texto */}
   
    <Box> 
        <h3 className={styles.viviendas}>LINEA TRADICIONAL</h3>
        <h3 className={styles.viviendas}>LINEA DESIGN</h3>


       
       
    </Box>

    <Box className={styles.icons2} >
        <h3 className={styles.contact}>CONTACTO</h3>
        <Box>

           <FacebookIcon sx={{marginRight : "2rem"}} />
            <InstagramIcon sx={{marginRight : "2rem"}}/>
            <WhatsAppIcon sx={{marginRight : "2rem"}}/>
            <LocationOnIcon sx={{marginRight : "2rem"}}/>
        </Box>
                    </Box>

    <Box className={styles.news}> 
        <p className={styles.textsub}>¡Suscríbete a nuestro newsletter para recibir actualizaciones y novedades exclusivas!</p>
             <Box className={styles.icons} >
      
           
            <form className={styles.news} >
                <Box height={"4rem"}> 

        <input placeholder="Email@email.com" className={styles.customInput} value={email} onChange={handleChange} />
        {error && <p className={styles.error} >{error}</p>}
                </Box>
    
                {!error && <button  className={styles.button1}
        type="submit"
            onClick={handleSubmit}
      >
        Enviar!
      </button> }
    </form>
            
        </Box>
    
    </Box>

      
  
                    </Box>
<Box className={styles.formcont}>
<Box  className={styles.card1} >

</Box>
    <Box className={styles.infoform}> 
    <Paper elevation={3} />
<h2>¿QUERÉS RECIBIR ASESORAMIENTO?</h2>
<p className={styles.textinfo} >si tenés alguna consulta para hacerlos sobre Plan E. no dudes en contactarnos. Con mucho gusto la responderemos. </p>

    </Box>
    <Box className={styles.formmigrado}>
        <form  onChange={handleChange2} className={styles.form1}>
            <Box className={styles.inputform}>  
            <Box className={styles.boxinput}>
            <label> Nombre</label>
            <input name="names" value={names} type="text" className={styles.inputfield}/>
            {/* {error && <p className={styles.error1} >{error}</p>} */}
            </Box>
            <Box className={styles.boxinput}>
            <label> E-mail</label>
            <input name="mail" value={mail} type="text" className={styles.inputfield}/>
            {/* {error1?.mail && <p className={styles.error1} >{error.mail}</p>} */}
            </Box>
            <Box className={styles.boxinput}>
            <label> Telefono</label>
            <input name="tel" value={tel} type="number" className={styles.inputfield}/>
            {/* {error && <p className={styles.error1} >{error}</p>} */}
            </Box>


            </Box>
            <Box> 
            <Box className={styles.inputform2}>  
            <Box className={styles.boxinput2}>
            <label> Mensaje</label>
            <textarea name="msj" value={msj} placeholder="Escriba aqui su mensaje" className={styles.inputfield2}/>
            </Box>
            </Box>
            <button className={styles.button1}
        type="submit"
            onClick={handleSubmit2}
      >
        Suscribirse
      </button>
            </Box>
        </form>
        
    </Box>
</Box>

                    </Box>
)

 }


 export default Footer