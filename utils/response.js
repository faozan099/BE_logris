const responseSucces = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        payload: data,
        message
    })
}

const responseFailed = (statusCode, message, res) => {
    res.status(statusCode).json({
        message
    })
}

module.exports = {
    responseSucces,
    responseFailed
}