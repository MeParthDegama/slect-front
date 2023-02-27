const backConf = {
    "host": "localhost",
    "port": "8080"
}

export default {
    "back": `http://${backConf.host}:${backConf.port}/`,
    "backWS": `ws://${backConf.host}:${backConf.port}/`
}
