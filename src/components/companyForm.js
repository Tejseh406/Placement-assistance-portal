import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from './input'; // Adjust the path based on your file structure

const CompanyForm = () => {
  const { register, formState: { errors } } = useFormContext(); // Access form methods

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <Input
        name="companyName"
        type="text"
        placeholder="Enter company name"
        label="Company Name"
        validation={{ required: "Company name is required" }}
      />
      <Input
        name="type"
        type="text"
        placeholder="Enter company type (Product or Service)"
        label="Company Type"
        validation={{ required: "Company type is required" }}
      />
      <Input
        name="location"
        type="text"
        placeholder="Enter company location"
        label="Location"
        validation={{ required: "Location is required" }}
      />
      <Input
        name="contact"
        type="text"
        placeholder="Enter company contact number"
        label="Contact Number"
        validation={{ 
          required: "Contact number is required",
          pattern: { value: /^\d{10}$/, message: "Please enter a valid contact number" }
        }}
      />
      <Input
        name="rating"
        type="number"
        placeholder="Enter company rating (1-5)"
        label="Rating"
        validation={{ 
          required: "Rating is required",
          min: { value: 1, message: "Rating must be at least 1" },
          max: { value: 5, message: "Rating must be no more than 5" }
        }}
      />
    </div>
  );
};

export default CompanyForm;
