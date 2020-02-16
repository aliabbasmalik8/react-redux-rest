export default function validateAuth(values, initialErrors, inputFields) {
  const errors = JSON.parse(JSON.stringify(initialErrors));
  if (inputFields.email || inputFields.email === '') {
    errors.email = validateEmail(values);
  }

  if (inputFields.password || inputFields.password === '') {
    errors.password = validatetPassword(values);
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
