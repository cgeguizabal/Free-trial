import { Button } from "./Button";
import { Form } from "./Form";

export function ContentRight() {
  return (
    <div className="contentRight__container">
      <Button kind="submit" style="contentRight__button">
        <span className="contentRight__button-span">Try it free 7 days</span>{" "}
        then $20/mo. thereafter
      </Button>
      <Form />
    </div>
  );
}
