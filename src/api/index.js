class Api {
    async get (config) {
        return new Promise((resolve, reject) => {
            let timeout = setTimeout(reject, 3000);
            fetch(`${config.url}`, {
                method: `GET`,
                mode: `no-cors`
            }).then((response) => {
                clearTimeout(timeout);
                resolve(response);
            }, (error) => {
                clearTimeout(timeout);
                reject(error);
            });
        });
    }
}

export default new Api();