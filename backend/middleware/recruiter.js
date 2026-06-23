module.exports = (req, res, next) => {

    if (
        req.user.role !== 'recruiter' &&
        req.user.role !== 'admin'
    ) {
        return res.status(403).json({
            message: 'Access Denied'
        });
    }

    next();
};