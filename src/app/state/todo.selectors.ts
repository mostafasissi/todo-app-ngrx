import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectTodos = (state : AppState) => state.todos;
