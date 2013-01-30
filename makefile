build: index.js style.css
	@component build --dev

clean:
	rm -fr build

.PHONY: clean
