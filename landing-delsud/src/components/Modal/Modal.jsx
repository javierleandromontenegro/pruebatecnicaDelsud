import React, { useState } from "react";
import { Modal, Button ,Box} from '@mui/material';
import styles from './Modal.module.css'

const  SimpleModal =()=> {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

const validateEmail =(email) => {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

  const handleSubmit = (event) => {
  //validar con if 
    event.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

 

const handleChange = (event) => {
setEmail(event.target.value);
if (!validateEmail(event.target.value)) {
setError("Email no válido");
} else {
setError("");
}
}

  return (
    <Modal open={open} onClose={handleClose} className={styles.modal}>
      <div className={styles.style1}>
      <p className={styles.cruz} onClick={handleClose}>X</p>
        <div className={styles.transparent}> </div>
      <div className={styles.semihr}/>
      <div className={styles.semihr2}/>
      <p className={styles.text1}>PLAN E</p>
      <p className={styles.text2}> LA CASA DE TUS SUEÑOS</p>
      <div className={styles.semihr3}/>
      <p className={styles.text3}> ¡ES POSIBLE!</p>
      <p className={styles.text4}> ¿QUERÉS SABER MÁS?</p>
      <p className={styles.text5}> Dejanos tu mail</p>
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
      
      </div>
    </Modal>
  );
}



export default SimpleModal;