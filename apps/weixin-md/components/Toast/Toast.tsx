import { ToastContainer, toast as toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastRoot = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export const toast = toastify;
