import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// implement protected route with clerk

// we can use 2 approach, one is list all protected routes
// const protectedRoutes = createRouteMatcher(["/user-profile"])

// or we can list all public routes
const publicRoutes = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"])

export default clerkMiddleware(async (auth, req) => {
    // if (protectedRoutes(req)) await auth.protect()

    // also we can only use this code to protect route
    // if (!publicRoutes(req)) await auth.protect()

    // if we want more advance protection
    const { userId, redirectToSignIn } = await auth();
    if (!userId && !publicRoutes(req)) {
        // do some logic here
        return redirectToSignIn();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        `/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)`,
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};