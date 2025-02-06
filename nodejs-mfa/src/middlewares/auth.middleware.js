export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();

    return res.status(401).json({
        status: 401,
        message: "Unauthorized User"
    });
}