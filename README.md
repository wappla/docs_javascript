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
```json
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
```json
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
```json
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

### Turbo global setup
```json
"scripts": {
    "dev": "turbo run dev",
    "docker:start": "docker compose --profile develop up -d",
    "docker:stop": "docker compose stop",
    "docker:down": "docker compose down",
    "init": "npm run copy:env && npm run lingui:compile",
    "copy:env": "cp .env.example .env && (cd packages/api && cp .env.example .env); (cd packages/app && cp .env.example .env);",
    "lint": "eslint ./packages/*",
    "modules:install": "npm i",
    "modules:remove": "rm -rf ./node_modules",
    "modules:reset": "npm run modules:remove && npm run modules:install",
    "test": "turbo run test",
    "lingui:compile": "turbo run lingui:compile"
    },
```
