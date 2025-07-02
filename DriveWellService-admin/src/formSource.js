export const userInputs = [
  {
    id: "username",
    label: "Username",
    errorMessage: "Username is Required",
    required: true,
    type: "text",
    placeholder: "user_name",
  },
  {
    id: "email",
    label: "Email",
    errorMessage: "Email is Required",
    required: true,
    type: "email",
    placeholder: "example@gmail.com",
  },
  {
    id: "password",
    label: "Password",
    errorMessage: "Password is Required",
    required: true,
    type: "password",
  },
  {
    id: "confirmpassword",
    label: "Confirm Password",
    errorMessage: "Confirm Password is Required",
    required: true,
    type: "password",
  },
];

export const companyInputs = [
  {
    id: "name",
    label: "Name",
    errorMessage: "Name is Required",
    type: "text",
    placeholder: "Enter Company Name",
    required: true,
  },
  {
    id: "description",
    errorMessage: "Description is Required",
    label: "Description",
    type: "text",
    placeholder: "Describe Company",
    required: false,
  },
];
