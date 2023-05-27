import { Input, Ripple, initTE } from "tw-elements";

initTE({ Input, Ripple });

const SignUp = () => {
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
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="fullname"
                                        placeholder="Full Name"
                                    />

                                    <input
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="email"
                                        placeholder="Email"
                                    />

                                    <input
                                        type="password"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    

                                    <button
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
