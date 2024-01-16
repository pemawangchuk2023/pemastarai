import { authMiddleware } from '@clerk/nextjs';
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhook/route',
    // 'question/:id',
    // '/tags',
    // '/tags/:id',
    // '/profile/:id',
    // '/community',
    // '/jobs',
  ],
  ignoredRoutes: ['/api/webhook/route', '/api/chatgpt'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
