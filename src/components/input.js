import React from 'react';
import { useFormContext } from 'react-hook-form';

const Input = ({ name, type = 'text', placeholder, label, validation }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Input;
