import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={css.err}>
        Ooops.. Some error has occured. Please, try again!
      </p>
    </>
  );
};

export default ErrorMessage;
