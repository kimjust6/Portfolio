// handles error messages and returns error message as a string

const getErrorMessage = (error: unknown): string => {
    if (
        error instanceof Error ||
        (error && typeof error === "object" && "message" in error)
    ) {
        return String(error.message);
    } else if (typeof error === "string") {
        return error;
    } else {
        return "Unknown error";
    }
};

export default getErrorMessage;
