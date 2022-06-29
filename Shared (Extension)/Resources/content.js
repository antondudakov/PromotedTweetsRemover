const filteringRegExp = /((^Promoted[\s\w]*$)|(^See more$))/;

const removePromotedTweets = () => {
    elements = document.getElementsByTagName('article');
    console.log("articles: " + elements.length);

    for (var i=0; i<elements.length; i++) {
        spans = elements[i].getElementsByTagName('span');

        isPromoted = false
        for (j=0; j<spans.length && !isPromoted; j++){
            if (filteringRegExp.test(spans[j].textContent)){
                console.log("promotion found by text \"" + spans[j].textContent + "\" in: " + elements[i].textContent);
                isPromoted = true;

                elements[i].parentNode.textContent = "";
                result = elements[i].parentNode.removeChild[elements[i]];
                console.log("promotion deletion result: " + result);
            }
        }
    }
}

document.addEventListener("DOMNodeInserted", function (ev) {
    console.log("node inserted");
    removePromotedTweets();
  }, false);
