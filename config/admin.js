module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b79c84a0accf67788c73e1c1fdafba64'),
  },
});
