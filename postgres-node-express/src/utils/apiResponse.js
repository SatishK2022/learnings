const apiResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status: status,
        message: message,
        data: data
    })
}

export default apiResponse;