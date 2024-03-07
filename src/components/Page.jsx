import React, { useState } from 'react';

export const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showSubmittedMessage, setShowSubmittedMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    switch (name) {
        case 'name':
            errorMessage = value.trim().length < 5 ? 'Name must be at least 2 characters long' : '';
            break;
        case 'email':
            errorMessage = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address';
            break;
        case 'countryCode':
            errorMessage = value.trim().length < 1 ? 'Country code is required' : '';
            break;
        case 'phone':
            errorMessage = value.trim().length < 10 ? 'Phone number must be at least 10 characters long' : '';
            break;
        case 'message':
            errorMessage = value.trim().length < 10 ? 'Message must be at least 10 characters long' : '';
            break;
        default:
            break;
    }

    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));

    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage
    }));
};


const handleSubmit = (e) => {
  e.preventDefault();

  // Validation
  let formIsValid = true;
  const newErrors = { ...errors };

  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
    formIsValid = false;
  }

  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
    formIsValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    newErrors.email = 'Email is invalid';
    formIsValid = false;
  }

  if (!formData.phone.trim()) {
    newErrors.phone = 'Phone is required';
    formIsValid = false;
  }

  if (!formData.message.trim()) {
    newErrors.message = 'Message is required';
    formIsValid = false;
  }

  if (!formIsValid) {
    setErrors(newErrors);
    return;
  }

  // Perform submission
  updataGoogleSHeet();

  // Show submission message
  setShowSubmittedMessage(true);

  // Reset form data
  setFormData({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
};

const updataGoogleSHeet = () => {
  fetch('https://sheetdb.io/api/v1/5i4vhr6ytm8p7', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'Name': formData.name,
                'Email': formData.email,
                'Phone': formData.phone,
                'Message': formData.message,

            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
}

  return (
    <section className="bg-black font-hmm">
      <div className="px-8 py-8 sm:px-6">
        <div className="lg:flex justify-between xl:grid grid-cols-2 gap-6 ">
          <div className="m-6 ">
              <a href="#" className="text-3xl font-bold border border-white text-white px-3 py-1 mb-10 bg-purple-600 rounded-xl xl:text-4xl  xl:mb-8">
                Get in touch
              </a> 
              <span className='text-white text-xl py-4 mt-6 xl:text-3xl'> with us to discover the amazing world of possiblities </span>
              {/* <p className='text-white text-xl mt-4 xl:text-3xl'>discover the amazing world of possiblities</p> */}
              <address className="mt-4 not-italic text-gray-300 text-small">
              Lorem ipsum dolor sit am a velit ut mauris condimentum porta. Sed auctor, justo sed fermentum euismod
              </address>
              
                    <div className="flex items-center mt-6">
              <div className="w-11 h-11 bg-gray-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l8 5-8 5-8-5 8-5zm0 10.01V5.99"
                  />
                </svg>
              </div>
                  <p className="ml-4 text-sm text-white">assessli@gmail.com</p>
                       </div>
                      <div className="flex items-center mt-4">
                              <div className="w-11 h-11 bg-gray-400 rounded-full flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l8 5-8 5-8-5 8-5zm-1 5v4m0 0v4m0-4h2m-2 4h2m-6-9a7.5 7.5 0 0115 0v5a7.5 7.5 0 01-15 0v-5z"
      />
    </svg>
                    </div>
  <                     p className="ml-4 text-sm text-white">+1 234 567 890</p>
                      </div>

              <div className='relative z-10'>
              <img className='w-50 '
              src="/Skateboarding-cuate.svg" alt="Contact Us" />
              </div>
          </div>

          <div className=" bg-white shadow-lg lg:p-8  w-full mr-6 border-r-4 rounded-lg">
            {showSubmittedMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been submitted.</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg onClick={() => setShowSubmittedMessage(false)} className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 1 1-1.697 1.697l-3.651-3.651-3.651 3.651a1.2 1.2 0 1 1-1.697-1.697l3.651-3.651-3.651-3.651a1.2 1.2 0 1 1 1.697-1.697l3.651 3.651 3.651-3.651a1.2 1.2 0 1 1 1.697 1.697l-3.651 3.651 3.651 3.651z"/>
                  </svg>
                </span>
              </div>
            )}
            <form  className="m-2 p-4" onSubmit={handleSubmit}>
              <div className='flex flex-col'>
              <div>
                <h2 className='py-2 font-bold'>Name</h2>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded border-gray-400 placeholder-px-2 text-sm text-black placeholder-gray-500 placeholder-opacity-50 "
                  placeholder="Enter your full name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="text-red-500">{errors.name}</span>}
              </div>

              <div className="">
                <div>
                <h2 className='py-2 font-bold'>Email address</h2>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                     className="w-full rounded border-gray-400 placeholder-px-2 text-sm text-black placeholder-gray-500 placeholder-opacity-50 "
                    placeholder="Enter your email address here"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
              </div>

              <div>
                <h2 className='py-2 font-bold'>Phone Number</h2>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                     className="w-full rounded border-gray-400 placeholder-px-2 text-sm text-black placeholder-gray-500 placeholder-opacity-50 "
                    placeholder="Enter your phone number here"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                </div>

              <div>
              <h2 className='py-2 font-bold'>Enter your message</h2>
                <label className="sr-only font-bold" htmlFor="message">
                  Message
                </label>
                <textarea
                   className="w-full rounded border-gray-400 placeholder-px-2 text-sm text-black placeholder-gray-500 placeholder-opacity-50 "
                  placeholder="Enter your message here"
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <span className="text-red-500">{errors.message}</span>}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg  px-5 py-3 font-medium text-black sm:w-auto bg-gray"
                  onClick={()=>updataGoogleSHeet()}
                >
                  Send Enquiry
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
