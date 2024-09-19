import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import photo from './photo.webp';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .oneOf(['rishiME@199'], 'Password must be "rishiME@199"')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const App = () => {
  const initialValues = { name: '', email: '', password: '', confirmPassword: '' };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className=" w-full m-20">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <div className="w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-6">Welcome!</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isValid, dirty }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <button
                    type="submit"
                    disabled={!(isValid && dirty)}
                    className="w-full bg-gray-300 text-white py-2 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    SIGN UP
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="w-1/2 bg-gray-200">
            <img
              src={photo}
              alt="Workspace"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
