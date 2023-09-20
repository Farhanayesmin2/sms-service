
import { useForm } from 'react-hook-form';

import Balance from '../Dashboard/Balance/Balance';

const SentSms = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  const smsContent = watch('smsContent', '');
  const maxLength = 160;
  const charactersLeft = maxLength - smsContent.length;




  return (
   
   
      <div className="max-w-screen-2xl mx-auto">

        {/* For tablets and larger screens */}
        <div className="grid grid-cols-2 gap-4 hidden md:grid">
          
          {/* Left Column: Form */}
          <div className=" rounded shadow pt-4">
          <h1  className="text-md px-5 "  > Send SMS</h1>
        <hr></hr>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-lg w-full max-w-screen-2xl mx-auto mt-1 space-y-4">
      <div className="flex flex-col">
       
        <label className="font-semibold text-gray-700">Sender ID:</label>
        <input type="text" {...register('senderId', { required: true })} className="p-2 border rounded" />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Group Recipients:</label>
        <select {...register('groupRecipient')} className="p-2 border rounded">
          <option value="MNSM">MNSM</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Enter Phone Numbers:</label>
        <textarea {...register('phoneNumbers')} className="p-2 border rounded" placeholder="Separate numbers by newline"></textarea>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">SMS Templates:</label>
        <select {...register('smsTemplate')} className="p-2 border rounded">
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Enter SMS Content:</label>
        <textarea 
          {...register('smsContent', { maxLength: maxLength })} 
          className="p-2 border rounded h-24"
          placeholder="Enter your message"
        ></textarea>
        <p className="text-sm text-gray-500">
          {smsContent.length} characters | {charactersLeft} characters left
        </p>
        {errors.smsContent && <span className="text-red-500 text-sm">Maximum characters exceeded!</span>}
      </div>

      <div className="flex items-center space-x-4">
        <label className="font-semibold text-gray-700">Schedule SMS:</label>
        <div className="flex items-center space-x-2">
          <input type="radio" {...register('schedule')} value="sendNow" defaultChecked className="mr-1" /> 
          <span>Send Now</span>
        </div>
        <div className="flex items-center space-x-2">                          
          <input type="radio" {...register('schedule')} value="sendLater" className="mr-1" />
          <span>Send Later</span>
        </div>
      </div>

      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Send</button>
    </form>
            {/* Your form contents go here */}
          </div>

          {/* Right Column: Balance & Alerts */}
          <div>
       
              <Balance></Balance>
           
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="text-xl font-bold mb-4">Alert 1</h2>
              {/* Your alert contents go here */}
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Alert 2</h2>
              {/* Your alert contents go here */}
            </div>
          </div>

        </div>

        {/* For mobile screens */}
        <div className="md:hidden">
          
          {/* Form */}
          <div className="bg-white p-4 rounded shadow mb-4">
         
            <h1  className="text-md px-5 "  > Send SMS</h1>
        <hr></hr>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-lg w-full max-w-screen-2xl mx-auto mt-1 space-y-4">
      <div className="flex flex-col">
       
        <label className="font-semibold text-gray-700">Sender ID:</label>
        <input type="text" {...register('senderId', { required: true })} className="p-2 border rounded" />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Group Recipients:</label>
        <select {...register('groupRecipient')} className="p-2 border rounded">
          <option value="MNSM">MNSM</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Enter Phone Numbers:</label>
        <textarea {...register('phoneNumbers')} className="p-2 border rounded" placeholder="Separate numbers by newline"></textarea>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">SMS Templates:</label>
        <select {...register('smsTemplate')} className="p-2 border rounded">
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Enter SMS Content:</label>
        <textarea 
          {...register('smsContent', { maxLength: maxLength })} 
          className="p-2 border rounded h-24"
          placeholder="Enter your message"
        ></textarea>
        <p className="text-sm text-gray-500">
          {smsContent.length} characters | {charactersLeft} characters left
        </p>
        {errors.smsContent && <span className="text-red-500 text-sm">Maximum characters exceeded!</span>}
      </div>

      <div className="flex items-center space-x-4">
        <label className="font-semibold text-gray-700">Schedule SMS:</label>
        <div className="flex items-center space-x-2">
          <input type="radio" {...register('schedule')} value="sendNow" defaultChecked className="mr-1" /> 
          <span>Send Now</span>
        </div>
        <div className="flex items-center space-x-2">                          
          <input type="radio" {...register('schedule')} value="sendLater" className="mr-1" />
          <span>Send Later</span>
        </div>
      </div>

      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Send</button>
    </form>
            {/* Your form contents go here */}
         
          </div>

          {/* Balance Card */}
          <div className="bg-white p-4 rounded shadow mb-4">
           <Balance></Balance>
          
          </div>

          {/* Alerts */}
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-4">Alert 1</h2>
            {/* Your alert contents go here */}
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Alert 2</h2>
            {/* Your alert contents go here */}
          </div>
          
        </div>

      
      
    </div>
  );
}

export default SentSms;
