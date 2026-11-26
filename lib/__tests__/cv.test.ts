import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { verifyCvPassword } from "../cv.ts";

describe("verifyCvPassword", () => {
    it("returns true for matching password with surrounding whitespace", () => {
        assert.equal(verifyCvPassword(" secret123 ", "secret123"), true);
    });

    it("returns false for mismatched password", () => {
        assert.equal(verifyCvPassword("wrong", "secret123"), false);
        assert.equal(verifyCvPassword("secret124", "secret123"), false);
    });

    it("fails closed when expected password is missing", () => {
        assert.equal(verifyCvPassword("anything", undefined), false);
        assert.equal(verifyCvPassword("anything", ""), false);
    });
});
