import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectAPI } from "../../services/ProjectService";

export default function useOwnerProject() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-project"],
    queryFn: getOwnerProjectAPI,
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
