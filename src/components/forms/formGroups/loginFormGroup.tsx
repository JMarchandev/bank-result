import { Col, Row } from "react-bootstrap";

import { CustomButton as Button } from "../../common/button";
import { CustomCard as Card } from "../../common/card";
import CheckRadioField from "../../fieds/radioInput";
import SaveButton from "../../fieds/saveButton";
import TextField from "../../fieds/textInput";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    email: string;
    password: string;
    remember: boolean;
  };
  isSubmitting: boolean;
  onClickChangeAuthForm: () => void;
};

export const LoginFormGroup = ({ onChange, values, isSubmitting, onClickChangeAuthForm }: Props) => {
  return (
    <Card className="w-75 m-auto">
      <TextField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={onChange}
        value={values.email}
        className="mb-3"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={onChange}
        value={values.password}
        className="mb-3"
        required
      />
      <Row className="mb-2">
        <Col>
          <CheckRadioField
            label="Remember me"
            name="remember"
            value={values.remember}
            onChange={onChange}
          />
        </Col>
        <Col>
          <Button size="sm" variant="link" type="button" className="p-0 mb-2" onClick={onClickChangeAuthForm}>
            Don't have an account?
          </Button>
        </Col>
      </Row>
      <SaveButton isLoading={isSubmitting} content="Continue" />
    </Card>
  );
};
export default LoginFormGroup;
