/* const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
        }
    } 
*/

const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(err.code || 404).json({
      success: false,
      message: error.message,
    });
  }
};

export default asyncHandler;
