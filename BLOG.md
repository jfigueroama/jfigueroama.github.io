El blog está elaborado usando clojure e inlein.
La idea es muy simple: Un template para el índice o página principal y un
template para cada entrada.

Cada archivo markdown o html tiene una sección inicial o cabecera de metadatos
en EDN (hash-map), el cual debe empezar con una llave abierta sola y una llave
cerrada sola. Luego ya viene el contenido en markdown o html.
Las dos necesarias son :title y :pdate

{
 :title "Entrada 1"             ; Título de la publicación
 :pdate "20161012"              ; Fecha de publicación
 :tags [:personal, :clojure]    ; Tags
 :csss ["posts/algo.css"]       ; Css's extras en la carpeta ../css/ se incluyen en orden.
 :jss  ["posts/algo.js"]        ; Js's extras en la carpeta ../js/ se incluyen en orden.
 :template true                 ; Usar template (default)
}


