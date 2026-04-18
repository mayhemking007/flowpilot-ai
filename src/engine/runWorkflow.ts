export const findNodeById = async (workflow : any, currentNodeId : any) => {
    return workflow.nodes.find((node : any) => node.id === currentNodeId);
};

export const findNextNodeId = async (workflow : any, currentNodeId : any) => {
    const edges = workflow.edges.find((e : any) => e.from === currentNodeId)
    return edges ? edges.to : null;
};

export const runWorkflow = async (workflow : any, input : any) => {
    const currentNodeId = workflow.start;
    const data = input;

    while(currentNodeId){
        const currentNode = await findNodeById(workflow, currentNodeId);
    }
}