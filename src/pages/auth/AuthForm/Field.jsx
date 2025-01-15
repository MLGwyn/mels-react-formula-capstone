const Field = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="w-64 px-2 py-1 border rounded-lg bg-slate-50 focus:outline-violet-900"
      />
    
    </div> 
  );
};

export default Field;
