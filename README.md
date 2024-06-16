# bookshop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Взаимодействие с сервером
Для взаимодействия с сервером необходимо перейти на сайт [crud](https://crudcrud.com/) и получить код api

После чго укзать его в файле ./src/store/booksModule
``` js
...
export const booksModule = {
    namespaced: true,
    state: () => ({
        apiKey: '3ed216af4b66442090a2dce724a9980a',
...
```
