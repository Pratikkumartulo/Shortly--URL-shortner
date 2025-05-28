import { redirect } from '@tanstack/react-router';
import { GetCurrentUser } from '../api/userAuth.api.js';
import { login } from '../store/slice/authSlice.js';

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
        // console.log(err);
        return redirect({ to: "/auth" });
    }

}