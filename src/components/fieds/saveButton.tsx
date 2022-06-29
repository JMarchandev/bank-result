import { CustomButton as Button } from "../common/button";
import { CustomSpinner as Spinner } from "../common/spinner";

type Props = {
  content: JSX.Element | string;
  isLoading: boolean;
  onClick?: () => void;
  buttonVariant?: "primary";
  fullWidth?: boolean;
};

export const SaveButton = ({
  content,
  isLoading,
  onClick,
  buttonVariant = "primary",
  fullWidth
}: Props) => {
  return (
    <Button fullWidth={fullWidth} onClick={onClick} variant={buttonVariant}>
      <>
        {content} {isLoading && <Spinner  />}
      </>
    </Button>
  );
};  
export default SaveButton;
