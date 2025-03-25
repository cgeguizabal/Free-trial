import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";

export function Form() {
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
        {/* Name Input */}
        <div>
          <div
            className={`form__inputContainer ${
              errors.firstname || submission === false
                ? "form__inputContainer--error"
                : ""
            }`}
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
              <img src="icon-error.svg" alt="Error" className="error-icon" />
            )}
          </div>
          {errors.firstname && (
            <p className="error">{errors.firstname.message}</p>
          )}
        </div>

        {/* Last Name Input */}
        <div>
          <div
            className={`form__inputContainer ${
              errors.lastname || submission === false
                ? "form__inputContainer--error"
                : ""
            }`}
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
              <img src="icon-error.svg" alt="Error" className="error-icon" />
            )}
          </div>
          {errors.lastname && (
            <p className="error">{errors.lastname.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <div
            className={`form__inputContainer ${
              errors.email || submission === false
                ? "form__inputContainer--error"
                : ""
            }`}
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
            {errors.email && (
              <img src="icon-error.svg" alt="Error" className="error-icon" />
            )}
          </div>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <div
            className={`form__inputContainer ${
              errors.password || submission === false
                ? "form__inputContainer--error"
                : ""
            }`}
          >
            <input
              type="password" // Changed to password type
              placeholder="Password"
              className="form__input"
              {...register("password", {
                required: "Password cannot be empty",
              })}
            />
            {errors.password && (
              <img src="icon-error.svg" alt="Error" className="error-icon" />
            )}
          </div>
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <Button kind="submit" style="form__button">
          Claim your free trial
        </Button>
        <p className="form__text">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
