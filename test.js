"use strict";
function sendRequest(res, success) {
    if (success) {
        return {
            status: 'success',
            data: {
                databaseId: 567,
                sum: 10000,
                from: 2,
                to: 4
            }
        };
    }
    return {
        status: "failed",
        data: {
            errorMessage: "Недостаточно средств",
            errorCode: 4
        }
    };
}
