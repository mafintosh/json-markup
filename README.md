# json-markup

Prettyprint JSON to HTML

It is available through npm

	npm install json-markup

or as a [component](https://github.com/component/component) for the browser

	component install mafintosh/json-markup

json-markup will take a JSON document and add markup to it so it can be styled in a browser.

## Usage

``` js
var jsonMarkup = require('json-markup')
var html = jsonMarkup({hello:'world'})
console.log(html);
```

The above example will print the following HTML

``` html
<div class="json-markup">{
  <span class="json-markup-key">hello:</span> <span class="json-markup-string">"world"</span>
}</div>
```

If you provide an object map with CSS style then style will be applied inline::

```js
var jsonMarkup = require('json-markup')
var css2json = require('css2json')
var fs = require('fs')

var styleFile = css2json(fs.readFileSync('style.css', 'utf8'))
var html = jsonMarkup({hello:'world', foo: 'bar'}, styleFile)
console.log(html)
```

Now outputs looks like:

```html
<div style="line-height:17px;font-size:13px;font-family:monospace;white-space:pre;">{
    <span style="font-weight:bold;">hello:</span> <span style="color:green;">"world"</span>,
    <span style="font-weight:bold;">foo:</span> <span style="color:green;">"bar"</span>
}</div>
```

Afterwards you can use css to style your output to your liking.
A stylesheet similar to [JSON view](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) is included in [style.css](https://github.com/mafintosh/json-markup/blob/master/style.css)

## License

MIT