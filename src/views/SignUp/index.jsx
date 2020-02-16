/* eslint-disable no-use-before-define */
import React from 'react';
import useFormValidation from 'hooks/Form/useFormValidation';
import './styles.scss';

const INITAIL_STATE = {
  email: '',
  password: '',
};

export default function SignUp() {
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  } = useFormValidation(INITAIL_STATE, authenticateUser);

  function authenticateUser() {
    console.log('hello world');
  }

  return (
    <form className='signup_banner' onSubmit={handleSubmit}>
      <div className='input_banner'>
        <input
          name='email'
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          className={errors.email && 'error-input'}
          autoComplete='off'
          placeholder='Enter Email'
        />
      </div>
      {errors.email && <p className='error-text'>{errors.email}</p>}
      <div className='input_banner'>
        <input
          name='password'
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          className={errors.password && 'error-input'}
          autoComplete='off'
          placeholder='Enter Password'
        />
      </div>
      {errors.password && <p className='error-text'>{errors.password}</p>}

      <div className='btn_banner'>
        <button disabled={isSubmitting} type='submit'>
          Sign Up
        </button>
      </div>
    </form>
  );
}
