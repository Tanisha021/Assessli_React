This is the React for Assessli by Tanisha Agrawal
Getting Stared
This project is mage using React.js framework and hyper UI library
Project Setup Instructions- 
How to run the project locally.- 
- git clone https://github.com/Tanisha021/Assessli_React.git    
- `cd` to project folder 
- npm start 
- go to `http://localhost:3000`         

Details on the Google Sheets integration using SheetDB:
 1) Created a new API in dashboard:
  - Go to the `SheetDB` dashboard.
  - Click on the "Create API" button.
  - Select the Google Sheets file you want to connect to.
  - Choose the `method` (GET, POST, PUT, DELETE) and the endpoint path.
  - Click on the `"Create API"` button to generate the API endpoint.

2)Integrated the API endpoint in the project:
- Replace the endpoint in your project `(updataGoogleSHeet function)` with the SheetDB API endpoint.
- Use the appropriate method `(POST in this case)` to send data to the Google Sheets file.
  
3)Configured Google Sheets:
  - Share your Google Sheets with the email address associated with your `SheetDB API key`.
  - Make sure the Sheets have columns named Name, Email, Phone, and Message to match your form data.

4)Submitted Data to Google Sheets:
  -the data is sent to the `SheetDB API endpoint`,updates the connected Google Sheets file.

Additional Features or Customizations
- added `Form Validation`to ensure all required fields are filled out correctly before submission.
- `Submission Feedback` added a message for successful form submission
- Used `Tailwind CSS` for styling 
- Provided `error messages` for each form field.
- `Responsive Design` on different devices and screen sizes.
