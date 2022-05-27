import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
//store
import { IStore } from "../../store";
import { deleteCocktail } from "../../store/cocktailsReducer/actions";
//components
import Cocktail from "./Cocktail";
//styles
import styles from "./AllCocktails.module.scss";

const AllCocktails: FC = () => {
  const dispatch = useDispatch();

  const allCocktails = useSelector(
    (store: IStore) => store.cocktails.allCocktails
  );

  return (
    <div className={styles.wrapper}>
      {!!allCocktails.total &&
        allCocktails?.records.map((cocktail, index) => (
          <Cocktail
            key={cocktail.idDrink + index}
            name={cocktail.strDrink}
            tags={cocktail.strTags}
            img={cocktail.strDrinkThumb}
            description={cocktail.strInstructions}
            date={cocktail.dateModified}
            deleteClickHandler={() => dispatch(deleteCocktail(index))}
          />
        ))}
    </div>
  );
};

export default AllCocktails;
