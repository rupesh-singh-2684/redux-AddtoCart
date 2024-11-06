import {configureStore} from '@reduxjs/toolkit';

import Configreducer from '../itemsSlice/index'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MMKV } from 'react-native-mmkv';
import { persistReducer } from 'redux-persist';


export const store = configureStore({
  reducer: {
    Config:Configreducer
  },
});


