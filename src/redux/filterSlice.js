import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  brand: 'Enter the text',
  price: '',
  brandList: [],
  priceList: [],
  favorite: false,
  isModal: false,
  carForModal: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setBrandList(state, action) {
      state.brandList = action.payload;
    },
    setPriceList(state, action) {
      state.priceList = action.payload;
    },
    setFavorite(state, action) {
      state.favorite = action.payload;
    },
    setIsModal(state, action) {
      state.isModal = action.payload;
    },
    setCarForModal(state, action) {
      state.carForModal = action.payload;
    },
  },
});

export const {
  setBrand,
  setPrice,
  setBrandList,
  setPriceList,
  setFavorite,
  setCarForModal,
  setIsModal,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getBrand = state => state.filters.brand;
export const getPrice = state => state.filters.price;
export const getBrandList = state => state.filters.brandList;
export const getPriceList = state => state.filters.priceList;
export const getFavorite = state => state.filters.favorite;
export const getIsModal = state => state.filters.isModal;
export const getCarForModal = state => state.filters.carForModal;
