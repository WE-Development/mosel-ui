import {MoselResponse} from "./mosel-response";

export class NodeInfoResponse extends MoselResponse {
  data: {
    //time
    [key: string]: {
      //diagram
      [key: string]: {
        //graph
        [key: string]: any
      }
    }
  };
}
