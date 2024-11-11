import http from "./httpService";

export function getOwnerProjectAPI() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectAPI(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
