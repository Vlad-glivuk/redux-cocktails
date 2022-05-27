import { FC } from "react";
import { useSelector } from "react-redux";
//store
import { IStore } from "./store";
//components
import AllCocktails from "./components/AllCocktails";
import Header from "./components/Header";
//styles
import styles from "./App.module.scss";

const App: FC = () => {
  const cocktails = useSelector(
    (store: IStore) => store.cocktails.allCocktails
  );

  return (
    <div className={styles.wrapper}>
      <h1>Redux</h1>
      <Header />
      {!!cocktails?.total && <AllCocktails />}
    </div>
  );
};

export default App;
