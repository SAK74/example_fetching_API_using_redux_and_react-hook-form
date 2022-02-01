import PropTypes from "prop-types";

function WithHtml({ register, errors, reset }) {
  return (
    <>
      <label>
        <span>Name:</span>
        <input
          {...register("name", { required: true })}
          className={errors.name ? "red" : undefined}
        />
        <sup>*</sup>
        {errors.name && <span>Name is required</span>}
      </label>
      <label>
        <span>Last Name:</span>
        <input {...register("lastName")} />
      </label>
      <label>
        <span>E-mail:</span>
        <input
          {...register("mail", {
            required: "E-mail is required",
            pattern: {
              value: /^[^\.]\S{4,30}@\S+\.\S{2,}$/i, //eslint-disable-line
              message: "Wrong format"
            }
          })}
          className={errors.mail ? "red" : undefined}
        />
        <sup>*</sup>
        {errors.mail && <span>{errors.mail.message}</span>}
      </label>
      <div>
        <button type="reset" onClick={() => reset()}>
          Wyczyść
        </button>
        <button type="submit">Wyślij dane</button>
      </div>
    </>
  );
}
WithHtml.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  reset: PropTypes.func.isRequired,
  defaultValues: PropTypes.object.isRequired
};

export default WithHtml;
