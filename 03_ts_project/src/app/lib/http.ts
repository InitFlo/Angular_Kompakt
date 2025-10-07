export class HttpClient {

    async get<T>(url: string): Promise<T> {
        // liefert ein Promise-Object
        // .then, .catch, .finally
        const response = await fetch(url);
        return await response.json();
    }
}