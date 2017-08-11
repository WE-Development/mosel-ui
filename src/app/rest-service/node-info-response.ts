import {MoselResponse} from "./mosel-response";

export interface NodeInfoData {
  [key: string]: {
    //diagram
    [key: string]: {
      //graph
      [key: string]: any
    }
  }
}

export interface NodeInfoResponse extends MoselResponse {
  data: NodeInfoData
}
