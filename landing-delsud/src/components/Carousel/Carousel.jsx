import React, { Component } from "react";
import Slider from "react-slick";
import Style from './Carousel.module.css'

//Este componente esta realizado 100% sin material ui, ya que es una prueba, para que se vea tambien el manejo de tags fuera de 
const Carousel = () => { 

    


const RightArrow = (props) => {
  return (
    <button {...props} style={{ display: "none",  marginRight : "-5rem"}}>
      Next
    </button>
  );
};



const settings = {
    dots: false, //los puntos me gustan en lo personal
     infinite: true,
    speed: 200,   
    autoplay : true,
    autoplaySpeed : 2000,
    fade : false, // tambien, en lo personal me gustan mas las transiciones fade que slide 
    lazyLoad : "progressive",
        prevArrow : <RightArrow />, 
    
  };

const resize = () => {

return Style.contdis

}


  return (
    <div className={Style.maxContainer}> 

    <div  className={Style.contdis}> 

  
    <div  className={Style.container}>
    <Slider {...settings}>
      <div className={Style.pics}>
        <img  className={Style.imagen} src="https://www.lumion.es/wp-content/uploads/2021/08/1_Render-final.jpg.webp" />
      </div>
      <div className={Style.pics}>
        <img  className={Style.imagen} src="https://i.imgur.com/gEMlMMQ.jpeg" />
      </div>
      <div className={Style.pics}>
        <img className={Style.imagen} src="https://www.domingoloro.com/images/portfolio/mejores-renders-interiores-domingo-loro.jpg" />
      </div>
      <div className={Style.pics}>
          <img  className={Style.imagen} src="https://www.animacionesrenders.com/wp-content/uploads/2019/05/renders_3d_arquitectura.jpg" />
      </div>
    </Slider>
  </div>
    </div>
    <div className={Style.text2} >
    <h2 className={Style.text4}>  DESIGN  </h2>
        <h1 className={Style.text3}> ELEMENTAL  </h1>
        <p className={Style.text5}> Contamos con una alta gama de diseños tanto modernos como clasicos. Accede a tu vivienda soñada con un click </p>
    <button className={Style.button1}> Más Información</button>
    
    </div>
    </div>
    )}

    export default Carousel