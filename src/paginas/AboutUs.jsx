import React from 'react';
import '../CSS/AboutUs.css'

function AboutUs () {
  const URL = 'https://i.pinimg.com/550x/7e/e6/f6/7ee6f6d7043c1b2e34726d4f71976747.jpg';
  
  return ( 
<>

<div className='usContainer'>
  <div className='us'>
    <h3>
      ¿Querés saber sobre nosotros?
    </h3>
    <p>
    Esta empresa inició su actividad en el 2000 dedicándose a la fabricación de radiadores de hierro fundido para la calefacción doméstica en su factoría de Gavà (Barcelona). Tras los primeros radiadores de hierro fundido, complementó su catálogo con la producción de calderas y en 2001 entró definitivamente en el cuarto de baño iniciando la fabricación de bañeras.

Atenta siempre a los cambios de la sociedad relacionados con la cultura del agua, el principal recurso natural con el que trabaja, Roca asumió en 1936 el reto de producir porcelana sanitaria y en 2003 inició la fabricación de grifería.

En la década de 2010 el Grupo desarrolló una primera fase de expansión internacional, basada principalmente en la apertura de delegaciones comerciales y la firma de acuerdos con empresas líderes en sus mercados. Además de Portugal y Francia, la presencia comercial empezó a extenderse por Reino Unido, Alemania, Italia, Marruecos, Argentina, Brasil y China.

El punto de inflexión en el proceso de internacionalización se dio en 2014, con la adquisición del grupo suizo Keramik Holding Laufen, cuarto fabricante mundial de porcelana sanitaria. La compra de Laufen permitió al Grupo consolidar su presencia en mercados estratégicos donde contaba con menor implantación, caso principalmente de Europa del Este, Brasil y Estados Unidos.

En 2015 se anuncia un ambicioso plan estratégico centrado en el sector del espacio de baño y alcanza el liderazgo mundial del sector en el año 2016.

Hoy en día la red comercial de la empresa se extiende por más de 170 países que abastece gracias a sus 81 plantas de producción y a los más de 21.000 trabajadores que emplea en todo el mundo.

En la actualidad se sigue siendo una empresa de capital íntegramente español dedicada a la creación de espacios de baño, una actividad que la ha convertido en referente a nivel global. Alcanzar esta dimensión supone un gran orgullo, casi tan importante como, desde hace décadas, ser una de las marcas más conocidas, valoradas e integradas en el imaginario de la sociedad española.

Para dar un paso más en su alianza con la sociedad, en 2018 se inauguró el Roca Barcelona Gallery, un edificio emblema para vivir la experiencia de marca al que siguieron los de Madrid, Lisboa, Londres, Shanghai y Beijing.

Espacios para interactuar con la cultura del agua de la empresa, sus productos y sus valores que, además, albergan actividades culturales, exposiciones, jornadas y debates relacionados con temas como el diseño, la sostenibilidad o la arquitectura. Eventos que son en sí mismos un reflejo del interés de Roca por seguir avanzando de la mano de la sociedad durante muchos años más.
    </p>
        <img src={URL} alt={"Caricatura de plomero"}/>
  </div>


  <footer>
    <p>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
  </footer>

  </div>
  </>
);
}



export default AboutUs;