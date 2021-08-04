import React ,{useState} from 'react';
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import validate from './validateInfo';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useForm from './useForm';
import './Form.css';
import countries from './utils/country';
import heroBcg2 from './assets/Group 1885.png'
var zxcvbn = require("zxcvbn")
const FormSignup = ({ submitForm }) => {
  const [type, setType] = useState("input");
  const [score, setScore] = useState("null");
  const showHide = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let currentType = type === "input" ? "password" : "input"
    setType(currentType)
  }
  const testStrengthPassword = (e) => {
    // we will get score property from zxcvbn
    if (e.target.value !== "") {
      let pass = zxcvbn(e.target.value)
      setScore(pass.score)
    }else{
      setScore("null")
    }
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <div className="form-content-right__img">
      <img src={heroBcg2}/>
      </div>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Register now
        </h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
         <div className='form-inputs'>
         <select className="form-input" id="country" name="country" >
           {countries.map((item)=>{
             return(
              <option key={item.key} value={item.value}>{item.text}</option>

             )
           })}
         </select>
       
        </div>
        <div className='form-inputs'>
       
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Full name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
        
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
        
        <input
            className='form-input'
            type='text'
            name='phone'
            placeholder='Mobile number'
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs passStrength'>
          <input
            className='form-input'
            type={type}
            name='password'
            placeholder='Password'
            onChange={testStrengthPassword}
          />
           <span className="show-password" onClick={showHide}>
        {type === "input" ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </span>
      <span
        className="strength-password"
        data-score={score}
      />
        </div>
        <div className="verify">
        <h3>
        Verify your account with
        </h3>
        <div className="form-inputs">
        <div class="checkbox-container">
          <div className="div-container">
          <label class="checkbox-label Phone">
            <input type="checkbox"/>
            <span class="checkbox-custom rectangular"></span>
        </label>
        <div class="input-title Phone">Phone number</div>
          </div>
          <div className="div-container">
          <label class="checkbox-label Phone">
            <input type="checkbox"/>
            <span class="checkbox-custom rectangular"></span>
        </label>
          <div class="input-title Email">Email</div>

          </div>

        </div>
        <div class="checkbox-container">
        <label class="checkbox-label">
            <input type="checkbox"/>
            <span class="checkbox-custom rectangular"></span>
        </label>
        <div class="input-title">
          <p >I accept the terms and conditions, consectetur adipiscing elit. Integer eu velit est. Maecenas nulla justo, feugiat eget <a href="#">congue in</a> , auctor tellus.</p>
          </div>
        </div>
        </div>
      </div>
        <button className='form-input-btn' type='submit'>
        Continue
        </button>
        <span className='member'>
        Already registered? Login <a href='#'>here</a>
        </span>
      </form>
  
      
    </div>
  );
};

export default FormSignup;
