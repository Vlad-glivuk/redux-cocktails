import { FC } from "react";
//styles
import styles from "./Cocktail.module.scss";

type CocktailProps = {
  name: string;
  tags: string | null;
  img: string;
  description: string;
  date: string;
  deleteClickHandler?: () => void;
};

const Cocktail: FC<CocktailProps> = ({
  name,
  tags,
  img,
  description,
  date,
  deleteClickHandler,
}) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={deleteClickHandler}>Delete</button>
      <span>Cocktail name - {name}</span>
      <span className={styles.tags}>
        Cocktail Tags = {tags ? tags : "empty"}
      </span>
      <span>{description}</span>
      <img src={img} alt="" className={styles.image} />
      <span>{date}</span>
    </div>
  );
};

export default Cocktail;
