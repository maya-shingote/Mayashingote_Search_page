module.exports ={
    resolve:{
        fallback:{ "path": require.resolve("path-browserify") }
    } ,
    resolve:{
        fallback: {"zlib": require.resolve("browserify-zlib") }
    },
    resolve:{
        fallback: { "crypto": require.resolve("crypto-browserify") }
    },
    resolve:{
        fallback: { "stream": require.resolve("stream-browserify") }
    },
    resolve:{
        fallback:  { "os": require.resolve("os-browserify/browser") }
    },
    resolve:{
        fallback:   { "http": require.resolve("stream-http") }
    },
    resolve:{
        fallback:   { "timers": require.resolve("timers-browserify") }
    },
    
    

}