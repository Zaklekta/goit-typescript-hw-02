import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <RotatingLines
        visible={true}
        width="200"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
