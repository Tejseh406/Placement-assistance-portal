import React, { Fragment, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify'; // For toast notifications
import PasswordSetup from './password'; // Adjust the path based on your file structure
import Address from './adress'; // Import the Address component
import { useLocation } from 'react-router-dom';
import MemberForm from './meberForm'; // Import the MemberForm component
import CompanyForm from './companyForm'; // Import the CompanyForm component

const SignUpPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const location = useLocation();
  const { isMember } = location.state || {};

  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      email: '',
      mobile: '',
      gender: '',
      dateOfBirth: '',
      companyName: '',
      type: '',
      location: '',
      contact: '',
      rating: '',
      address: {
        country: '',
        pincode: '',
        state: '',
        city: '',
        street: ''
      }
    }
  });

  const { handleSubmit, formState: { errors, isValid, isSubmitting } } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    // Handle sign-up logic here
    setIsFormSubmitted(true);
    toast.success("Sign-up successful!");
  };

  return (
    <Fragment>
      <FormProvider {...methods}>
        {!isFormSubmitted ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {isMember ? <MemberForm /> : <CompanyForm />}
                <div>
                  <h1 className='my-3 font-bold text-xl'>Address</h1>
                  <Address />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 
                    disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed
                    focus:ring-blue-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account?
                <a href="/login" className="text-sm ms-2 text-blue-500 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        ) : <PasswordSetup />}
      </FormProvider>
    </Fragment>
  );
};

export default SignUpPage;
