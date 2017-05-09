var routes = {
    "/": {"file": "inicio.md", "title": "Inicio" },
    "/about": {"title": "Acerca de m&iacute;","file": "about.md" },
    "no-encontrada": {"title": "P&aacute;gina inexistente", "file": "no-encontrada.md"}
};




window.addEventListener("load", (evt) => {
    var route = route_from(window.location);
    var rdata = routes[route] ? routes[route] : routes["no-encontrada"];

    load_site("/site/" + rdata["file"], (content) => {
        var converter = new showdown.Converter();
        converter.setFlavor('github');

        var nhtml = converter.makeHtml(content);
        console.log(nhtml);
        $('#contenido').innerHTML   = nhtml;
        $('#titulo').innerHTML      = rdata['title'];
        $('#title').textContent     =
            $('#title').textContent + ' - ' + rdata["title"];

        var codes = document.querySelectorAll('code');
        for (var i=0; i< codes.length; i++){
            var elem = codes.item(i);

            elem.addEventListener('colorear', function (e){
                e.target.innerHTML   = hljs.highlightAuto(e.target.textContent).value;

            });

            var ev   = new Event('colorear');
            elem.dispatchEvent(ev);
        }

    });

});
