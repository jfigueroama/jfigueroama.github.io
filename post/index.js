// Usa la variable global "routes" descrita en posts.js

function load_site_success(content){
    var converter = new showdown.Converter();
    converter.setFlavor('github');

    var title   = "";
    var date    = "";
    var tags    = "";
    var author  = "";
    var scripts = [];

    var nhtml = converter.makeHtml(content);
    $('#contenido').innerHTML   = nhtml;
 
    if ($('#title'))
        title = $('#title').value;
    if ($('#date'))
        date = $('#date').value;
    if ($('#tags'))
        tags = $('#tags').value;
    if ($('#author'))
        author = $('#author').value;
    if ($('#scripts'))
        scripts = JSON.parse($('#scripts').value);

    $('#titulo').innerHTML      = title;
    $('#fecha').innerHTML       = date;
    $('#etiquetas').innerHTML   = tags;
    $('#autor').innerHTML       = author;
    $('#vtitle').innerHTML       = $('#vtitle').innerHTML + ' - ' + title;
    
    if (tags == ""){
        $('#tetiquetas').innerHTML = "";
    }
 
    scripts.forEach((src) => {
        var script = document.createElement("SCRIPT");
        script.type = 'text/javascript';
        script.src  = src;
        $('#body').appendChild(script);
    });

    var codes = document.querySelectorAll('code');
    for (var i=0; i< codes.length; i++){
        var elem = codes.item(i);

        elem.addEventListener('colorear', function (e){
            e.target.innerHTML   = hljs.highlightAuto(e.target.textContent).value;

        });

        var ev   = new Event('colorear');
        elem.dispatchEvent(ev);
    }
    
}

window.addEventListener("load", (evt) => {
    var route = route_from(window.location);

    load_site("/post" + route + ".md", null,  load_site_success, (xhc) => {
        load_site('/post/' + "404.md", null, load_site_success);
    });


});
