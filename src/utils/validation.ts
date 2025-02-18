import * as Yup from "yup";

export const attendeeSchema = Yup.object().shape({
  fullName: Yup.string().required("This field is required"),
  expectations: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one expectation"),
  phoneNum: Yup.number()
    .positive()
    .integer()
    .required("This field is required"),
  // edition: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  stateOfResidence: Yup.string().required("This field is required"),
  organization: Yup.string().required("This field is required"),
  jobTitle: Yup.string().required("This field is required"),
  // experienceOfPastSeminar: Yup.string(),
  attendanceRole: Yup.string().required("This field is required"),
  attendingAs: Yup.string().required("This field is required"),
  howDidYouHear: Yup.string().required("This field is required"),
  // sharedTopics: Yup.string(),
  support: Yup.string().required("This field is required"),
  agreement: Yup.string().required("This field is required"),
});

export const vendorSchema = Yup.object().shape({
  vendorCompanyName: Yup.string().required("This field is required"),
  businessCategory: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one expectation"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  contactPersonName: Yup.string().required("This field is required"),
  attendanceRole: Yup.string().required("This field is required"),
  servicesDescription: Yup.string().required("This field is required"),
  edition: Yup.string().required("This field is required"),
  agreement: Yup.string()
    .oneOf(["agreed"], "You must agree to the terms")
    .required("You must agree to the terms"),
});
export const userSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  role: Yup.string().required("This field is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});
export const partnerSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  partnerLevel: Yup.string().required("This field is required"),
  contactPerson: Yup.string().required("This field is required"),
  phoneNum: Yup.string().required("This field is required"),
  businessNature: Yup.string().required("This field is required"),
  companyName: Yup.string().required("This field is required"),
});
