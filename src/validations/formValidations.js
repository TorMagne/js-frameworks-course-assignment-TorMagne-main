import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
  identifier: yup.string().email('must be a valid email').required('Please enter your username'),
  password: yup.string().required('Please enter your password'),
});

export const schemaContact = yup.object().shape({
  firstName: yup.string().min(3, 'Please enter a first name with 3 letters or more').required(),
  lastName: yup.string().min(4, 'Please enter a last name with 4 letter or more').required(),
  email: yup.string().email().required(),
  message: yup.string().min(10, 'Please enter a message with 10 letters or more').required(),
});
