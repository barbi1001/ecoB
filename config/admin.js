module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '746b4670659cca3ae4602b013dd8760b'),
  },
});
