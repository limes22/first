import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

// slice reducers 방법01 : 있던 값을 바꾸는 형식 (state에 직접적으로 변경을 가함, 함수방식)
// 직접 변경을 가하기 때문에 기존값을 풀어써주는 전개 연산자가 필요가 없음
export const chart = createSlice({
    name: "chartReducer",
    initialState,
    reducers: {
        getChart: (state, action) => {
            state.loading = true;
            state.data = action.payload;
        },
    },
    extraReducers: {},
});
export const { getChart } = chart.actions;