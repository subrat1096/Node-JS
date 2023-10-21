# Routing

Routing refers to how an application’s endpoints (URIs) respond to client requests.

You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).

These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

In fact, the routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the body of the function to hand off control to the next callback.

# app.METHOD(path, callback [, callback ...])

Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, and so on, in lowercase. Thus, the actual methods are app.get(), app.post(), app.put(), and so on.

# Routing methods

Express supports the following routing methods corresponding to the HTTP methods of the same names:

    checkout
    copy
    delete
    get
    head
    lock
    merge
    mkactivity

	

    mkcol
    move
    m-search
    notify
    options
    patch
    post

	

    purge
    put
    report
    search
    subscribe
    trace
    unlock
    unsubscribe


# Path examples

# The following table provides some simple examples of valid path values for mounting middleware.

# Type 	                            Example
Path 	                            This will match paths starting with /abcd:

                                        app.use('/abcd', function (req, res, next) {
                                        next()
                                        })

Path Pattern 	                    This will match paths starting with /abcd and /abd:

                                        app.use('/abc?d', function (req, res, next) {
                                        next()
                                        })

                                    This will match paths starting with /abcd, /abbcd, /abbbbbcd, and so on:

                                        app.use('/ab+cd', function (req, res, next) {
                                        next()
                                        })

                                    This will match paths starting with /abcd, /abxcd, /abFOOcd, /abbArcd, and so on:

                                        app.use('/ab*cd', function (req, res, next) {
                                        next()
                                        })

                                    This will match paths starting with /ad and /abcd:

                                        app.use('/a(bc)?d', function (req, res, next) {
                                        next()
                                        })

Regular Expression 	                This will match paths starting with /abc and /xyz:

                                        app.use(/\/abc|\/xyz/, function (req, res, next) {
                                        next()
                                        })

Array 	                            This will match paths starting with /abcd, /xyza, /lmn, and /pqr:

                                        app.use(['/abcd', '/xyza', /\/lmn|\/pqr/], function (req, res, next) {
                                        next()
                                        })

# Middleware callback function examples

The following table provides some simple examples of middleware functions that can be used as the callback argument to app.use(), app.METHOD(), and app.all(). Even though the examples are for app.use(), they are also valid for app.use(), app.METHOD(), and app.all().

# Usage 	                        Example

Single Middleware 	                You can define and mount a middleware function locally.

                                        app.use(function (req, res, next) {
                                        next()
                                        })

                                    A router is valid middleware.

                                        var router = express.Router()
                                        router.get('/', function (req, res, next) {
                                        next()
                                        })
                                        app.use(router)

                                    An Express app is valid middleware.

                                        var subApp = express()
                                        subApp.get('/', function (req, res, next) {
                                        next()
                                        })
                                        app.use(subApp)

Series of Middleware 	            You can specify more than one middleware function at the same mount path.

                                        var r1 = express.Router()
                                        r1.get('/', function (req, res, next) {
                                        next()
                                        })

                                        var r2 = express.Router()
                                        r2.get('/', function (req, res, next) {
                                        next()
                                        })

                                        app.use(r1, r2)

Array 	                            Use an array to group middleware logically.

                                        var r1 = express.Router()
                                        r1.get('/', function (req, res, next) {
                                        next()
                                        })

                                        var r2 = express.Router()
                                        r2.get('/', function (req, res, next) {
                                        next()
                                        })

                                        app.use([r1, r2])

Combination 	                    You can combine all the above ways of mounting middleware.

                                        function mw1 (req, res, next) { next() }
                                        function mw2 (req, res, next) { next() }

                                        var r1 = express.Router()
                                        r1.get('/', function (req, res, next) { next() })

                                        var r2 = express.Router()
                                        r2.get('/', function (req, res, next) { next() })

                                        var subApp = express()
                                        subApp.get('/', function (req, res, next) { next() })

                                        app.use(mw1, [mw2, r1, r2], subApp)

# Following are some examples of using the express.static middleware in an Express app.

# Serve static content for the app from the “public” directory in the application directory:

// GET /style.css etc
app.use(express.static(path.join(__dirname, 'public')))

# Mount the middleware at “/static” to serve static content only when their request path is prefixed with “/static”:

// GET /static/style.css etc.
app.use('/static', express.static(path.join(__dirname, 'public')))

# Disable logging for static content requests by loading the logger middleware after the static middleware:

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger())

# Serve static files from multiple directories, but give precedence to “./public” over the others:

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'files')))
app.use(express.static(path.join(__dirname, 'uploads')))
