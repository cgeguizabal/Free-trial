import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  return (
    <>
      <div className="app__container">
        <ContentLeft />
        <ContentRight />
      </div>
      <Footer />
    </>
  );
}

function ContentLeft() {
  return (
    <>
      <div className="contentLeft__container">
        <h1 className="contentLeft__title">Learn to code by watching others</h1>
        <p className="contentLeft__paragraph">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
    </>
  );
}

function ContentRight() {
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

function Form() {
  const [submission, setSubmission] = useState(null);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      alert("Congratulations you have started your freeTrial");
      setSubmission(true);
    } catch (error) {
      console.error("Submission failed", error);
      setSubmission(false);
    }
  };

  return (
    <div className="form__wrapper">
      <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div
            className={
              errors.firstname || submission === false
                ? "form__input-error"
                : "form__inputContainer"
            }
          >
            <input
              type="text"
              placeholder="Name"
              className="form__input"
              {...register("firstname", {
                required: "First Name cannot be empty",
              })}
            />
            {errors.firstname && (
              <img
                src="icon-error.svg"
                alt="Error icon"
                className="error-icon"
              />
            )}
          </div>
          {errors.firstname && (
            <p className="error">{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <div
            className={
              errors.lastname || submission === false
                ? "form__input-error"
                : "form__inputContainer"
            }
          >
            <input
              type="text"
              placeholder="Last Name"
              className="form__input"
              {...register("lastname", {
                required: "Last Name cannot be empty",
              })}
            />
            {errors.lastname && (
              <img
                src="icon-error.svg"
                alt="Error icon"
                className="error-icon"
              />
            )}
          </div>
          {errors.lastname && (
            <p className="error">{errors.lastname.message}</p>
          )}
        </div>
        <div>
          <div
            className={
              errors.email || submission === false
                ? "form__input-error"
                : "form__inputContainer"
            }
          >
            <input
              type="text"
              placeholder={
                errors.email || submission === false
                  ? "email@example.com"
                  : "Email Address"
              }
              className={`form__input ${
                errors.email || submission === false ? "error-placeholder" : ""
              }`}
              {...register("email", {
                required: "Looks like this is not an email",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                  message: "Looks like this is not an email",
                },
              })}
            />
            {errors.lastname && (
              <img
                src="icon-error.svg"
                alt="Error icon"
                className="error-icon"
              />
            )}
          </div>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <div
            className={
              errors.password || submission === false
                ? "form__input-error"
                : "form__inputContainer"
            }
          >
            <input
              type="text"
              placeholder="Password"
              className="form__input"
              {...register("password", {
                required: "Password cannot be Empty",
              })}
            />
            {errors.lastname && (
              <img
                src="icon-error.svg"
                alt="Error icon"
                className="error-icon"
              />
            )}
          </div>
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <Button kind="submit" style="form__button">
          Claim your free trial{" "}
        </Button>
        <p className="form__text">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}

function Button({ children, style, kind }) {
  return (
    <div>
      <button type={kind} className={style}>
        {children}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/cgeguizabal">
          Guillermo Eguizabal
        </a>
        .
      </p>
    </footer>
  );
}

export default App;
