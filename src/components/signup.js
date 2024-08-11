import React, { Fragment, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from './input'; // Adjust the path based on your file structure
import { toast } from 'react-toastify'; // For toast notifications
import PasswordSetup from './password'; // Adjust the path based on your file structure
import Address from './adress'; // Import the Address component

const SignUpPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      email: '',
      mobile: '',
      gender: '',
      dateOfBirth: '',
      address: {
        country: '',
        pincode: '',
        state: '',
        city: '',
        street: ''
      }
    }
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting }
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    // Handle sign-up logic here
    setIsFormSubmitted(true);
    toast.success("Sign-up successful!");
  };

  const isValidPassword = watch("password") === watch("confirmPassword");

  return (
    <Fragment>
      <FormProvider {...methods}>
        {!isFormSubmitted ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Input
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    label="Username"
                    validation={{ required: "Username is required" }}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    label="Email"
                    validation={{ 
                      required: "Email is required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address" }
                    }}
                  />
                  <Input
                    name="mobile"
                    type="text"
                    placeholder="Enter your mobile number (+91)"
                    label="Mobile"
                    validation={{ 
                      required: "Mobile number is required",
                      pattern: { value: /^\d{10}$/, message: "Please enter a 10-digit mobile number" }
                    }}
                  />
                  <Input
                    name="dateOfBirth"
                    type="date"
                    placeholder=""
                    label="Date of Birth"
                    validation={{ required: "Date of Birth is required" }}
                  />
                </div> {/* Include the Address component here */}

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                    <div className="flex items-center">
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          {...methods.register("gender", { required: "Gender is required" })}
                          className="mr-2"
                        />
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          {...methods.register("gender", { required: "Gender is required" })}
                          className="mr-2"
                        />
                        Female
                      </label>
                    </div>
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <h1 className='my-3 font-bold text-xl'>Address</h1>
                  <Address />
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={!isValid || !isValidPassword || isSubmitting}
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
