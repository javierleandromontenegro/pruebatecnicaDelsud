import React, { useEffect } from 'react';
import { Box} from '@mui/material';
import Welcome from '../Welcome/Welcome';
import Details from '../Details/Details';
import Carousel from '../Carousel/Carousel';
import Plan from "../Plan/Plan"
import Faqs from "../Faqs/Faqs";
import Footer from '../Footer/Footer'
import SimpleModal from '../Modal/Modal';


const LandingPage = () => { 
    // useEffect(() => {
    //     window.addEventListener("wheel", handleWheel);
    
    //     return () => {
    //       window.removeEventListener("wheel", handleWheel);
    //     };
    //   }, []);
    
    //   const handleWheel = (event) => {
    //     if (event.deltaY > 0) {
    //       // Rueda gira hacia abajo
    //       console.log("Rueda gira hacia abajo");
    //     } else {
    //       // Rueda gira hacia arriba
    //       console.log("Rueda gira hacia arriba");
    //     }
    //   };
      
    return (
        <Box>
            <SimpleModal/>
            <Welcome/>
            <Details/>
            <Carousel/>
            <Plan/>
            <Faqs/>
            <Footer/>
        </Box>
    )
}


export default LandingPage