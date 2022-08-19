import jwt_decode from "jwt-decode";
import { UserInfo } from "../types/model";
const getUserInfoByEvent = (event: any) => {
  if (event.headers) {
    const token = event.headers.authorization;
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded) {
        // @ts-ignore
        return decoded as UserInfo;
      }
    }
  }
  return null;
};

export default getUserInfoByEvent;
