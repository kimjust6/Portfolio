import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateContactInput } from "../mail.ts";
import { createRateLimiter } from "../rate-limit.ts";

describe("validateContactInput", () => {
    it("accepts valid email and message", () => {
        assert.equal(validateContactInput("a@b.com", "Hello!"), null);
    });

    it("rejects invalid emails and empty messages", () => {
        assert.ok(validateContactInput("", "Hello"));
        assert.ok(validateContactInput("not-an-email", "Hello"));
        assert.ok(validateContactInput("a@b.com", "   "));
    });
});

describe("createRateLimiter", () => {
    it("blocks requests exceeding maxRequests within window and resets after window", () => {
        let time = 1000;
        const limiter = createRateLimiter({
            windowMs: 10_000,
            maxRequests: 2,
            now: () => time,
        });

        assert.equal(limiter("1.2.3.4").allowed, true);
        assert.equal(limiter("1.2.3.4").allowed, true);
        const blocked = limiter("1.2.3.4");
        assert.equal(blocked.allowed, false);
        assert.equal(blocked.retryAfterSeconds, 10);

        time += 10_000;
        assert.equal(limiter("1.2.3.4").allowed, true);
    });
});
