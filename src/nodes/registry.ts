export type nodeHandler = (input : any, config? : any) => Promise<any>;

export const nodeResgistry : Record<string, nodeHandler> = {};