export async function apiFetch<T = any>(
  url: string,
  options: RequestInit
): Promise<T> {
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });
    
    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(
        `Request failed: ${res.status} ${res.statusText}\n${errorBody}`
      );
    }

    const contentType = res.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return res.json() as Promise<T>;
    }

    // fallback for non-JSON responses
    return res.text() as unknown as T;

  } catch (error: any) {
    console.error(`API fetch error on: ${url}:`, error.messgae);
    throw error;
  }
}
