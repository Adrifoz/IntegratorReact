import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../CSS/Contacto.css'

function Contacto () {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

return ( 
<>
<div className='contactContainer'>
  <div className='homeContacto'>
      <h3>
        Escríbanos!
      </h3>
    <Formik 
      initialValues={{ nombre: '', apellido: '', email: '', asunto: '',celular: '', comentario: ''}} 
      validationSchema={Yup.object({ nombre: Yup.string().required('Campo requerido'), 
      apellido: Yup.string().required('Campo requerido'), 
      email: Yup.string().matches(regEmail, "Mail no valido").required('Campo requerido'), 
      asunto: Yup.string().required('Campo requerido'), 
      celular: Yup.number().required('Campo requerido'),
      comentario: Yup.string().required('Campo requerido'), 
      })} 
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setFormSubmitted(true);
          resetForm(); // Reinicia el formulario después del envío
          setSubmitting(false);
        }, 400);
      }}
    > 
          {({ isSubmitting }) => ( 

          <Form className='forms'>
          <div className="form">
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <Field name="nombre" type="text" placeholder="Tu nombre" />
            </div>
            <ErrorMessage name="nombre" component="div" className="errorMessage" />
          </div>

          <div className="form">
            <div>
              <label htmlFor="apellido">Apellido:</label>
              <Field name="apellido" type="text" placeholder="Tu apellido" />
            </div>
            <ErrorMessage name="apellido" component="div" className="errorMessage" />
          </div>

          <div className="form">
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" placeholder="Tu email" />
          </div>
            <ErrorMessage name="email" component="div" className="errorMessage" />
          </div>

          <div className="form">
            <div>
              <label htmlFor="asunto">Asunto:</label>
              <Field name="asunto" type="text" placeholder="Tu asunto" />
            </div>
            <ErrorMessage name="asunto" component="div" className="errorMessage" />
          </div>

          <div className="form">
            <div>
              <label htmlFor="celular">Celular:</label>
              <Field name="celular" type="text" placeholder="Tu celular" />
            </div>
              <ErrorMessage name="celular" component="div" className="errorMessage" />
          </div>

          <div className="form">
            <div id='commentContainer'>
              <label htmlFor="comentario">Comentário:</label>
              <div>
                <Field name="comentario" className="comment" type="text" placeholder=" Escriba su comentario" />
            </div>
            </div>
              <ErrorMessage name="comentario" component="div" className="errorMessage" />
          </div>

          <button type="submit" className='sendContact' disabled={isSubmitting}>
            Enviar
          </button>
          </Form>
      )}
    </Formik> 

    {formSubmitted && <p className="successMessage">Formulario enviado correctamente.</p>}    
  </div>

    <div className='homeContacto'>
      <h3>
        Otros contactos
      </h3>
      <div className='othersContacts'>
          <p >Celular: 2262666666 / 2262555555</p>
          <p>Mail: plomeriaygas@gmail.com</p>
          <p>Instagram: @plomeriaygasnecochea</p>
          </div>

          <img src={"https://i.pinimg.com/550x/7e/e6/f6/7ee6f6d7043c1b2e34726d4f71976747.jpg"} alt={"Caricatura de plomero"}/>
    </div>

    <p className='description'>Para más información no dude en entrar en contacto con nosotros. </p>
    <p className='description'>¡Lo esperamos!</p>

    <footer>

      <p>Plomería y Gas Necochea ©copyright</p>

    </footer>
  
  </div>
  </>
);
}

export default Contacto;