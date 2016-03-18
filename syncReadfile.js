/**
 * Created by yih on 16/3/18.
 */
var fs=require('fs');

function readFile(path) {
    var stream = fs.readFileSync(path,'utf8');
    console.log(stream);


}
readFile("aa.txt");

