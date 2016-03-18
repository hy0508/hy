/**
 * Created by yih on 16/3/18.
 */
var fs=require('fs');

function readFile(path, cb) {
    var stream = fs.createReadStream(path);
    var out = new Buffer(0);
    stream.on("data", function(data){
        console.log(111);
        out = Buffer.concat([out, data], out.length + data.length);
    });
    stream.on("end", function(){
        cb(out);
    });
}

readFile("aa.txt", function(data){
    console.log(data.toString("utf8"));
});
