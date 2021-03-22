const http = require("http");

http.createServer(function(request, response){

    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if(request.url === "/"){
        response.statusCode = 302;
        response.setHeader("Location", "/newpage");
    }
    else if(request.url == "/newpage"){
        response.write("Address that has been redirected");
    }
    else{
        response.write("Not Found");
        response.statusCode = 404;
    }
    response.end();
}).listen(3000);