import * as Yup from "yup";

import { Formik } from "formik";
import LoginFormGroup from "./formGroups/loginFormGroup";

type Props = {
  onClickChangeAuthForm: () => void;
};

export const LoginForm = ({ onClickChangeAuthForm }: Props) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ email: "", password: "", remember: false }}
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
          <LoginFormGroup
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
export default LoginForm;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
