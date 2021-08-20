# Photo Search Engine-Documentation

## Installation
```
# clone repo
git clone https://github.com/mohsin-riad/unsplash-search-engine.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve
```

## Build
> install Node Js(v8 engine) | dependency manager (npm)
* setup: [NOdeJs LTS](https://nodejs.org/en/download/)
``` bash
# select: vue 3, vue router, vuex
vue create unsplash-search-engine
```

### Tailwind integration
* setup: [Tailwind-css](https://tailwindcss.com/docs/installation)
``` bash
# Generate tailwind.config.js >full
vue add tailwind 
```

### Axios integration
> used to sent POST and GET request to the server
``` bash
# individual project integration
npm i axios --save
```
> Add to:  ``` src/main.js ```
``` bash
import axios from 'axios'
```

## Compiles and hot-reloads for development
``` bash
npm run serve
```

### Customize configuration
* See [Configuration Reference](https://cli.vuejs.org/config/).