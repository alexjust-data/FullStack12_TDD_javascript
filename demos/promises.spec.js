import { successfullRequest, failedRequest } from './promises';

describe("Callback style", () => {
    it("Should fail with failedRequest", (done) => {
        failedRequest().catch(error => {
            expect(error.message).toMatch(/403/);
            done();
        })
    });

    it("Should succeed wuth successfulRequest", (done) => {
        expect.assertions(2);
        successfullRequest().then(response => {
            // console.log(response);
            expect(response.status).toBe(200);
            expect(response.statusText).toMatch(/OK/);
            done();
        });
    });
});

describe("Promise style", () => {
    it("Should return 200 statusCode with successfullRequest", () => {
        // Nos ayuda a definir un MINIMO de assertions a esperar
        expect.assertions(1);
        return successfullRequest().then(response => {
            expect(response.status).toEqual(200);
        })
    });

    it("Should return 403 status code with failedRequest", () => {
        expect.assertions(2);
        return failedRequest().catch(error => {
            expect(error.response.status).toEqual(403);
            expect(error.response.statusText).toEqual('FORBIDDEN');
        })
    }, 5 * 1000);
});

describe("Async/Await style", () => {

    it("Should return 200 statusCode with successfullRequest", async () => {
        expect.assertions(1);
        try {
            const response = await successfullRequest();
            expect(response.status).toEqual(200);
        } catch(e) {

        }
    });

    it("Should return 403 status code with failedRequest", async () => {
        expect.assertions(1);
        try {
            const errorResult = await failedRequest();
        } catch(error) {
            expect(error.response.status).toBe(403);
        }
    });
});