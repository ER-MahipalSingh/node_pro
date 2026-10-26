const z = require("zod");

exports.registerValidator = z.object({
  name: z.string().trim().min(6, "Name must be content atleast 6 char"),
  email: z.string().trim().email(6, "Invalid email"),
  password: z.string().min(8, "Password must be content atleast 6 char"),
});

exports.loginValidator = z.object({
  email: z.string().trim().email(6, "Invalid email"),
  password: z.string().min(8, "Password must be content atleast 6 char"),
});
