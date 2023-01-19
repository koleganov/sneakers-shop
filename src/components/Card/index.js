import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

const Card = ({
  id,
  title,
  imageUrl,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="120" />
          <rect x="0" y="147" rx="5" ry="3" width="155" height="15" />
          <rect x="0" y="167" rx="5" ry="3" width="100" height="15" />
          <rect x="1" y="224" rx="5" ry="8" width="80" height="25" />
          <rect x="124" y="220" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="Unliked-heart"
            />
          </div>
          <img width='100%' height={135} src={imageUrl} alt="sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <span className={styles.price}>{price} руб.</span>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
