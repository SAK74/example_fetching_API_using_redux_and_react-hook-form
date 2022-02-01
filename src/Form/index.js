import { useState } from "react";
import { useForm } from "react-hook-form";
import WithHtml from "./withHTML";
import WithMui from "./mui";
import sendForm from "../features/sendForm";
import "./styles.css";
import { connect } from "react-redux";
import { addMessage } from "../ui/Messages/reducer";

const defaultValues = {
  name: "",
  lastName: "",
  mail: ""
};

function CustomForm({ addMessage }) {
  const [component, setComponent] = useState("HTML");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    control
  } = useForm({
    defaultValues
  });
  const onSubmit = async (data) => {
    console.log(data);
    addMessage("Sending Form...", "info");
    await sendForm(data)
      .then((json) => {
        console.log(json);
        addMessage("Form is sended", "success");
        reset();
      })
      .catch((err) => {
        console.log(err);
        addMessage("Form sending error...", "error");
      });
  };

  return (
    <div className="form-main">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {component === "HTML" && (
          <WithHtml {...{ register, errors, reset, defaultValues }} />
        )}
        {component === "MUI" && (
          <WithMui
            {...{
              control,
              reset,
              defaultValues,
              submit: handleSubmit(onSubmit)
            }}
          />
        )}
      </form>
      <hr />
      <h2
        onClick={() =>
          setComponent((prev) => (prev === "HTML" ? "MUI" : "HTML"))
        }
      >
        WITH {component === "HTML" ? "MUI" : "HTML"}
      </h2>
    </div>
  );
}

export default connect(null, { addMessage })(CustomForm);
