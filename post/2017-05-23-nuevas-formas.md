<div><input type='hidden' id='title'  value='Nuevas formas ...' />
<input type='hidden' id='tags'   value='educacion, programacion' />
<input type='hidden' id='date'   value='2017-05-23' />
<input type='hidden' id='author' value='' /></div>

Este es el primer post de mi nuevo sitio hosteado por Github. Vamos a ver cuanto dura.

Como nota curiosa, lo estoy escribiendo desde el hospital donde estoy internado por una infección estomacal. Me deshidraté demasiado como para librarla por mi cuenta, así que nada, al hospital :-(

Volviendo al tema, quiero plantear por qué como universidades debemos darle un peso mayor a la programación funcional contra los paradigmas tradicionales de programación estructurada y programación orientada a objetos.

Como paradigma, la programación estructurada se acerca mucho a cómo se implementan las cosas a nivel de hardware. Es decir, va muy ligada al uso óptimo de los recursos de una computadora, o por lo menos de las computadoras de hace 40 años.

La programación estructurada tomó forma a partir de la programación estructurada, naciendo en un momento de nuestra historia en donde los sistemas no eran tan complejos y en donde el hardware era diferente del hardware de ahora. Pero, &iquest;qué tan diferente&quest;

Una computadora de hace 20 años por decir una fecha, tenía normalmente uno o dos cores o unidades de procesamiento, algunos cientos de megas en RAM, monitores CRT, etc. Una computadora a esta fecha con un procesador de última generación puede tener hasta 24 cores con dos procesos reales por cada core, lo cual da una hermosa cantidad de 48 procesos reales utilizables por el software. Esto tiene muchísimas implicaciones.

Para realmente usar el máximo de nuestras computadoras actuales requerimos utilizar el mayor número de procesos reales en nuestras aplicaciones. Sin embargo, usando los paradigmas estructurado y orientado a objetos no resulta trivial en ningún sentido. Nos metemos en un área escabrosa del cómputo concurrente usando tecnologías de software que no fueron diseñadas para eso. El problema principal de las aplicaciones concurrentes es la necesidad de un _state_ compartido y mutable. Osea, variables u objetos que son compartidos por varios hilos de procesamiento, en los que cada hilo puede mutar o cambiar los valores de dichas variables u objetos. Ese es el problema de la concurrencia: _shared mutable state_. Si buscan ese término en google se van a encontrar cosas interesantes que explican mejor este problema.

La programación funcional permite elaborar soluciones más simples, flexibles y robustas para los problemas complejos que se encuentran hoy en día en la programación, especialmente al problema del cómputo concurrente.

Haciendo un recuento de las principales características que debería tener un lenguaje que soporte lo mejor posible el paradigma funcional son:

* _Funciones como valores de primer orden_: Significa que las funciones son como cualquier valor que se puede recibir como parámetro o devolver como resultado de algún cómputo.
* _Estructuras de datos inmutables_: Son estructuras de datos cuya API se basa en que cuando cambias algo en dicha estructura, se te devuelve una estructura _nueva_ con el cambio realizado. Aunque esto parezca muy ineficiente existen diversas técnicas para proporcionar dichas estructuras inmutables sin que sea un costo excesivo en memoria y procesamiento.

Si un lenguaje soporta las dos características mencionadas entonces muy probablemente soporta bien el paradigma funcional. Digo muy probablemente porque no siempre es así.

Los principales lenguajes funcionales que se usan en producción y no son juguetes son [Clojure](http://www.clojure.org/), [Scala](http://www.scala-lang.org), Erlang y [Elixir](http://elixir-lang.org), [Haskell](http://www.haskell.org/), y algunos nuevos como [Elm](http://www.elm-lang.org/). Pero, &iquest;qué hay de lenguajes como Python, Ruby, Perl o PHP&quest; &iquest;no soportan el paradigma funcional&quest; __No realmente__. Les faltan las estructuras de datos inmutables con una API acorde para ello.

__Continuará__



