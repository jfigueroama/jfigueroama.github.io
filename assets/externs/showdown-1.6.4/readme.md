var converter = new showdown.Converter();
converter.setFlavor('github');

text      = '#hello, markdown!';
html      = converter.makeHtml(text);


