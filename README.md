# markupify

Highlight your JSON with html markup

	npm install markupify

Markupify will take a JSON document and add markup to it so it can be styled in a browser.

``` js
var markupify = require('markupify');

var html = markupify({hello:'world'});

console.log(html);
```

The above example will print the following html

``` html
<div class="markupify">{
	<span class="key">hello:</span> <span class="string">"world"</span>
}</div>
```

Afterwards you can use css to style your output to your liking.
A stylesheet similar to [JSON view](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) is included in [style.css](https://github.com/mafintosh/markupify/)