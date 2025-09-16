export const successResponse = async (response, data) => {
    response.send({
        status: data.status,
        message: data.msg,
        data: data.data || null,
        type: data.type || 0
    });
};

export const errorResponse = async (response, error) => {
    response.send({
        status: error.status,
        message: error.msg || "Internal Server Error!",
        error: error.message || error,
    });
};