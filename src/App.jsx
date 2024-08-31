import React from 'react';

const App = () => {
  return (
    <div className='h-full bg-[rgb(224,241,231)] flex justify-center items-center'>
      <div className="bg-white px-10 py-20 rounded-lg shadow-md border border-gray-300 w-full max-w-md">
        <form className='space-y-4'>
          <p className='text-2xl font-bold'>Contact Us</p>
          <div className='w-full flex flex-row gap-5'>
            <div className='w-1/2'>
              <label className="block text-gray-700">First Name</label>
              <input 
                className='w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                placeholder='First Name'
              />
            </div>

            <div className='w-1/2'>
              <label className="block text-gray-700">Last Name</label>
              <input 
                className='w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                placeholder='Last Name'
              />
          </div>
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              className='w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder='Email'
            />
          </div>

          <div>
            <label className="block text-gray-700">Query Type</label>
            <div className='mt-2 flex space-x-4'>
              <label className='flex items-center px-4  border border-gray-300 rounded cursor-pointer'>
                <input 
                  className='form-radio h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300'
                  type="radio"
                  name="queryType"
                  value="General Enquiry"
                />
                <span className='ml-2 text-gray-700'>General Enquiry</span>
              </label>
              <label className='flex items-center px-4  border border-gray-300 rounded cursor-pointer'>
                <input 
                  className='form-radio h-10 w-4 text-blue-500 focus:ring-blue-500 border-gray-300'
                  type="radio"
                  name="queryType"
                  value="Support Request"
                />
                <span className='ml-2 text-gray-700 '>Support Request</span>
              </label>
{/* check box */}
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <input 
              className='w-full mt-2 px-2 py-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder=''
            />
          </div>

          <label className='flex items-center px-4 cursor-pointer'>
                <input 
                  className='form-checkbox h-10 w-4 text-blue-500 focus:ring-blue-500 border-gray-300'
                  type="checkbox"
                  name="queryType"
                  value="Support Request"
                />
                <span className='ml-2 text-gray-700'>I consent to being contacted by the team *</span>
              </label>

   <button className="bg-[#0e7b69] text-white font-medium w-full py-2 px-40 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 sm:w-auto">
  Submit
</button>


          {/* Add other form fields as necessary */}
        </form>
      </div>
    </div>
  );
}

export default App;
