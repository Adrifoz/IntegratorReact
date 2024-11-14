import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../CSS/BuyForm.css';

const BuyForm = () => {
  const navigate = useNavigate();

    return (
      <>
      <div className="ProductsContainer">
        <h2>Iniciar Sesión</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Email inválido')
              .required('Campo requerido'),
            password: Yup.string()
              .min(6, 'Debe tener al menos 6 caracteres')
              .required('Campo requerido')
          })}
          onSubmit={() => {
              navigate('/BuyConfirm');

          }}
        >
          {({ isSubmitting }) => (
            <Form className='formBuy'>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field name="email" type="email" className="field" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <Field name="password" type="password" className="field" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Iniciar Sesión
              </button>
            </Form>
          )}
          </Formik>
        
         
          <p className='description'>Todos los productos están sujetos a disponibilidad de stock.</p>
            <p className='description'>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
        
      <footer>
      <p>Plomería y Gas Necochea ©copyright</p>
      </footer>
      </div>
      </>          
  );
};

    

export default BuyForm;
