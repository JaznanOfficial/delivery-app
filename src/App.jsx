import "./App.css";
import SignUpPage from "./Pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ToastContainer />
            <SignUpPage />
        </>
    );
}

export default App;
