import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormComponent = () => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-5xl mx-auto p-6 absolute right-1/4 bottom-1/2 bg-white bg-opacity-20 backdrop-blur-xl rounded-lg shadow-xl">
          <div className="flex items-center space-x-5">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-white">
                First Name
              </label>
              <Field
                name="firstName"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="min-h-[24px]">
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm " />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="min-h-[24px]">
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm " />
              </div>
            </div>

            <div className="flex-none">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 px-4 py-2 mb-[24px] bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
