import css from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  handleClick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <button className={css.btn} onClick={handleClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
