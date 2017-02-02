
/*

*/
var get_inner_text_all_tags_dom_without_children = function(){
    var nodes = document.getElementsByTagName('*');
    var result = new Array();
    for (var i=0; i < nodes.length; i++){
        var dom_element = nodes[i];
        var innerText = '';
        var child_nodes = dom_element.childNodes;
        for (var j=0; j < child_nodes.length; ++j){

            var node = child_nodes[j];
            if (node.nodeType === Node.TEXT_NODE) {
                innerText += node.wholeText;
            }
        }
        var innerText = innerText.replace('\n', ' ').trim();
        if (innerText){
            result.push([dom_element, innerText]);
        }
    }
    return result
}
