// next.config.js
module.exports = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/profile/:path*",
  //       destination: "/sign-in",
  //       permanent: true,
  //     },
  //     {
  //       source: "/articles/:path*",
  //       destination: "/sign-in",
  //       permanent: true,
  //     },
  //     {
  //       source: "/questionnaire/:path*",
  //       destination: "/sign-in",
  //       permanent: true,
  //     },
  //   ];
  // },

  async headers() {
    const allowedOrigins = process.env.ALLOWED_ORIGINS;
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: allowedOrigins,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};
