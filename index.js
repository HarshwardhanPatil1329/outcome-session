function getString(string) {
    var a = {};
    for (var i=0; i<string.length;i++) {
        var c = string.charAt(i);
        if (a[c]) {

           a[c]++;
           
        } else {
           a[c] = 1;
        }
    }

    return a;
};