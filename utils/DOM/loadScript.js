

/**
 * loadScript("https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js", function () { console.log('underscore loaded');});
 * @param  {[type]}   url      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function loadScript(url, callback) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
