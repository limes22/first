import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { ui } from "../tiles/contents/ui/slice";
import { chart } from '../tiles/contents/chart/slice';

const store = configureStore({
    reducer: { ui: ui.reducer,
                chart: chart.reducer },
})

export default store;