import { useState } from "react";
import { useRef } from "react";
import { Input, Ripple, initTE } from "tw-elements";
import { toast } from "react-toastify";
import axios from "axios";

initTE({ Input, Ripple });

const SignUp = () => {
    const [show, setShow] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);

    const showHandler = () => {
        setShow(!show);
    };

    const registrationHandler = async (e) => {
        e.preventDefault()
        setLoading(true);
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const data = { name, email, password };

        console.log(data);
        try {
            const res = await axios.post(
                "https://register-task-server-production.up.railway.app/api/v1/users",
                data
            );
            console.log(res);
            setLoading(false);
            if (res.data.error) {
                toast.error(res.data.error);
                return;
            }
            toast.success(res.data.message);
            toast.success("Sign up is successful");
            nameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
        } catch (err) {
            // console.log(err.data.keyPattern);
            toast.error(err.message);
        }
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
                                <form
                                    className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
                                    onSubmit={registrationHandler}
                                >
                                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                    <input
                                        ref={nameRef}
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="fullName"
                                        placeholder="Full Name"
                                        required
                                    />

                                    <input
                                        ref={emailRef}
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <div className="relative">
                                        <input
                                            ref={passwordRef}
                                            type={!show ? "password" : "text"}
                                            className="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="password"
                                            placeholder="Password"
                                            required
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
                                        type="submit"
                                        className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
                                    >
                                        {!loading ? (
                                            "Create Account"
                                        ) : (
                                            <span>
                                            <div className="w-6 h-6 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                                            </span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
