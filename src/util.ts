import AirOps from "@airops/airops-js";

export function toRelativeTime(date: Date) {
  const diff = new Date().getTime() - date.getTime();

  const seconds = Math.round(diff / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  if (days === 0) {
    return "today";
  }

  if (days === 1) {
    return "yesterday";
  }

  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
}

async function hmacSha256Hex(data: string, apiKey: string) {
  const encoder = new TextEncoder();
  const encodedKey = encoder.encode(apiKey);
  const encodedData = encoder.encode(data);

  const key = await crypto.subtle.importKey("raw", encodedKey, { name: "HMAC", hash: { name: "SHA-256" } }, false, [
    "sign",
  ]);

  const signature = await crypto.subtle.sign("HMAC", key, encodedData);

  const hashArray = Array.from(new Uint8Array(signature));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

interface PrepareAirOpsClientParams {
  userId: string;
  workspaceId: number;
  apiKey: string;
}

export async function prepareAirOpsClient({ userId, workspaceId, apiKey }: PrepareAirOpsClientParams) {
  return AirOps.identify({
    userId,
    hashedUserId: await hmacSha256Hex(userId, apiKey),
    workspaceId,
  });
}
