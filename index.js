function init() {
    var $ =  go.GraphObject.make;
    Diagram1 = $(go.Diagram, "DiagramDiv1")
    var nodeData = [
        {key : 1},
        {key : 2}
    ];
    var linkData = [
        {to: 2 , from: 1}
    ];
    Diagram1.model = new go.GraphLinksModel(nodeData, linkData);

    Diagram2 = $(go.Diagram, "DiagramDiv2")
    Diagram2.model = new go.GraphLinksModel(nodeData, linkData);
    Diagram3 = $(go.Diagram, "DiagramDiv3")
    Diagram3.model = new go.GraphLinksModel(nodeData, linkData);
}
