import { toast } from "react-toastify";
import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      let isAlreayFav = state.favs.find(
        (item) => item.id === action.payload.id
      );
      console.log(isAlreayFav, "isAlreayFav");
      const newFavList = isAlreayFav
        ? [...state.favs]
        : [...state.favs, action.payload];
      console.log(newFavList, "newFavList");
      toast.success(`Güzel Şaka 🤣`);
      writeFavsToLocalStorage(newFavList);

      return {
        ...state,
        favs: newFavList,
      };

    case FAV_REMOVE:
      const newRemoveFavList = state.favs.filter(
        (item) => item.id !== action.payload
      );
      writeFavsToLocalStorage(newRemoveFavList);
      toast.warning(`Üzdün Pikachu 😭`);
      return {
        ...state,
        favs: newRemoveFavList,
      };

    case FETCH_SUCCESS:
      toast.success(`Şakalandık 🥳`);
      return {
        ...state,
        current: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
        current: null,
        error: null,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        current: null,
        error: action.payload,
      };

    case GET_FAVS_FROM_LS:
      return {
        ...state,
        favs: readFavsFromLocalStorage() || [],
      };

    default:
      return state;
  }
}