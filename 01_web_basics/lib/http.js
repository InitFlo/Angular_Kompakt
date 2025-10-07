export class HttpClient {

    async get(url) {
        // liefert ein Promise-Object
        // .then, .catch, .finally
        const response = await fetch(url);
        return await response.json();
    }
}