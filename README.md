Project Setup Instructions- 
How to run the project locally.- 
1)git clone https://github.com/Tanisha021/Assessli_React.git    
2)cd Assessli_React 
3)npm start 
4)http://localhost:3000          

Details on the Google Sheets integration using SheetDB:
 1) Created a new API in dashboard:
  Go to the SheetDB dashboard.
  Click on the "Create API" button.
  Select the Google Sheets file you want to connect to.
  Choose the method (GET, POST, PUT, DELETE) and the endpoint path.
  Click on the "Create API" button to generate the API endpoint.

2)Integrated the API endpoint in the project:
Replace the endpoint in your project (updataGoogleSHeet function) with the SheetDB API endpoint.
Use the appropriate method (POST in this case) to send data to the Google Sheets file.
  
3) Configured Google Sheets:
  Share your Google Sheets with the email address associated with your SheetDB API key.
  Make sure the Sheets have columns named Name, Email, Phone, and Message to match your form data.

4)Submitted Data to Google Sheets:
  When the form is submitted, the data is sent to the SheetDB API endpoint, which then updates the connected Google Sheets file with the submitted data.

Additional Features or Customizations
1)Form Validation: Implemented form validation to ensure all required fields are filled out correctly before submission.
2)Submission Feedback: Added a message to indicate successful form submission without disrupting the user experience.
3)Styling: Used Tailwind CSS for styling to ensure a modern and responsive design.
4)Error Handling: Provided error messages for each form field to guide users in correcting any issues.
5)Responsive Design: Ensured the form and content are displayed correctly on different devices and screen sizes.
