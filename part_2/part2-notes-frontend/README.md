# Notes Frontend

#### after deploying the backend side, we need to create a production build -> npom run build

#### that will create a dist directory which contains an html file and another directory with a .js

#### after that, we need to copy the dist directory into the backend project and then use fly deploy again

#### to fix the issue with the dev environment, add a proxy config at vite.config.js

server: {
proxy: {
'/api': {
target: 'http://localhost:3001',
changeOrigin: true,
},
}
},
