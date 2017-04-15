import {MoselResponse} from "../mosel-response";

export class LoginResponse extends MoselResponse {
  successful: boolean;
  key: string;
  validTo: Date;
}
