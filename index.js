let optset = []  // 1 is add_node, 2 is add link, 3 is delete
let nodes = ["1","2","3"];
let selectors = {
    options1 : {
        selectBoxRemove : document.getElementById("Remove-List1"),
        nodes : nodes
    },

    options2 : {
        selectBoxRemove : document.getElementById("Remove-List2"),
        nodes : nodes
    },
    options3 : {
        selectBoxRemove : document.getElementById("Remove-List3"),
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
    init_options();
    add_link("1", "3",Diagram1,selectors.options1)
}

function add_node(diagram_num, diagram, option) {
    let to_add;
    if (diagram_num == 1) {
        to_add = document.getElementById("New-Node-Name1").value;
    } else if (diagram_num == 2) {
        to_add = document.getElementById("New-Node-Name2").value;
    } else {
        to_add = document.getElementById("New-Node-Name3").value;
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
    } else if (diagram_num == 2) {
        to_remove = document.getElementById("Remove-List2").value;
    } else {
        to_remove = document.getElementById("Remove-List3").value;
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
}
function add_link(from_node, to_node, diagram, option) {
    diagram.model.addLinkData({from: from_node, to: to_node });
    optset.push({2:{from: from_node, to: to_node }});
}

function init_options () {
    option_list = [selectors.options1, selectors.options2, selectors.options3]
    for(let j = 0, len = option_list.length; j < len; j++) {
        for (let i = 0, l = nodes.length; i < l; i++) {
            option_list[j].selectBoxRemove.options.add(new Option(option_list[j].nodes[i]));
        }
    }
}
function merge_optset(){
    for(let m = 1; m < 5; m++){
        for (let k = 0, opts = optset.length; k < opts; k++) {
            if (Object.keys(optset[k])[0] == m){
                if(m == 1){
                    console.log("Add: ");
                    console.log(optset[k]);
                } else if(m == 2){
                    console.log("Link: ");
                    console.log(optset[k]);
                } else if(m == 3){
                    console.log("Delete: ");
                    console.log(optset[k]);
                }
            }
        }
    }
}

function log_optset() {
    console.log(optset);
}