class API {
    static http = async function http(n) {
        return n * 2
    }
}

class Message extends API {
    constructor() {
        Message.error.url = '/api/getname'
        return function(e) {
            console.log(e)
        }
    }
    static error(s) {
        console.log(this)
        return this.http(s)
    }
}
new Message()
