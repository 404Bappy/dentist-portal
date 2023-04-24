import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import login from "../../assets/images/login.png";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:9000/doctor-users");
      if (res.data?.length > 0) {
        setDoctors(res?.data);
      }
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = (data) => {
    if (userType == "Doctor") {
      handleDoctorLogin(data);
      return;
    }
    console.log("ssss");
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleDoctorLogin = (data) => {
    const resu = doctors?.filter((items) => {
      return items.email === data.email && items?.password === data.password;
    });
    console.log("resu", resu);
    if (resu && resu.length > 0) {
      localStorage.setItem("doctormail", resu[0].email);
      //   setLoginUserEmail(resu ? resu[0].email : "");
      // There is at least one doctor with a matching email and password
      setTimeout(() => {
        navigate("/doctor-dashboard");
      }, 2000);
    } else {
      // There are no doctors with a matching email and password.
      toast.error("Your Email or Password not Matched");
      return;
    }

    console.log("doctor Data", data);
  };

  console.log("usertype", userType);

  return (
    <div style={{ display: "flex", gap: "30px", marginBottom: "50px" }}>
      <div className="mt-40 ml-80">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center font-bold text-success">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">User Type</span>
              </label>
              <select
                class="select select-bordered"
                onChange={(e) => setUserType(e.target.value)}
              >
                <option disabled selected>
                  Select..
                </option>
                <option>Patient</option>
                <option>Doctor</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {" "}
                <span className="label-text">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <input
              className="btn btn-accent w-full text-white"
              value="Login"
              type="submit"
            />

            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <p>
            New to Doctors Portal{" "}
            <Link className="text-secondary" to="/signup">
              Create new Account
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-20">
        <img height={500} width={500} src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;
