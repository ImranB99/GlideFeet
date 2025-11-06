import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((res) => {
        // Signed up
        const user = res.user;
        updateUser({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="flex mx-auto bg-base-300 flex-col max-w-md p-6 rounded-md shadow-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm ">Register to create your account</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-12">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                placeholder="Leroy Jenkins"
                className="w-full px-3 py-2 border rounded-md "
              />
            </div>
            {/* Photo Url */}
            <div>
              <label htmlFor="photoURL" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                name="photoURL"
                type="url"
                id="photoURL"
                placeholder="https://xxx"
                className="w-full px-3 py-2 border rounded-md "
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md "
              />
            </div>
            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-base-100 btn h-full"
              >
                Submit
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account?
              <Link
                to="login"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-blue-600 font-semibold ml-1"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
