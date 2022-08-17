function fn_remove_article(url,articleNO)
function fn_remove_article(url,articleNO){
{
    var form= document.createElement("form");
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);
    form.setAttribute("action", url);
    
    var articleNOInput= document.createElement("input");
    var articleNOInput = document.createElement("input");
    articleNOInput.setAttribute("type", "hidden")
    articleNOInput.setAttribute("type","hidden");
    articleNOinput.setAttribute("name","articleNO");
    articleNOInput.setAttribute("name","articleNO");
    articleNOinput.setAttribute("value",articleNO);
    articleNOInput.setAttribute("value", articleNO);
    form.appendChild(articleNOInput);
    form.appendChild(articleNOInput);
    document.body.appendChild(form);
    document.body.appendChild(form);
    form.submit();
    form.submit();
    
} 

function fn_remove_article(url,articleNO){
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);
    var articleNOInput = document.createElement("input");
    articleNOInput.setAttribute("type","hidden");
    articleNOInput.setAttribute("name","articleNO");
    articleNOInput.setAttribute("value", articleNO);
    
    form.appendChild(articleNOInput);
    document.body.appendChild(form);
    form.submit();

}