import { useState, useEffect } from 'react';
import validate from 'validates/validateForm';

function useFormValidation(initialValues, submitForm) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(errors).length === 0;
      if (noError) {
        submitForm();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleBlur(event) {
    const validateInputField = {
      [event.target.name]: event.target.name,
    };
    const validateErrors = validate(values, errors, validateInputField);
    setErrors(validateErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    const validateErrors = validate(values, errors, initialValues);
    setErrors(validateErrors);
  }

  return {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;
