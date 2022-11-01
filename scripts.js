function media() {
    var pj1 = document.getElementById('j1').value;
    var pj2 = document.getElementById('j2').value;
    var pj3 = document.getElementById('j3').value;
    var jtotal;
    var jmedia;

    if(pj1 !="" && pj2 !="" && pj3 !="") {
        jtotal = parseFloat(pj1)+parseFloat(pj2)+parseFloat(pj3);
        jmedia = jtotal/3;

        document.getElementById('j4').value = jmedia.toFixed(2);
    }

    var pm1 = document.getElementById('m1').value;
    var pm2 = document.getElementById('m2').value;
    var pm3 = document.getElementById('m3').value;
    var mtotal;
    var mmedia;

    if(pm1 !="" && pm2 !="" && pm3 !="") {
        mtotal = parseFloat(pm1)+parseFloat(pm2)+parseFloat(pm3);
        mmedia = mtotal/3;

        document.getElementById('m4').value = mmedia.toFixed(2);
    }

    var pp1 = document.getElementById('p1').value;
    var pp2 = document.getElementById('p2').value;
    var pp3 = document.getElementById('p3').value;
    var ptotal;
    var pmedia;

    if(pp1 !="" && pp2 !="" && pp3 !="") {
        ptotal = parseFloat(pp1)+parseFloat(pp2)+parseFloat(pp3);
        pmedia = ptotal/3;

        document.getElementById('p4').value = pmedia.toFixed(2);
    }
}