import { CHANGE_REQUEST_DATE, DELETE_COCKTAIL } from "./../action-types";
import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { API } from "../../core/API";
import { GET_COCKTAIL } from "../action-types";
import { Cocktail } from "./types";

export const fetchCocktail =
  (name: string): any =>
  async (dispatch: Dispatch) => {
    const currentDate = new Date();
    dispatch(changeRequestDate(currentDate))
    const response: AxiosResponse<Cocktail> = await API.get(`/${name}`);
    const cocktail = response.data;

    const timeAfterResponse = new Date();
    console.log("delay", timeAfterResponse.getTime() - currentDate.getTime());

    dispatch(getCocktail(cocktail));
  };

export const getCocktail = (cocktail: Cocktail) => ({
  type: GET_COCKTAIL,
  payload: cocktail,
});

export const deleteCocktail = (indexValue: number) => ({
  type: DELETE_COCKTAIL,
  payload: indexValue,
});

export const changeRequestDate = (currentDate: Date) => ({
  type: CHANGE_REQUEST_DATE,
  payload: currentDate,
});
