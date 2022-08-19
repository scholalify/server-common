export type PaperType = "A/L";
export type QuestionType = "MCQ" | "single" | "fill";
export type PaperStatus =
  | "inReview"
  | "processing"
  | "readyToPublish"
  | "published"
  | "paymentPending"
  | "completed"
  | "cancelled";

export type UserInfo = {
  sub: string;
  email_verified: boolean;
  iss: string;
  "cognito:username": string;
  origin_jti: string;
  "custom:userType": string;
  aud: string;
  event_id: string;
  token_use: string;
  auth_time: string;
  name: string;
  exp: number;
  iat: number;
  jti: string;
  email: string;
};
