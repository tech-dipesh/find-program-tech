import Logo from "../assets/logo.png";
import Footer from "../Layout/footer";
import MainNavbar from "../Layout/mainNavbar";
import { useForm } from "react-hook-form";
import FormError from "../Miscellaneous/Error";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
  let navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  // } = useForm({ mode: "onChange" });
  }=useForm()

  const onSubmit = async (newUser) => {
    console.log("succesfully Sign Up.");
    try {
      let signupData=await axios.post(("http://localhost:5000/signup"), newUser, {
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      navigate("/");
    } catch (error) {
      console.error("Eror on the signup onSubmit function and the error is:", error)
    }
  }

  return (
    <>
      <MainNavbar />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
            Developer Listing
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Create a New Account
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("yourName", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z ]+$/,
                        message: "Name should contain only letters and spaces",
                      },
                    })}
                  />
                  {errors.yourName && (
                    <span className="mt-2 text-sm text-red-500">
                      {errors.yourName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@gmail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("Email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.Email && (
                    <span className="mt-2 text-sm text-red-500">
                      {errors.Email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("Password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                        message: "Password must contain a number, lowercase and uppercase letter",
                      },
                    })}
                  />
                  {errors.Password && (
                    <span className="mt-2 text-sm text-red-500">
                      {errors.Password.message}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    UserName
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Unique UserName!"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("userName", {
                      required: {
                        value: true,
                        message: "Username is required",
                      },
                      pattern:{
                        value: /^[a-z0-9_-]+$/,
                        message: "Only lowercase letters, numbers, hyphens (-), and underscores (_) are allowed"
                      },
                      
                      minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.userName && (
                    <span className="mt-2 text-sm text-red-500">
                      {errors.userName.message}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                        {...register("remember")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link to="/signup" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={ isSubmitting}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
              </form>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 m-2">
                  Login
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