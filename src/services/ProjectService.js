import http from "./httpService";

export function getOwnerProjectAPI() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
