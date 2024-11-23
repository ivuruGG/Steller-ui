type FetchCache = {
    [key: string]: any;
  };
  
  const cache: FetchCache = {}; // Simple in-memory cache
  
  export const fetchAPI = async (
    endpoint: string,
    options?: RequestInit,
    useCache: boolean = false,
    authToken?: string
  ) => {
    try {
      // Cache logic
      const cacheKey = `${endpoint}-${JSON.stringify(options || {})}`;
      if (useCache && cache[cacheKey]) {
        console.log(`Cache hit for ${endpoint}`);
        return cache[cacheKey];
      }
  
      // Fetch logic
      const response = await fetch(endpoint, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
          ...(options?.headers || {}),
        },
        ...options,
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          `API Error: ${response.status} - ${response.statusText}\n${JSON.stringify(error)}`
        );
      }
  
      const data = await response.json();
  
      // Cache response
      if (useCache) {
        cache[cacheKey] = data;
      }
  
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Fetch API Error:', error.message);
        throw error;
      }
      throw new Error('Unknown error occurred during fetch');
    }
  };
  
  /**
   * Fetch data from a specific API endpoint with optional caching and authorization.
   * @param endpoint API endpoint (relative or absolute URL)
   * @param options Optional fetch options (e.g., method, body, headers)
   * @param useCache Enable caching (default: false)
   * @param authToken Optional authorization token
   * @returns Response data as JSON
   * @example
   * const data = await fetchAPI('/api/posts', undefined, true, 'your-auth-token');
   */
  