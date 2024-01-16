import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhook/route',
    '/profile',
    '/tags',
    '/tags/:id',
    '/profile/:id',
    '/community',
    '/jobs',
    '/api/chatgpt',
  ],
  ignoredRoutes: [
    '/api/webhook/route',
    '/api/chatgpt',
    '/profile',
    '/tags',
    '/tags/:id',
    '/profile/:id',
    '/community',
    '/jobs',
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
