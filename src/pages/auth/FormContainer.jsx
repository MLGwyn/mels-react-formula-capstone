const FormContainer = ({ children }) => {
  return (
    <div className="flex">
      <div className="relative">
        <img
          className="h-screen object-cover"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10">
        </div>
          <div className="bg-emerald-300/20 absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="flex items-center justify-center h-screen bg-violet-200 flex-1">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            className="w-20 mb-2"
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
          />
          <div className="mb-2 text-emerald-800 text-4xl font-playfair">
            Rica&#39;s Plants
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
