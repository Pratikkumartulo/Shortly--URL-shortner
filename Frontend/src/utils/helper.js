import { redirect } from '@tanstack/react-router';
import { GetCurrentUser } from '../api/userAuth.api.js';
import { login,logout } from '../store/slice/authSlice.js';

export const AuthUser = async ({ context }) => {
    try {
        const store = context.store;
        const queryClient = context.queryClient;

        const user = await queryClient.ensureQueryData({
            queryKey: ['CurrentUser'],
            queryFn: GetCurrentUser
        });
        if (!user) return false;
        store.dispatch(login(user));
        const { isLoggedin } = store.getState().user;
        if (!isLoggedin) return false;
        return true;
    } catch (err) {
        console.log(err);
        return redirect({ to: "/auth" });
    }

}

export const AuthUserHome = async ({ context }) => {
    try {
        const store = context.store;
        const queryClient = context.queryClient;
        const { isLoggedin } = store.getState().user;
        if (!isLoggedin) {
            try {
                const user = await queryClient.ensureQueryData({
                    queryKey: ['CurrentUser'],
                    queryFn: GetCurrentUser
                });
                if (user && user.user) {
                    store.dispatch(login(user.user));
                }
            } catch (error) {
                console.log("Not logged in or session expired:", error);
                store.dispatch(logout());
            }
        }
        return true;
    } catch (err) {
        console.error("Error in AuthUserHome:", err);
        return true;
    }
}
