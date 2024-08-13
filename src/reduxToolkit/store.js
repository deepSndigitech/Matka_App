import { configureStore } from '@reduxjs/toolkit'
// import SidebarMenu from './slice/SidebarMenuSlice'
import ThemeSlice from './ThemeSlice'
import LoginSlice from './LoginSlice'
export const store = configureStore({
    reducer: {

        Theme: ThemeSlice,
        isLogin: LoginSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    })
})