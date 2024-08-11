import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from './input'; // Adjust the path based on your file structure

const MemberForm = () => {
  const { register, watch, formState: { errors } } = useFormContext(); // Access form methods

  const isValidPassword = watch("password") === watch("confirmPassword");

  return (
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
        validation={{ 
          required: "Date of Birth is required",
          validate: (value) => {
            const currentYear = new Date().getFullYear();
            const year = new Date(value).getFullYear();
            return year <= currentYear || "Date of Birth must be in the current year or earlier";
          }
        }}
      />
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "Gender is required" })}
              className="mr-2"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              {...register("gender", { required: "Gender is required" })}
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
  );
};

export default MemberForm;
