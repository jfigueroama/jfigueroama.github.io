/**
 * Utilidades varias para hacerme la vida más fácil en Javascript.
 *
 * @author José Figueroa Martínez <coloso at gmail.com>
 */


function $(qs){
    return document.querySelector(qs);
}

function $$(qs){
    return document.querySelectorAll(qs);
}


function find_child(fn, elem){
  var res   = null;
  var pred;
  var hijos = elem.childNodes;

  for (var i=0; i< hijos.length; i++){
    pred = fn(hijos.item(i));
    if ( pred ){
      res = hijos.item(i);
      break;
    }
  }
  return res;
}

function map(fn, arr){
  var res = [];

  for (var i=0; i< arr.length; i++){
    res.push( fn(arr[i]) );
  }
  return res;
}

function filter(fn, arr){
  var res  = [];
  var pred;

  for (var i=0; i< arr.length; i++){
    pred = fn(arr[i]);
    if ( pred ){
      res.push( arr[i] );
    }
  }
  return res;
}

function reduce(fn, vi,  arr){
  var valor = vi;   // valor inicial

  for (var i=0; i< arr.length; i++){
    valor = fn(valor, arr[i]);
  }
  return valor;
}

function first(arr){
  var f = null;

  if (arr.length > 0)
    f = arr[0];
  return f;
}

function last(arr){
  var f = null;
  
  if (arr.length > 0)
    return arr[arr.length - 1];

  return f;
}


function xhr() {
  var xmlhttp = undefined;

  if (window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest();
  }else{
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return xmlhttp;
}

function ajax(method, url, data, cfn, cerr){
    var p = new Promise(function(resolve, reject){
        var xmlhttp  = new XMLHttpRequest();
        var lhandler = function(){
            if (xmlhttp.readyState == 4){   // 4 es que ya finalizo
                if (xmlhttp.status >= 200 &&
                    xmlhttp.status <= 400){ // es que todo fue bien
                    if (cfn != undefined)
                        resolve(cfn(xmlhttp, xmlhttp.responseText));
                    else
                        resolve(xmlhttp.responseText);
                }else if (cerr != undefined){ // si fue parametro
                    reject(cerr(xmlhttp));
                }else{
                    reject(xmlhttp);
                }
            }
        };

        xmlhttp.onreadystatechange = lhandler;
        xmlhttp.open(method, url, true);
        xmlhttp.send(data);
    });
    
    return p;
}


function e(tag){
    var ele = document.createElement(tag);
    if (arguments.length > 1){
        var seg = arguments[1];
        var pri = 1;
        if (!(seg instanceof HTMLElement) && (typeof seg == 'object')){
            for (attr in seg){
                var p = attr.substr(0,3);   // Buscando el on- en el attr.
                if (p != "on-"){
                    ele.setAttribute(attr, seg[attr]);
                }else{
                    var ev = attr.substr(3);
                    ele.addEventListener(ev, seg[attr]);
                }
            }
            var pri = 2;
        }
        for (var i=pri; i < arguments.length; i++){
            var el = arguments[i];
            if (el instanceof HTMLElement){
                ele.appendChild(el);
            }else if (typeof el == "string"){
                var nel = document.createTextNode(el);
                ele.appendChild(nel);
            }else{  // arreglo u otra cosa
                console.warn("Tipo no reconocido: ", el);
                throw "Tipo de argumento no reconocido.";
            }
        }
    }

    return ele;
}


/**
 * Retorna la ruta a partir del location (loc) enviado. Lo suyo es recibir la
 * window.location.
 */
function route_from(loc){
    var search  = loc.search;
    return search.length > 0 ? search.substring(1) : "/";
}


function load_site(file, callback){
    ajax('GET', file, null, (xhr, rtext) => {
        callback(rtext);
    });
}
