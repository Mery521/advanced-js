var fs = require("fs");
class FileDirectory {
organizeDirectory(pathName) {
    return new Promise(function(resolve,reject){
        fs.readdir(__dirname + "/" + pathName, function(err, data){
            if(err) reject(err)
            let path = data.map((item) => {item = item.split("."); item = item[item.length -1]; return item;});
            function uniqueVal(value,index,self){
                return self.indexOf(value) === index;
            }
            path = path.filter(uniqueVal);

            for(let i = 0; i < path.length; i++){
                fs.mkdirSync(__dirname + "/" + pathName + "/" + path[i]);
                for (let j = 0; j < data.length; j++){
                    let dataSplit = data[j].split(".");
                    if (dataSplit[dataSplit.length - 1] == path[i]) {
                        fs.rename(__dirname + "/" + pathName + "/" + data[j],__dirname + "/" + pathName + "/" + path[i] + "/" + data[j], function(err,data){
                            resolve(data)
                        })
                    }
                }
    
            }
            resolve(data);
        })
    })
}

}


module.exports = FileDirectory;