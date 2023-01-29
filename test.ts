interface request {
  sum: number
  from: number
  to: number
}

interface responde {
  status: 'success' | 'failed'
  data: object
}

interface respondSuccess extends responde {
  data: {
    databaseId: number
    sum: number
    from: number
    to: number
  }
}

interface respondFailed extends responde {
  data: {
    errorMessage: string
    errorCode: number
  }
}

function sendRequest(res: request, success: boolean): respondSuccess | respondFailed {
  if(success) {
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



console.log('success: ', sendRequest(request, true));
console.log('failed: ', sendRequest(request, false));
