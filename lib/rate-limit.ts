type RateLimitEntry = {
    count: number;
    resetAt: number;
};

export type RateLimiter = (key: string) => {
    allowed: boolean;
    retryAfterSeconds: number;
};

export function createRateLimiter({
    windowMs,
    maxRequests,
    now = () => Date.now(),
}: {
    windowMs: number;
    maxRequests: number;
    now?: () => number;
}): RateLimiter {
    const store = new Map<string, RateLimitEntry>();

    return (key: string) => {
        const currentTime = now();

        for (const [k, entry] of store) {
            if (entry.resetAt <= currentTime) {
                store.delete(k);
            }
        }

        const existing = store.get(key);
        if (!existing) {
            store.set(key, { count: 1, resetAt: currentTime + windowMs });
            return { allowed: true, retryAfterSeconds: 0 };
        }

        if (existing.count >= maxRequests) {
            const retryAfterSeconds = Math.max(
                1,
                Math.ceil((existing.resetAt - currentTime) / 1000)
            );
            return { allowed: false, retryAfterSeconds };
        }

        existing.count += 1;
        return { allowed: true, retryAfterSeconds: 0 };
    };
}

export function getClientIp(headers: Pick<Headers, "get">): string {
    const forwardedFor = headers.get("x-forwarded-for");
    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }
    return headers.get("x-real-ip")?.trim() || "unknown";
}
