const asyncWrapper = (callback) => {
    return async (req, res, next) => {
        try {
            await callback(req, res, next); // async always return Promise
        } catch (err) {
            next(err);
        }
    }
};

module.exports = asyncWrapper;