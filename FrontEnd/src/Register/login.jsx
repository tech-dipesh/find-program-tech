import Logo from "../assets/logo.png";
import Footer from "../Layout/footer";
import MainNavbar from "../Layout/mainNavbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toastError, toastSuccess } from "../Miscellaneous/react-toast";

export default function Login() {
  let Navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      let response = await axios.post("http://localhost:5000/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }); 
      // console.log("Login is succesfull", response.data);
      Navigate("/");
      setTimeout(() => {
        toastSuccess("Congratulations login is successful")
      }, 50);
    } catch (error) {
      // toastError("🦄 Face errros while login")
      toastError(error)
      console.error("Error on login:", error);
     if(error.response){
      toastError("🦄 Please try again")
      console.log("Server Error:", error.response.data);
     }
    }
  };

 
  return (
    <>
    {/* {setError} */}
   {/* { (error){
      <h2 className="bg-red-500">error.message</h2>
    }} */}
      <MainNavbar />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
            Developer Listing
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                  <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your userName
                  </label>
                  <input
                    type="text"
                    id="userName"
                    placeholder="UserName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    {...register("userName", {
                      required: "userName is required",
                      pattern: {
                        // value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        value: /^[a-z0-9-_]+$/,
                        message: "Only letter, number, hyphen and dash is allowed",
                      },
                    })}
                  />
                  {errors.userName && <span className="mt-2 text-sm text-red-500">{errors.userName.message}</span>}
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && <span className="mt-2 text-sm text-red-500">{errors.password.message}</span>}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                      {...register("remember")}
                    />
                    <label htmlFor="remember" className="ml-3 text-sm text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?
                <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500 m-2">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
