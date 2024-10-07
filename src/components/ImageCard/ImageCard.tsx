import css from "./ImageCard.module.css";
import { MouseEvent } from "react";
interface ImageCardProps {
  src: string;
  alt: string;
  id: string;
  onPictureClick: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onPictureClick }) => {
  return (
    <div className={css.thumb}>
      <img className={css.img} src={src} alt={alt} onClick={onPictureClick} />
    </div>
  );
};

export default ImageCard;
