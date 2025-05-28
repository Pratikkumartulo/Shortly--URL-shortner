export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Set to true in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    sameSite: 'lax', // CSRF protection
}