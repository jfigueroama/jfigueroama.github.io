
var blog = function(rtext){
    var posts = JSON.parse(rtext);
    var texto = posts.map((post) =>{
        return  post.f + " - [" + post.t + "](" + url_post(post.r) + ")";
    });
    return texto.join("\n");
};

var tags = function(rtext){
    var posts = JSON.parse(rtext);
    var tags = [];
    var postsxtag = {};
    
    posts.forEach((post) =>{
        if (post.g){
            post.g.forEach((tag) => {
                if (undefined == tags.find((ta) => {
                    return ta == tag;
                })){
                    tags.push(tag);
                }
                if (undefined == postsxtag[tag])
                    postsxtag[tag] = [];
                postsxtag[tag].push(post);
            });
        }
    });


    tags.sort();
    var response = tags.map((tag) => {
        var pos = postsxtag[tag];
        return "### " + tag + "\n" +  
            pos.map((po) => {
                return po.f + " - [" + po.t + "](" + url_post(po.r) + ")";
        }).join("\n");
    }).join("\n\n");

    return response;
};

var routes = {
    "/": {"file": "/site/inicio.md", "title": "", "fn": null },
    "/about": {"title": "About me","file": "/site/about.md", "fn": null },
    "no-encontrada": {"title": "P&aacute;gina inexistente", "file": "/site/404.md", "fn": null},
    "/blog": {"file": "/rutas.json", "fn": blog, "title": "Blog"},
    "/tags": {"file": "/rutas.json", "fn": tags, "title": "Tags"}
};

window.addEventListener("load", (evt) => {
    var route = route_from(window.location);
    var rdata = routes[route] ? routes[route] : routes["no-encontrada"];

    load_site(rdata["file"], rdata["fn"], (content) => {
        var converter = new showdown.Converter();
        converter.setFlavor('github');

        var nhtml = converter.makeHtml(content);
        $('#contenido').innerHTML   = nhtml;
        $('#titulo').innerHTML      = rdata['title'];
        $('#title').innerHTML       =
            $('#title').innerHTML + ' - ' + rdata["title"];

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


