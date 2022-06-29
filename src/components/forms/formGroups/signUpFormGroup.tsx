import { Button, Col, Row } from "react-bootstrap";

import { CustomCard as Card } from "../../common/card";
import CheckRadioField from "../../fieds/radioInput";
import { FormikErrors } from "formik";
import SaveButton from "../../fieds/saveButton";
import TextField from "../../fieds/textInput";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    cgu: boolean;
    optin: boolean;
    sexe: string;
    confirmPassword: string;
    website: string;
    biography: string;
  };
  isSubmitting: boolean;
  onClickChangeAuthForm: () => void;
  errors: FormikErrors<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    cgu: boolean;
    optin: boolean;
    sexe: string;
    website: string;
    biography: string;
  }>;
};

export const SignUpFormGroup = ({
  onChange,
  values,
  isSubmitting,
  onClickChangeAuthForm,
  errors
}: Props) => {
  console.log(values);

  return (
    <Card className="">
      <Row className="w-100">
        <p className="mb-2">Please select an option</p>
        <Col>
          <CheckRadioField
            type="radio"
            label="Woman"
            name="sexe"
            value={"woman"}
            onChange={onChange}
            className="mb-3"
            error={errors.sexe}
          />
        </Col>
        <Col>
          <CheckRadioField
            type="radio"
            label="Man"
            name="sexe"
            value={"man"}
            onChange={onChange}
            className="mb-3"
            error={errors.sexe}
          />
        </Col>
        <Col>
          <CheckRadioField
            type="radio"
            label="Non Binary"
            name="sexe"
            value={"no-binary"}
            onChange={onChange}
            className="mb-3"
            error={errors.sexe}
          />
        </Col>
        <Col>
          <CheckRadioField
            type="radio"
            label="Robot"
            name="sexe"
            value={"robot"}
            onChange={onChange}
            className="mb-3"
            error={errors.sexe}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            onChange={onChange}
            value={values.firstName}
            className="mb-3"
            required
            error={errors.firstName}
          />
        </Col>
        <Col>
          <TextField
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            onChange={onChange}
            value={values.lastName}
            className="mb-3"
            required
            error={errors.lastName}
          />
        </Col>
      </Row>
      <TextField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={onChange}
        value={values.email}
        className="mb-3"
        required
        error={errors.email}
      />
      <Row>
        <Col>
          <TextField
            label="Confirm password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={onChange}
            value={values.password}
            className="mb-3"
            required
            error={errors.password}
          />
        </Col>
        <Col>
          <TextField
            label="Password"
            name="confirmPassword"
            type="password"
            placeholder="Yes... sorry..."
            onChange={onChange}
            value={values.confirmPassword}
            className="mb-3"
            required
            error={errors.confirmPassword}
          />
        </Col>
      </Row>
      <TextField
        label="Biography"
        name="biography"
        type="textarea"
        placeholder="Tell us about yourself !"
        onChange={onChange}
        value={values.biography}
        className="mb-3"
        error={errors.biography}
      />
      <TextField
        label="Website"
        name="website"
        type="text"
        placeholder="https://www.example.com"
        onChange={onChange}
        value={values.website}
        className="mb-3"
        error={errors.website}
      />
      <Row className="mb-2">
        <Col md={7}>
          <CheckRadioField
            label={
              <small className="text-muted p-0">
                I agree with the&nbsp;
                <Button
                  size="sm"
                  variant="link"
                  type="button"
                  className="p-0 pb-1"
                >
                  terms and conditions
                </Button>
                .
              </small>
            }
            name="cgu"
            value={values.cgu}
            onChange={onChange}
            error={errors.cgu}
          />
          <CheckRadioField
            label={
              <small className="text-muted p-0">
                I accept evil corp to send me newsletters.
              </small>
            }
            name="optin"
            value={values.cgu}
            onChange={onChange}
          />
        </Col>
        <Col md={4}>
          <Button
            size="sm"
            variant="link"
            type="button"
            className="p-0 mb-2"
            onClick={onClickChangeAuthForm}
          >
            Already have an account?
          </Button>
        </Col>
      </Row>
      <SaveButton fullWidth isLoading={isSubmitting} content="Sign In" />
    </Card>
  );
};
export default SignUpFormGroup;
