# Javascript docs
Javascript Style Guide &amp; Best Practices

## React
Eslint 
```
npm i --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react
```

## React
Eslint
```
npm i --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jest
```

## Package.json

### Frontend
```
"scripts": {
	"modules:install": "...",
	"modules:remove": "...",
	"modules:update": "...",
	"modules:reset": "...",
	"test": "...",
    "test:unit": "...",
    "test:integration": "...",
	"build": "...",
	"dev": "...",
	"debug": "...",
	"deploy:staging": "...",
	"deploy:production": "...",
}
```
### Mobile
```
"scripts": {
	"modules:install": "...",
	"modules:remove": "...",
	"modules:update": "...",
	"modules:reset": "...",
	"test": "...",
    "test:unit": "...",
    "test:integration": "...",
	"build:ios": "...",
	"build:android": "...",
	"dev:ios": "...",
	"dev:android": "...",
	"publish:staging": "...",
	"publish:production": "...",
}
```
### Backend
```
"scripts": {
	"modules:install": "...",
	"modules:remove": "...",
	"modules:update": "...",
	"docker:start": "docker-compose up -d",
    "docker:stop": "docker-compose stop",
    "docker:down": "docker-compose down",
	"test": "...",
    "test:unit": "...",
    "test:integration": "...",
    "start": "...",
    "dev": "...",
    "debug": "...",
    "migrate:make": "...",
    "migrate:latest": "...",
    "migrate:rollback": "...",
    "deploy:staging": "...",
    "deploy:production": "...",
}
```
