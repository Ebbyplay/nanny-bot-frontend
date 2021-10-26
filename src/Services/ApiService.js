/**
 * API - Handling
 */

 const 
    host = 'https://nannybot.de',
    port = 8443,
    headers = {
        'Content-Type': 'application/json',
    };

class ApiService {
    login(data) {
        return fetch(`${host}:${port}/login`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
    }

    signupMain(data) {
        return fetch(`${host}:${port}/login/register/mainAccount`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
    }

    signupSub(data) {
        return fetch(`${host}:${port}/login/register/subAccount`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
    }
}

export default new ApiService();
