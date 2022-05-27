import { FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import {
  changeRequestDate,
  fetchCocktail,
} from "../../store/cocktailsReducer/actions";
//store
//styles
import styles from "./Header.module.scss";

const Header: FC = () => {
  const [cocktailNameValue, setCocktailNameValue] =
    useState<string>("margarita");
  const timeRange = useSelector((state: IStore) => state.cocktails.requestDate);
  const timeRangeTitle = `${
    (timeRange?.end?.getMilliseconds() as number) -
    (timeRange?.start?.getMilliseconds() as number)
  }`;

  console.log("timeRange", timeRange);
  const dispatch = useDispatch();

  const onChangeCocktailNameHandler = (e: FormEvent<HTMLSelectElement>) =>
    setCocktailNameValue(e.currentTarget.value);

  const getCocktailByName = () => {
    const currentDate = new Date();
    dispatch(changeRequestDate(currentDate));
    dispatch(fetchCocktail(cocktailNameValue));
  };

  return (
    <div className={styles.wrapper}>
      <span>{timeRangeTitle}</span>
      <select
        value={cocktailNameValue}
        onChange={onChangeCocktailNameHandler}
        className={styles.select}
      >
        <option value="margarita">Margarita</option>
        <option value="negroni">Negroni</option>
        <option value="vodka">Vodka</option>
        <option value="mojito">Mojito</option>
        <option value="daiquiri">Daiquiri</option>
      </select>

      <button onClick={getCocktailByName} className={styles.button}>
        Click here to get cocktail
      </button>
    </div>
  );
};

export default Header;
