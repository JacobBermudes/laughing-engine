import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

interface UseCoatingSystemsParams {
  environment?: string;
  series?: string;
}

export function useCoatingSystems(params?: UseCoatingSystemsParams) {
  return useQuery({
    queryKey: [api.coatingSystems.list.path, params],
    queryFn: async () => {
      // Build query string
      const searchParams = new URLSearchParams();
      if (params?.environment) searchParams.append("environment", params.environment);
      if (params?.series) searchParams.append("series", params.series);
      
      const queryString = searchParams.toString() ? `?${searchParams.toString()}` : "";
      const url = `${api.coatingSystems.list.path}${queryString}`;

      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch coating systems");
      
      return api.coatingSystems.list.responses[200].parse(await res.json());
    },
  });
}
