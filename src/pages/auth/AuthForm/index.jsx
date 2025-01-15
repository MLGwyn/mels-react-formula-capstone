

const AuthForm = (props) => {
  const { fields } = props;

  return (
    <form className="bg-white">
      {fields.map((field) => (
        <div key={field.label}>
          <label htmlFor={field.label}>{field.label}</label>
          <input id={field.label} type={field.type} />
        </div>
      ))}
    </form>
  );
};

export default AuthForm;
