import { useState } from "react";
import Field from "./field";

const AuthForm = ({ fields, submitButtonLabel }) => {
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form className="font-lato bg-white border border-slate-200 rounded-lg p-4 m-4">
      {fields.map((field) => (
        <Field field={field}
        key={field.label}
        label={field.label}
        value={values[field.label]}
        type={field.type}
        onChange={(e) => {
        setValues({ ...values, [field.label]: e.target.value });
        }} 
        />
      ))}
      <button className="bg-violet-900 text-violet-300 w-full mt-4 py-2 rounded-md">
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
