import {
  CHANGE_REQUEST_DATE,
  DELETE_COCKTAIL,
  GET_COCKTAIL,
} from "./../action-types";

export interface ICocktailsReducer {
  allCocktails: { records: Array<Cocktail>; total: number };
  requestDate: {
    start: Date | null;
    end: Date | null;
  } ;
}

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strTags: null | string;
  strVideo: null | string;
  strCategory: string;
  strIBA: null | string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsDE: string;
  strInstructionsIT: null | string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: null | string;
  strIngredient5: null | string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: null | string;
  strMeasure5: null | string;
  strImageSource: null | string;
  strImageAttribution: null | string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

export type GetCocktail = {
  type: typeof GET_COCKTAIL;
  payload: Cocktail;
};

export type DeleteCocktail = {
  type: typeof DELETE_COCKTAIL;
  payload: number;
};

export type ChangeRequestDate = {
  type: typeof CHANGE_REQUEST_DATE;
  payload: Date;
};

export type ActionType = GetCocktail | DeleteCocktail | ChangeRequestDate;
