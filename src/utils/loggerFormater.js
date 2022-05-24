const formatLoggerData = (old, message) => {
    let takeDate = new Date();

    const result = {
        time: takeDate.getHours() + ':' + takeDate.getMinutes() + ':' + takeDate.getSeconds(),
        msg: message,
    }

    return ([
        ...old,
        result
    ])
}

export default formatLoggerData;