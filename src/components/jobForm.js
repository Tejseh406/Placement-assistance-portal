import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from './input'; // Adjust the path based on your file structure
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const JobForm = () => {

  const navigate = useNavigate();
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      type: '',
      salary: '',
      noOfVacancies: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Job details submitted successfully!");
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen flex bg-gray-100">
        {/* Left Side Image */}
        <div className="w-1/2">
          <img src="job-img.jpg" alt="Job Form" className="w-full h-full object-cover" />
        </div>

        {/* Divider Line */}
        <div className="w-0.5 bg-gray-300"></div>

        {/* Right Side Form */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Job Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="title"
                  type="text"
                  placeholder="Enter job title"
                  label="Job Title"
                  validation={{ required: "Job title is required" }}
                />
                <Input
                  name="type"
                  type="text"
                  placeholder="Enter job type"
                  label="Job Type"
                  validation={{ required: "Job type is required" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="salary"
                  type="number"
                  placeholder="Enter salary"
                  label="Salary"
                  validation={{ 
                    required: "Salary is required",
                    min: { value: 1, message: "Salary must be greater than zero" }
                  }}
                />
                <Input
                  name="noOfVacancies"
                  type="number"
                  placeholder="Enter number of vacancies"
                  label="Number of Vacancies"
                  validation={{ 
                    required: "Number of vacancies is required",
                    min: { value: 1, message: "There must be at least one vacancy" }
                  }}
                />
              </div>
              <div className='flex'>
                <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-2"
                >
                    Post Job
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/home')}
                    className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-2 ms-3"
                >
                    Back to Home
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default JobForm;
