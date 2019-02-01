class Helper {

    constructor() {
    }

    getRandomString(long) {
        return (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase();
    };
}

module.exports = new Helper();
