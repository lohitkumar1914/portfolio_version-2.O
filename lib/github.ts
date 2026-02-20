export interface GitHubStats {
    username: string;
    repos: number;
    followers: number;
    stars: number;
    contributions: Array<{
        date: string;
        count: number;
        level: 0 | 1 | 2 | 3 | 4;
    }>;
    totalContributions: number;
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
    try {
        // Fetch basic user data
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
            next: { revalidate: 3600 }
        });

        if (!userRes.ok) return null;

        const userData = await userRes.json();

        // Fetch repos to calculate stars
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            next: { revalidate: 3600 }
        });

        let stars = 0;
        if (reposRes.ok) {
            const reposData = await reposRes.json();
            stars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        }

        // Fetch contribution data
        const contributionsRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
            next: { revalidate: 3600 }
        });

        let contributions: any[] = [];
        let totalContributions = 0;

        if (contributionsRes.ok) {
            const data = await contributionsRes.json();
            contributions = data.contributions;
            // API returns total.lastYear or similar, but we can also just sum the counts if needed or use the API's total
            // The API actually returns "total" object. Let's trust the API structure or just fallback.
            // Assuming data structure: { total: { lastYear: number }, contributions: [...] }
            totalContributions = data.total?.lastYear || contributions.reduce((acc, day) => acc + day.count, 0);
        }

        return {
            username,
            repos: userData.public_repos,
            followers: userData.followers,
            stars,
            contributions,
            totalContributions
        };
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return null;
    }
}
