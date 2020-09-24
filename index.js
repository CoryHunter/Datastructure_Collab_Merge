let optset = []  // 1 is add_node, 2 is add link, 3 is delete
let nodes = ["1","2"];
let selectors = {
    options1 : {
        selectBoxRemove : document.getElementById("Remove-List1"),
        nodes : nodes
    },

    options2 : {
        selectBoxRemove : document.getElementById("Remove-List1"),
        nodes : nodes
    },
    options3 : {
        selectBoxRemove : document.getElementById("Remove-List1"),
        nodes : nodes
    }
}
function init() {
    document.getElementById("ModDiagrams").style.height = screen.height;
    let $ =  go.GraphObject.make;
    Diagram1 = $(go.Diagram, "ModDiagram1")
    let nodeData = [
        {key : "1"},
        {key : "2"},
        {key : "3"}
    ];
    let linkData = [
        {to: "2" , from: "1"}
    ];
    Diagram1.model = new go.GraphLinksModel(nodeData, linkData);
    Diagram2 = $(go.Diagram, "ModDiagram2")
    Diagram2.model = new go.GraphLinksModel(nodeData, linkData);
    Diagram3 = $(go.Diagram, "ModDiagram3")
    Diagram3.model = new go.GraphLinksModel(nodeData, linkData);
    DiagramResult = $(go.Diagram, "DiagramResult")
    DiagramResult.model = new go.GraphLinksModel(nodeData, linkData);
    init_options(selectors.options1);
    add_link("1", "3",Diagram1,selectors.options1)
}

function add_node(diagram_num, diagram, option) {
    let to_add;
    if (diagram_num == 1) {
        to_add = document.getElementById("New-Node-Name1").value;
    } else if (diagram_num == 2) {
        to_add = document.getElementById("New-Node-Name1").value;
    } else {
        to_add = document.getElementById("New-Node-Name1").value;
    }
    diagram.model.addNodeData({key : to_add});
    optset.push({1 : to_add});
    option.nodes.push(to_add)
    option.selectBoxRemove.options.add( new Option(to_add));
}

function remove_node(diagram_num, diagram, option) {
    let to_remove;
    if (diagram_num == 1){
        to_remove = document.getElementById("Remove-List1").value;
        console.log(to_remove)
    } else if (diagram_num == 2) {
        to_remove = document.getElementById("Remove-List1").value;
    } else {
        to_remove = document.getElementById("Remove-List1").value;
    }
    let node = diagram.findNodeForKey(to_remove);
    diagram.model.removeNodeData(node.data);
    optset.push({3 : to_remove});
    option.nodes.splice(option.nodes.indexOf(to_remove), 1);
    for (var i=0; i<option.selectBoxRemove.length; i++) {
        if (option.selectBoxRemove.options[i].value == to_remove) {
            option.selectBoxRemove.remove(i);
        }
    }
    console.log(optset);
}
function add_link(from_node, to_node, diagram, option) {
    diagram.model.addLinkData({from: from_node, to: to_node });
    optset.push({2:{from: from_node, to: to_node }});
}

function init_options (option) {
    for(let i = 0, l = nodes.length; i < l; i++){
        option.selectBoxRemove.options.add( new Option(option.nodes[i]));
    }
}

