Quiero que la estructura de archivos sea la siguiente:

- README.md

- project.clj                       // proyecto en clojure
- index.htm                         // generado de layout+home
- about.htm                         // generado de layout+acercade.md
- blog.htm                          // generado de blog.htm en templates/
- tags.htm                          // generado de tags.htm en templates/
- templates/
    - sha1sum.txt
    - blog.htm
    - tags.htm
    - layout.htm
- posts/
     - 20170418-primer-post.htm     // generado
- site/
    - sha1sum.txt                   // para actualizarse
    - home.md
    - about.md
- drafts/      // Archivos markdown
    - sha1sum.txt
    - 20170418-primer-post.md       // archivo fuente
- assets/                           // en donde van a ir los clojurescripts
    - externs/
        - bootstrap/
    - js/
        - alguna_libreria.js        // generada con clojurescript
    - css/
        - interno.css
    - fonts/
    - images/
    - other/
 


convert-post
convert-site

update-post
update-site
