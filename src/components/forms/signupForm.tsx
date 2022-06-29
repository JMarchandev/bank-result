import * as Yup from "yup";

import { Formik } from "formik";
import SignUpFormGroup from "./formGroups/signUpFormGroup";

type Props = {
  onClickChangeAuthForm: () => void;
};

export const SignupForm = ({ onClickChangeAuthForm }: Props) => {
  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    website: Yup.string().url("Invalid URL"),
  });
  
  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={signupValidationSchema}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        cgu: false,
        optin: false,
        sexe: "",
        website: "",
        biography: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        sleep(1000).then(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <SignUpFormGroup
            errors={errors}
            onClickChangeAuthForm={onClickChangeAuthForm}
            onChange={handleChange}
            values={values}
            isSubmitting={isSubmitting}
          />
        </form>
      )}
    </Formik>
  );
};
export default SignupForm;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
