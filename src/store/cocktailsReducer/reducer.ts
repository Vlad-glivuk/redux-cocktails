import { CHANGE_REQUEST_DATE } from "./../action-types";
import { Cocktail } from "./types";
//types
import { ICocktailsReducer, ActionType } from "./types";
//action-types
import { DELETE_COCKTAIL, GET_COCKTAIL } from "../action-types";

const initialState: ICocktailsReducer = {
  allCocktails: { records: [], total: 0 },
  requestDate: { start: null, end: null },
};

const cocktailsReducer = (
  state = initialState,
  action: ActionType
): ICocktailsReducer => {
  const { type, payload } = action;
  const { allCocktails, requestDate } = state;
  const { records, total } = state.allCocktails;

  switch (type) {
    case GET_COCKTAIL: {
      return {
        ...state,
        allCocktails: {
          ...allCocktails,
          records: [...records, payload as Cocktail],
          total: total + 1,
        },
        requestDate: {
          ...requestDate,
          end: new Date(),
        },
      };
    }
    case DELETE_COCKTAIL: {
      return {
        ...state,
        allCocktails: {
          ...allCocktails,
          records: records.filter(
            (_cocktail, index) => index !== (payload as number)
          ),
          total: total - 1,
        },
      };
    }
    case CHANGE_REQUEST_DATE: {
      return {
        ...state,
        requestDate: { ...state.requestDate, start: payload as Date },
      };
    }

    default:
      return state;
  }
};

export default cocktailsReducer;
