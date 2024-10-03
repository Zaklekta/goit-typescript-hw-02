import css from "./ImageCard.module.css";
const ImageCard = ({ src, alt, onPictureClick }) => {
  return (
    <div className={css.thumb}>
      <img className={css.img} src={src} alt={alt} onClick={onPictureClick} />
    </div>
  );
};

export default ImageCard;
