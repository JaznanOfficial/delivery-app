import { useState } from "react";
import { useRef } from "react";
import { Input, Ripple, initTE } from "tw-elements";
import { toast } from "react-toastify";

initTE({ Input, Ripple });

const SignUp = () => {
    const [show, setShow] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const showHandler = () => {
        setShow(!show);
    };

    const registrationHandler = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]|:;,<.>/?]).{8,}$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email.please provide a valid email");
            return;
        }

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 symbol"
            );
            return; // Stop registration process if password is invalid
        }
        console.log(emailRegex.test(email));
        const data = { name, email, password };

        console.log(data);
    };

    return (
        <div>
            <section className="h-screen">
                <div className="container h-full px-6 py-24">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="bg-grey-lighter flex flex-col mb-12 md:mb-0 md:w-8/12 lg:w-6/12 justify-center items-start">
                            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                    <input
                                        ref={nameRef}
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="fullname"
                                        placeholder="Full Name"
                                    />

                                    <input
                                        ref={emailRef}
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <div className="relative">
                                        <input
                                            ref={passwordRef}
                                            type={!show ? "password" : "text"}
                                            className="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        {show ? (
                                            <i
                                                className="fa-regular fa-eye absolute top-4 right-3 cursor-pointer"
                                                onClick={showHandler}
                                            ></i>
                                        ) : (
                                            <i
                                                className="fa-regular fa-eye-slash absolute top-4 right-3 cursor-pointer"
                                                onClick={showHandler}
                                            ></i>
                                        )}
                                    </div>

                                    <button
                                        onClick={registrationHandler}
                                        type="submit"
                                        className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
