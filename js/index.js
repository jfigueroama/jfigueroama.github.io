var routes = {
    "/": {"file": "inicio.md", "title": "Inicio" },
    "/about": {"file": "about.md" },
    "no-encontrada": {"file": "no-encontrada.md"}
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
    });

});
