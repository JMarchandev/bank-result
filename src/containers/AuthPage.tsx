import { Container } from "react-bootstrap";
import Layout from "../layout";
import LoginForm from "../components/forms/loginForm";
import SignupForm from "../components/forms/signupForm";
import { useState } from "react";

export const AuthPage = () => {
  const [form, setForm] = useState<"login" | "signup">("login");

  return (
    <Layout>
      <Container>
        <h1 className="mt-5 text-center">
          {form === "login" && "Login"}
          {form === "signup" && "Sign up"}
        </h1>
        <p className="text-center pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis
          esse asperiores, tempora neque sunt fugiat repellendus cum natus sit
          quas labore.
        </p>
        {form === "login" && (
          <LoginForm onClickChangeAuthForm={() => setForm("signup")} />
        )}
        {form === "signup" && (
          <SignupForm onClickChangeAuthForm={() => setForm("login")} />
        )}
      </Container>
    </Layout>
  );
};
export default AuthPage;
