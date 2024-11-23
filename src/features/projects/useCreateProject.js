import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectAPI } from "../../services/ProjectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: createProjectAPI,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isCreating, createProject };
}
