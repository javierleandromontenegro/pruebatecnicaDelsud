import React from "react";
import { Box,  Container , Toolbar , Link , Button} from '@mui/material';
import logo from '../pics/logo.png';
import styles from './NavBar.module.css'

const NavBar = () => { 

    const pages = ['INICIO', 'NOSOTROS', 'VIVIENDAS' , 'QUINCHOS' , 'PLAN E', 'REALIDAD VIRTUAL' , 'CONTACTO' ];
    return (
        <Box className={styles.cont} bgcolor={"white"} position="sticky" sx={{ left : 0 ,top: 0, left: 0, height: '80px', justifyContent: 'center', zIndex: 9999999 }}>
        <Container maxWidth={false} pl={20}>
          <Toolbar disableGutters>
  
             
            {/* LOGO CAMPY */}
            
              <Box
                component="img"
                sx={{
                  ml: "0%"
                }}
                alt="Logo"
                src={logo}
              />
           
  
           
  
  
          
  
  
            {/* muestra dispositivos GRANDES , no tuve tiempo para hacerlo todo responsive, es relativamente sencillo aplicando mobilefirst de entrada */}
            <Box sx={{ flexGrow: 1, display: 'flex', px: 1, justifyContent: 'right' }}>
  
              {pages.map((page, i) => (
                // <Link onClick={() => handleClickLink(page)} className={s.links} to={`/${rutes[i]}`} key={rutes[i]}>
  
                  <Button className={styles.navButton}
                    key={page}
                    sx={{ my: 2, px: 1.5, color: 'grey' , fontWeight : "bold", display: 'block', fontSize: 'small' }}
                    // className={isActive === page ? s.active : ''}
                  >
                    {page}
                  </Button>
                // </Link>
              ))}
            </Box>
  
         
  
          </Toolbar>
        </Container>
      </Box>
    );
}

export default NavBar