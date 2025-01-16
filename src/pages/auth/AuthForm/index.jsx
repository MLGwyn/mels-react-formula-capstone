import { useState } from "react";
import Field from "./field";

const AuthForm = ({ fields, submitButtonLabel, onSubmit }) => {
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true)
        await onSubmit(values);
        setLoading(false)
      }}
      className="font-lato bg-white border border-slate-200 rounded-lg p-4 m-4"
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          value={values[field.label]}
          type={field.type}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="bg-violet-300 relative text-violet-900 w-full mt-4 py-2 rounded-md">
        {submitButtonLabel}
        {loading && (
          <div className="flex absolute top-0 right-4 items-center h-full">
            <i className="fa-duotone fa-thin fa-spinner text-2xl text-emerald-800 animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
