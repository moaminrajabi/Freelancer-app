import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data);
}
export function checkOtp(data) {
  return http.post("/user/check-otp", data);
}

export function CompleteProfile(data) {
  return http.post("/user/complete-profile", data);
}
