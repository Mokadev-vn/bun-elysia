const handlerError = ({ code, error, set }) => {

    if(code === 'NOT_FOUND') {
        set.status = 404;
        return {
            status: 404,
            message: "Not found",
        };
    }
    
    if(code === 'UNAUTHORIZED') {
        set.status = 401;
        return {
            status: 401,
            message: "Unauthorized",
        };
    }

    if(code == 'VALIDATION'){
        set.status = 422;
        return {
            status: 422,
            message: "Data validation error",
        };
    }

    return {
        status: 500,
        message: "Internal server error",
    };
}

export {
    handlerError
}