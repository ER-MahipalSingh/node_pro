exports.validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errorMsg: result?.error?.issues?.map((err) => ({
          pathDir: err.path.join("."),
          message: err.message,
        })),
      });
    }

    req.body = result.data;
    next();
  };
};
