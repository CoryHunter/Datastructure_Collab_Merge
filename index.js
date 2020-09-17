function init() {
    document.getElementById("ModDiagrams").style.height = screen.height;
    let $ =  go.GraphObject.make;
    Diagram1 = $(go.Diagram, "ModDiagram1")
    let nodeData = [
        {key : 1},
        {key : 2}
    ];
    let linkData = [
        {to: 2 , from: 1},
        {to: 5 , from: 1}
    ];
    Diagram1.model = new go.GraphLinksModel(nodeData, linkData);

    Diagram2 = $(go.Diagram, "ModDiagram2")
    Diagram2.model = new go.GraphLinksModel(nodeData, linkData);
    Diagram3 = $(go.Diagram, "ModDiagram3")
    Diagram3.model = new go.GraphLinksModel(nodeData, linkData);
    DiagramResult = $(go.Diagram, "DiagramResult")
    DiagramResult.model = new go.GraphLinksModel(nodeData, linkData);
}

