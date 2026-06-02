export interface SendMessageRequest {
  fullname: string;
  email?: string;
  phone: string;
  message: string;
  recaptchaToken?: string | null;
}
