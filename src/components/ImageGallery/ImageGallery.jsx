import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ pictures, onPictureClick }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(pictures) &&
        pictures.map((picture) => {
          return (
            <li key={picture.id} className={css.item}>
              <ImageCard
                src={picture.urls.small}
                alt={picture.alt_description}
                id={picture.id}
                onPictureClick={() => {
                  onPictureClick(picture.urls.regular, picture.alt_description);
                }}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
