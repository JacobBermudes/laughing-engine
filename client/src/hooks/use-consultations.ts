import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { ConsultationInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateConsultation() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ConsultationInput) => {
      const validated = api.consultations.create.input.parse(data);
      const res = await fetch(api.consultations.create.path, {
        method: api.consultations.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.consultations.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit consultation request");
      }
      return api.consultations.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted",
        description: "Our engineering team will contact you shortly.",
      });
      queryClient.invalidateQueries({ queryKey: [api.consultations.listMy.path] });
    },
    onError: (error) => {
      toast({
        title: "Submission Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}

export function useMyConsultations() {
  return useQuery({
    queryKey: [api.consultations.listMy.path],
    queryFn: async () => {
      const res = await fetch(api.consultations.listMy.path, { credentials: "include" });
      if (res.status === 401) {
        return []; // Not logged in
      }
      if (!res.ok) throw new Error("Failed to fetch your requests");
      return api.consultations.listMy.responses[200].parse(await res.json());
    },
  });
}
