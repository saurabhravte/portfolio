import type { Activity } from "@/components/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

const API_BASE =
  import.meta.env.VITE_GITHUB_CONTRIBUTIONS_API_URL ??
  "https://github-contributions-api.jogruber.de";

const CACHE_TTL_MS = 86_400_000;

const cache = new Map<
  string,
  { promise: Promise<Activity[]>; timestamp: number }
>();

async function fetchContributions(username: string): Promise<Activity[]> {
  const res = await fetch(`${API_BASE}/v4/${username}?y=last`);
  if (!res.ok) {
    return [];
  }

  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions ?? [];
}

export function getCachedContributions(
  username: string,
): Promise<Activity[]> {
  const cached = cache.get(username);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL_MS) {
    return cached.promise;
  }

  const promise = fetchContributions(username);
  cache.set(username, { promise, timestamp: now });
  return promise;
}
