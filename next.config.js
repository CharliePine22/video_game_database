module.exports = {
  reactStrictMode: true,
  baseUrl: '.',
  include: ['next-env.d.ts', '**/*.ts', '**/*.tsx'],
  env: {
    MONGODB_USER: process.env.NEXT_PUBLIC_MONGODB_USER,
    MONGODB_PASSWORD: process.env.NEXT_PUBLIC_MONGODB_PASSWORD,
    DOMAIN: process.env.DOMAIN,
    STEAM_API_KEY: process.env.STEAM_API_KEY,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
};
