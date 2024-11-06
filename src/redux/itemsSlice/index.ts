import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Favourite from '../../screens/favourite';

interface ConfigModal {
  isLoading: boolean;
  count: number;
  products?: any;
  matched: boolean;
}

type ActionType = {
  type: string;
  payload: any;
};

const getProductsApi = async () => {
  return axios.get('https://fakestoreapi.com/products');
};
export const getProductsAction = createAsyncThunk(
  'config/getProducts',
  async (args, thunkApi) => {
    console.log('args', args);
    try {
      console.log('getProductsAction', args, thunkApi);
      const response = await getProductsApi();
      console.log('getProductsApi', response);
      if (response) {
        return thunkApi.fulfillWithValue(response.data);
      }
      throw new Error(response?.data?.error as string);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

let initialState = {
  isLoading: false,
  count: 0,
  products: [],
  matched: false,
  favourite:[],
  cart:[],
};

const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    // SET_CONFIG_DATA: (state: ConfigModal, action: ActionType) => {
    //   const {payload} = action;
    //   return {...state, ...payload};
    // },
    // increaseCount: (state: ConfigModal, action: ActionType) => {
    //   console.log('increaseCount', state, action);
    //   state.count += 1;
    // },
    // decreaseCount: (state: ConfigModal) => {
    //   state.count -= 1;
    // },
    // increaseCountByPayload: (state: ConfigModal, action: ActionType) => {
    //   console.log('action', action);
    //   state.count += action?.payload.increaseBy;
    // },
    addFavourite:(state, action) =>{
      const item = action.payload;
      if (!state.favourite.find(fav => fav.id === item.id)){
        state.favourite.push(item);
      }
    },
    removeFavourite:(state, action) =>{
      const itemId = action.payload;
      state.favourite = state.favourite.filter(fav => fav.id !== itemId);
      },

    addCart:(state, action) =>{
      const item = action.payload;
      if (!state.cart.find(cart => cart.id === item.id)){
        state.cart.push(item);
      }
    },
    countProduct:(state, action) =>{
      const count = action.payload;
      
    }
  },
  extraReducers: builder => {
    builder.addCase(getProductsAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      console.log('action', action);
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProductsAction.rejected, state => {
      state.isLoading = false;
    });

    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.isLoading = false;
        state.matched = true;
      },
    );
    builder.addDefaultCase((state, action) => {
      console.log('default case', action);
      state.isLoading = false;
    });
  },
  selectors: {
    getProducts: (state: ConfigModal) => state.products,
  },
});

export const {getProducts} = ConfigSlice.selectors;

export const {
  addFavourite,
  addCart,
  removeFavourite
//   increaseCount,
//   decreaseCount,
//   SET_CONFIG_DATA,
//   increaseCountByPayload,
} = ConfigSlice.actions;

export default ConfigSlice.reducer;
