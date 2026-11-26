import crypto from "crypto";
import fs from "fs";
import path from "path";

export type CvFile = {
    buffer: Buffer;
    filename: string;
};

export type CvProvider = () => Promise<CvFile | null> | CvFile | null;

const CV_FILENAME = "Justin Kim Resume 2026.pdf";

export function verifyCvPassword(
    input: string,
    expected = process.env.CV_PASSWORD
): boolean {
    if (!input || !expected) return false;
    const inputTrimmed = input.trim();
    const targetTrimmed = expected.trim();
    if (inputTrimmed.length !== targetTrimmed.length) {
        return false;
    }
    return crypto.timingSafeEqual(
        Buffer.from(inputTrimmed),
        Buffer.from(targetTrimmed)
    );
}

const readLocalCvFile: CvProvider = () => {
    const candidatePaths = [
        path.join(process.cwd(), "private", CV_FILENAME),
        path.join(process.cwd(), "public", CV_FILENAME),
    ];

    const filePath = candidatePaths.find((p) => fs.existsSync(p));
    if (!filePath) {
        return null;
    }

    return {
        buffer: fs.readFileSync(filePath),
        filename: CV_FILENAME,
    };
};

export async function getCvFile(
    provider: CvProvider = readLocalCvFile
): Promise<CvFile | null> {
    return provider();
}
