import jwt_decode from "jwt-decode";
const getUserInfoByToken = (event: any) => {
  if (event.headers) {
    const token = event.headers.authorization;
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded) {
        // @ts-ignore
        return decoded;
      }
    }
  }
  return null;
};

export default getUserInfoByToken;
