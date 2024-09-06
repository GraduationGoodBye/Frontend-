export interface LoginResponseType {
  code: string;
  message: string;
}

export interface GgbTokenType extends LoginResponseType {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface GoogleTokenType extends LoginResponseType {
  data: string;
}

export type TokenType = GgbTokenType | GoogleTokenType;

export const isGoogleTokenType = (
  loginResponse: TokenType,
): loginResponse is GoogleTokenType => {
  return typeof loginResponse.data === "string";
};
