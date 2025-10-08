import { environment } from "./environment.development";

describe("environment development", () => {
    it("should have api", () => {
        expect(environment.apiUrl).toBeTruthy();
    })
})