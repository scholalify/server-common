import jwt_decode from "jwt-decode";
const getUserIdByToken = (event: { headers: { authorization: any } }) => {
  if (event.headers) {
    const token = event.headers.authorization;
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded) {
        // @ts-ignore
        return decoded.sub;
      }
    }
  }
  return null;
};

export default getUserIdByToken;
