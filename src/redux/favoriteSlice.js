import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = {
  favoriteList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    setFavorite(state, action) {
      state.status.unshift(action.payload);
    },
  },
});

export const { setFilter } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const getStatusFavorites = (state) => state.favorites.favoriteList;
