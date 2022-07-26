import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { ui } from "../tiles/contents/ui/slice";

const store = configureStore({
    reducer: { ui: ui.reducer },
})

export default store;