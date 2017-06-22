# minrouter
a micro middleware router that can be used in both client-side and server-side applications (e.g. Node.js/Express, Koa)

## features
* support koa
* support express
* support browser pushState & replaceState 
* middleware router, API like express

## preview
![preview](preivew.gif)

## install

    npm install minrouter
    
## build
    
    npm run build

## run demo
    npm run demo // build web code

    npm run express
    // http://localhost:3000

    or

    npm run koa
    // http://localhost:4000

## usage
see demo dir

## mini api
* Router.get(path, action)
* Router.addResMethod(key, fn)
* Router.go(uri, isReplace) __only browser__
* Router.back() __only browser__
* Router.proxyLinks(doms) __only browser__
* Router.destroy() __only browser__

> see src/router.js
