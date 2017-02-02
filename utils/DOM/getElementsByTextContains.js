
/*

*/
var getElementsByTextContains = function(text){

    if (!text){
        throw new Error('Value "text" is empty');
    }

    var all_tags_with_innerText = get_inner_text_all_tags_dom_without_children();
    var result = new Array();
    for (var i=0; i < all_tags_with_innerText.length; ++i){
        var [node, innerText] = all_tags_with_innerText[i];
        if (innerText.indexOf(text) !== -1){
            result.push(node);
        }
    }
    return result
}
