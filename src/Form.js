import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import heroBcg from './assets/AdobeStock_83836356_Preview.png'
const Form = () => {
 
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={heroBcg} alt='spaceship' />
        </div>
          <FormSignup/>
      </div>
    </>
  );
};

export default Form;
