import { configureStore } from "@reduxjs/toolkit";
import i18next from "i18next";
import thunkMiddleware from "redux-thunk";

import { IAppState } from "./IAppState";
import { createMainReduce } from "./reducers";

export interface IExtraArguments {
  i18next: typeof i18next;
}

const rootReducer = createMainReduce();

export const createSimpleStore = (preloadedState?: IAppState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: [
      thunkMiddleware.withExtraArgument<IExtraArguments>({
        i18next,
      }),
    ],
    devTools: process.env.NODE_ENV === "development",
  });
