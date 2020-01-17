# Makefile

lint:
	npx eslint .

install:
	npm install

start:
	npx babel-node src/brain-even.js

publish:
	npm publish --dry-run