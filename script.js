var lemoncake = 0
var sacb = 0
var pbb = 0
var snk = 0
var mil = 0
var candy = 0

//add
function add1(){
    lemoncake += 1;
    document.getElementById("qty1").innerHTML = lemoncake;
	const lemoncakeprice = 40
	let lemoncaketotal = lemoncake*lemoncakeprice
	document.getElementById("amount1").innerHTML = lemoncaketotal
}
function add2(){
    sacb += 1;
    document.getElementById("qty2").innerHTML = sacb;
const sacbprice = 45
let sacbtotal = sacb*sacbprice
document.getElementById("amount2").innerHTML = sacbtotal
}
function add3(){
    pbb += 1;
    document.getElementById("qty3").innerHTML = pbb;
const pbbprice = 50
let pbbtotal = pbb*pbbprice
document.getElementById("amount3").innerHTML = pbbtotal
}
function add4(){
    snk += 1;
    document.getElementById("qty4").innerHTML = snk;
const snkprice = 35
let snktotal = snk*snkprice
document.getElementById("amount4").innerHTML = snktotal
}
function add5(){
    mil += 1;
    document.getElementById("qty5").innerHTML = mil;
const milprice = 50
let miltotal = mil*milprice
document.getElementById("amount5").innerHTML = miltotal
}
function add6(){
    candy += 1;
    document.getElementById("qty6").innerHTML = candy;
const candyprice = 120
let candytotal = candy*candyprice
document.getElementById("amount6").innerHTML = candytotal
}
//subtraction
function sub1(){
    lemoncake -= 1;
    document.getElementById("qty1").innerHTML = lemoncake;
	const lemoncakeprice = 40
	let lemoncaketotal = lemoncake*lemoncakeprice
	document.getElementById("amount1").innerHTML = lemoncaketotal
}
function sub2(){
    sacb -= 1;
    document.getElementById("qty2").innerHTML = sacb;
const sacbprice = 45
let sacbtotal = sacb*sacbprice
document.getElementById("amount2").innerHTML = sacbtotal
}
function sub3(){
    pbb -= 1;
    document.getElementById("qty3").innerHTML = pbb;
const pbbprice = 50
let pbbtotal = pbb*pbbprice
document.getElementById("amount3").innerHTML = pbbtotal
}
function sub4(){
    snk -= 1;
    document.getElementById("qty4").innerHTML = snk;
const snkprice = 35
let snktotal = snk*snkprice
document.getElementById("amount4").innerHTML = snktotal
}
function sub5(){
    mil -= 1;
    document.getElementById("qty5").innerHTML = mil;
const milprice = 50
let miltotal = mil*milprice
document.getElementById("amount5").innerHTML = miltotal
}
function sub6(){
    candy -= 1;
    document.getElementById("qty6").innerHTML = candy;
const candyprice = 120
let candytotal = candy*candyprice
document.getElementById("amount6").innerHTML = candytotal
}

//total
function totalle() {
document.getElementById("total").innerHTML = lemoncake*40 + sacb*45 + pbb*50 + snk*35 + mil*50 + candy*120
}

function dislemoncake() {
	if (lemoncake > 5) {
	document.getElementById("total").innerHTML = lemoncake*40 + sacb*45 + pbb*50 + snk*35 + mil*50 + candy*120 - 20
	alert("Discount Applied")
	}
	else {
		alert("You need to have at least 6 slices of lemon cake to avail this offer!")
	}
}

function distotal() {
	var tottal = lemoncake*40 + sacb*45 + pbb*50 + snk*35 + mil*50 + candy*120
	if (tottal > 999) {
	document.getElementById("total").innerHTML = lemoncake*40 + sacb*45 + pbb*50 + snk*35 + mil*50 + candy*120 - 40
	alert("Discount Applied")
	}
	else {
		alert("You need to have at least ₹1000 to avail this offer!")
	}
}