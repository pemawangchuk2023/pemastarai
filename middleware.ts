// Temporarily remove authMiddleware
// export default authMiddleware({
//   publicRoutes: [...],
// });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
