var type = function(doc) {
	if (doc === 'null') return 'null';
	if (Array.isArray(doc)) return 'array';
	if (typeof doc === 'string' && /https?:/.test(doc)) return 'link';

	return typeof doc;
};

var escape = function(str) {
	return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

module.exports = function(doc) {
	var indent = '';

	var forEach = function(list, start, end, fn) {
		if (!list.length) return start+' '+end;

		var out = start+'\n';

		indent += '    ';
		list.forEach(function(key, i) {
			out += indent+fn(key)+(i < list.length-1 ? ',' : '')+'\n';
		});
		indent = indent.slice(0, -4);

		return out + indent+end;
	};

	var visit = function(obj) {
		if (obj === undefined) return '';

		switch (type(obj)) {
			case 'boolean':
			return '<span class="bool">'+obj+'</span>';

			case 'number':
			return '<span class="number">'+obj+'</span>';

			case 'null':
			return '<span class="null">null</span>\n';

			case 'string':
			return '<span class="string">"'+escape(obj)+'"</span>';

			case 'link':
			return '<span class="string">"<a href="'+escape(obj)+'">'+escape(obj)+'</a>"</span>';

			case 'array':
			return forEach(obj, '[', ']', visit);

			case 'object':
			var keys = Object.keys(obj).filter(function(key) {
				return obj[key] !== undefined;
			});

			return forEach(keys, '{', '}', function(key) {
				return '<span class="key">'+key + ':</span> '+visit(obj[key]);
			});
		}

		return '';
	};

	return '<pre>'+visit(doc)+'</pre>';
};