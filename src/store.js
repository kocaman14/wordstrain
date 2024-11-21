import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./features/word"
export const store=configureStore({
reducer:{
word:wordReducer,
}


})