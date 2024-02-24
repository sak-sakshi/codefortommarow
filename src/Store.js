import { configureStore } from "@reduxjs/toolkit";
import CardFetch from "./redux/CardFetch";

export const store =configureStore({
    reducer:{ 
    todo:CardFetch
}
})