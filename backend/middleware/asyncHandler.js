const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
// Don't have to have a lot of try catch blocks.
// Can just handle errors through Express.
