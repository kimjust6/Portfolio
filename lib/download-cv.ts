const DEFAULT_CV_FILENAME = "Justin Kim Resume 2026.pdf";

function extractFilename(contentDisposition: string | null): string {
    if (!contentDisposition) return DEFAULT_CV_FILENAME;
    const match = contentDisposition.match(/filename="?([^"]+)"?/i);
    return match?.[1] || DEFAULT_CV_FILENAME;
}

function triggerBlobDownload(blob: Blob, filename: string) {
    const downloadUrl = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.URL.revokeObjectURL(downloadUrl);
}

export async function downloadCv(
    password: string
): Promise<{ ok: true } | { ok: false; error: string }> {
    const response = await fetch("/api/cv", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
    });

    if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        return {
            ok: false,
            error: data.error || "Incorrect password. Please try again.",
        };
    }

    const blob = await response.blob();
    const filename = extractFilename(
        response.headers.get("Content-Disposition")
    );
    triggerBlobDownload(blob, filename);

    return { ok: true };
}
