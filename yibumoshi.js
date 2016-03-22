/**
 * Created by yih on 16/3/18.
 */
function heavyCompute(n) {
    var count = 0,
        i, j;
var abcd;
    for (i = n; i > 0; --i) {
        for (j = n; j > 0; --j) {
            count += 1;
        }
    }
}

var t = new Date();

setTimeout(function () {
    console.log(new Date() - t);
}, 1000);

heavyCompute(50000);
