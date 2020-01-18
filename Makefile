# Makefile

lint:
	npx eslint .

install:
	npm install

start:
	npx babel-node src/brain-calc.js

publish:
	npm publish --dry-run