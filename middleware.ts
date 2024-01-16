import { authMiddleware } from '@clerk/nextjs';
export default authMiddleware({
  ignoredRoutes: ['/((?!api|trpc))(_next|.+..+)(.*)'],
  publicRoutes: ['/api/webhook/route'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
