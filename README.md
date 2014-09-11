# json-markup

Prettyprint JSON to HTML

It is available through npm

	npm install json-markup

or as a [component](https://github.com/component/component) for the browser

	component install mafintosh/json-markup

json-markup will take a JSON document and add markup to it so it can be styled in a browser.

## Usage

``` js
var jsonMarkup = require('json-markup');

var html = jsonMarkup({hello:'world'});

console.log(html);
```

The above example will print the following HTML

``` html
<div class="json-markup">{
	<span class="json-markup-key">hello:</span> <span class="json-markup-string">"world"</span>
}</div>
```

Afterwards you can use css to style your output to your liking.
A stylesheet similar to [JSON view](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) is included in [style.css](https://github.com/mafintosh/json-markup/blob/master/style.css)

## License

MIT