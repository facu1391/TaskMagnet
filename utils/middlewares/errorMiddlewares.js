export function errorHandler( error, req, res, next) {
    console.log(`Esto es un error ${error}`)
    res.status(500).json({ message: "Algo salió mal" })
}

export function notFoundMiddleware(req, res, next) {
    res.status(404).send( {message: "Not found"});
}