import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/authentication/authApi";
import { setUser } from "@/redux/features/authentication/authSlice";
import { ArrowLeftSquare } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  console.log(isLoading);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setUser(result.data));
      navigate("/")
    } catch (error) {
      console.log("login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <Link to="/">
          {" "}
          <ArrowLeftSquare />
        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message.toString()}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.password?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message.toString()}
              </p>
            )}
          </div>

          <Button
            disabled={isLoading}
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md"
          >
            {isLoading ? "Singing in.." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
