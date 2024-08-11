import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from './input'; // Adjust the path based on your file structure
import { toast } from 'react-toastify'; // For toast notifications
import { Link } from 'react-router-dom';

const Login = () => {
  const methods = useForm({
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    // Handle login logic here
    toast.success("Login successful!");
  };

  return (
    <FormProvider {...methods}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              label="Email"
              validation={{ 
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
              }}
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              label="Password"
              validation={{ required: "Password is required" }}
            />
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md 
              hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-4
              disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?
              <Link to="/signup" className="text-sm ms-2 text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Login;
