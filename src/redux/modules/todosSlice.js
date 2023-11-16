import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from "../../utils";

export const __addToDo = createAsyncThunk(
  "__addToDo",
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload); // 새로운 할 일 객체를 추가합니다.
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__addToDo.fulfilled, (state, action) => {
        state.list.push(action.payload); // 새로운 할 일 객체를 추가합니다.
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload); // 선택한 할 일 객체를 삭제합니다.
      });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;