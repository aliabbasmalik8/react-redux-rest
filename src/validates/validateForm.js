export default function validateAuth(values, initialErrors, inputFields) {
  const errors = { ...initialErrors };
  let error = null;
  if (inputFields.email || inputFields.email === '') {
    error = validateEmail(values);
    if (error) {
      errors.email = error;
    } else {
      delete errors.email;
    }
  }

  if (inputFields.password || inputFields.password === '') {
    error = validatetPassword(values);
    if (error) {
      errors.password = error;
    } else {
      delete errors.password;
    }
  }

  return errors;
}

function validateEmail(values) {
  let error = null;
  if (!values.email) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error = 'Invalid email address';
  }
  return error;
}

function validatetPassword(values) {
  let error = null;
  if (!values.password) {
    error = 'Required';
  } else if (values.password.length < 6) {
    error = 'Password must be at least 6 characters';
  }
  return error;
}
