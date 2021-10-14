import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./LoaderSpinner.module.css";

const LoaderSpinner = () => (
  <div className={s.LoaderSpinner}>
    <Loader width={200} height={200} color="blue" type="Rings" />
  </div>
);

export default LoaderSpinner;
