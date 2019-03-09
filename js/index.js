function culcValues() {
    var val1, val2, val3, val4, val5, val6, varres, cbres;
    val1 = Number(document.cubeCalc.height.value);
    val2 = Number(document.cubeCalc.width.value);
    val3 = Number(document.cubeCalc.depth.value);
    val4 = Number(document.cubeCalc.qty.value);
    val5 = Number(document.cubeCalc.period.value);
    val6 = Number(document.cubeCalc.rate.value);
    varprecube = val1 * val2 * val3 / 1000000000;
    varcube = val4 * varprecube;
    varres = val6 / 7 * val5 * varcube;
    //document.cubeCalc.results.value=varres;
    //document.cubeCalc.cresults.value=varcube;
    document.getElementById("cubes").innerHTML = varcube + '&#13221;.';
    document.getElementById("amount").innerHTML = 'R' + varres;

}
