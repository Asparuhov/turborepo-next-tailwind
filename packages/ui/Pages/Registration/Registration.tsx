interface RegistrationFormProps {
  mainColor?: string;
  secondaryColor?: string;
  popup: boolean;
  closePopup?: any;
  router: any;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
  const handleSubmit = (event: any) => {
    if (
      event.target.elements.email.value &&
      event.target.elements.password.value
    ) {
      props.router.push("/");
    }
    event.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-6 relative">
      <form
        className={`relative ${props.mainColor} shadow-md rounded px-8 pt-6 pb-8 mb-4`}
        onSubmit={handleSubmit}
      >
        {props.popup ? (
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            type="button"
            onClick={props.closePopup}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M19.06,17.37l-5.5-5.5l5.5-5.5c0.39-0.39,0.39-1.02,0-1.41l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-5.5,5.5l-5.5-5.5c-0.39-0.39-1.02-0.39-1.41,0l-1.41,1.41c-0.39,0.39-0.39,1.02,0,1.41l5.5,5.5l-5.5,5.5c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l5.5-5.5l5.5,5.5c0.39,0.39,1.02,0.39,1.41,0l1.41-1.41C19.45,18.39,19.45,17.76,19.06,17.37z" />
            </svg>
          </button>
        ) : null}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`${props.secondaryColor} hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
