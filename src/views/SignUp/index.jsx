/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from 'api/auth';
import { signupSuccess, signupFailure } from 'actions/auth';
import useFormValidation from 'hooks/Form/useFormValidation';
import './styles.scss';

const INITAIL_STATE = {
  email: '',
  password: '',
};

function SignUp() {
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  } = useFormValidation(INITAIL_STATE, authenticateUser);
  const dispatch = useDispatch();

  function authenticateUser() {
    dispatch(signup(values, signupSuccess, signupFailure));
  }

  return (
    <div className='signup_banner'>
      <div className='main_subtitle'>
        Make the most of your professional life
      </div>
      <form autoComplete='off' className='signup_form' onSubmit={handleSubmit}>
        <div className='input_banner'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.email && 'error-input'}
            autoComplete='none'
          />
          {errors.email && <p className='error-text'>{errors.email}</p>}
        </div>
        <div className='input_banner'>
          <label htmlFor='password'>Password (6 or more characters)</label>
          <input
            name='password'
            type='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.password && 'error-input'}
            autoComplete='off'
          />
          {errors.password && <p className='error-text'>{errors.password}</p>}
        </div>

        <div className='btn_banner'>
          <button disabled={isSubmitting} type='submit'>
            Join
          </button>
        </div>
        <p className='have_account'>
          Already on LinkedIn?{' '}
          <Link to='/accounts/signin' className='sign_in_link'>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
