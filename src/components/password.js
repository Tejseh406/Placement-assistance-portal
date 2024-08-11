import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from './input'; // Adjust the path based on your file structure
import { toast } from 'react-toastify';

const PasswordSetup = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useFormContext();

  // Watch the password and confirmPassword fields
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const isValidPassword = password === confirmPassword;

  const onSubmit = (data) => {
    console.log(data);
    // Handle password setup logic here
    if (isValidPassword) {
      toast.success("Password set successfully!");
    } else {
      toast.error("Passwords do not match.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl grid grid-cols-2 gap-8">
        {/* Left Side: Descriptive Text */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-4 text-center">Complete Registration</h3>
          <p className="text-gray-700 text-sm text-center">
            We are done with sign up. Please create a password to complete the registration process.
          </p>
        </div>

        {/* Right Side: Input Fields and Button */}
        <div className="col-span-1 flex flex-col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
                validation={{ 
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters long" }
                }}
                register={register}
                errors={errors}
              />
            </div>
            <div className="mb-4">
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                label="Confirm Password"
                validation={{ 
                  required: "Confirm Password is required",
                  minLength: { value: 6, message: "Confirm Password must be at least 6 characters long" }
                }}
                register={register}
                errors={errors}
              />
            </div>
            {password && confirmPassword && !isValidPassword && (
              <p className="text-red-500 text-xs mt-1 text-center">Passwords do not match.</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting || !isValidPassword}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              Set Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetup;
