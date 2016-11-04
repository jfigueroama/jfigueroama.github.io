#!/usr/bin/env nodejs

var fs        = require('fs');
var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '#hello, markdown!';

var file      = process.argv[2];
var result    = "";
if (undefined != file){
    //result = "Convirtiendo " + file;

    fs.readFile(file, 'utf8', (error, content) => {
        if (!error){
            //console.log(converter.makeHtml(content));
            console.log(content.split("\n"));
        }
    });
}

