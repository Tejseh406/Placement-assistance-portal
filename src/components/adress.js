// Address.js
import React from 'react';
import { useFormContext } from 'react-hook-form';

const Address = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
        <select
          name="address.country"
          {...register("address.country", { required: "Country is required" })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add more countries as needed */}
        </select>
        {errors.address?.country && (
          <p className="text-red-500 text-xs mt-1">{errors.address.country.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Street</label>
        <input
          type="text"
          name="address.street"
          {...register("address.street", { required: "Street is required" })}
          placeholder="Street"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.address?.street && (
          <p className="text-red-500 text-xs mt-1">{errors.address.street.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
        <input
          type="text"
          name="address.city"
          {...register("address.city", { required: "City is required" })}
          placeholder="City"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.address?.city && (
          <p className="text-red-500 text-xs mt-1">{errors.address.city.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
        <input
          type="text"
          name="address.state"
          {...register("address.state", { required: "State is required" })}
          placeholder="State"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.address?.state && (
          <p className="text-red-500 text-xs mt-1">{errors.address.state.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Pincode</label>
        <input
          type="text"
          name="address.pincode"
          {...register("address.pincode", { 
            required: "Pincode is required",
            pattern: { value: /^\d{6}$/, message: "Please enter a 6-digit pincode" }
          })}
          placeholder="Pincode"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.address?.pincode && (
          <p className="text-red-500 text-xs mt-1">{errors.address.pincode.message}</p>
        )}
      </div>
    </div>
  );
};

export default Address;
