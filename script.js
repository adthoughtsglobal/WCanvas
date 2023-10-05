if (localStorage.getItem("sco") != null) {
	document.getElementById("codee").value = localStorage.getItem("sco");
	toast("Code Restored");
}

run();

function trun() {
	if (document.querySelector("#rcat").checked) {
		run()
	}
}

function run() {
	cx =  document.getElementById("codee").value;
	document.getElementById("output").innerHTML = cx;
	if (cx != "") {
		localStorage.setItem("sco",cx);
	}
}

const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
let x = params.code;
let y = params.run;
if (x != null) {
	document.getElementById("codee").value = atob(x);
	if (y = "true") {
		run();
	}
	let stateObj = { id: "100" };
	window.history.replaceState(stateObj,
		"Page 3", "/");
}

function clsm() {
	document.getElementById("myModal").style.display = "none";
	document.getElementById("sModal").style.display = "none";
}



function share() {
	document.getElementById("sModal").style.display = "block";
	if (document.getElementById("rcos").checked == true) {
		let z = "https://wcanvas.adthoughtsglobal.repl.co?run=true&code=" + btoa(document.getElementById("codee").value);
		document.getElementById("linkin").value = z;
	} else {
		let z = "https://wcanvas.adthoughtsglobal.repl.co?run=false&code=" + btoa(document.getElementById("codee").value);
		document.getElementById("linkin").value = z;
	}
}

function copy() {
	navigator.clipboard.writeText(document.getElementById("linkin").value);
	let stateObj = { id: "100" };
	window.history.replaceState(stateObj,
		"Page 3", document.getElementById('linkin').value);
	location.reload();
}

function togmod() {
	document.getElementById("myModal").style.display = "block";
	window.scrollBy(0, 100);
}

function apth(ty) {
	if (ty == "bright") {
		document.body.style.backgroundColor = "#ffffff";
		document.getElementById("codee").style.backgroundColor = "#fff";
		document.getElementById("codee").style.color = "#0d0d0d";
	}

	if (ty == "brilliant") {
		document.body.style.backgroundColor = "rgb(196, 196, 196)";
		document.getElementById("codee").style.backgroundColor = "#474747";
		document.getElementById("codee").style.color = "#fff";
	}
	if (ty == "dark") {
		document.body.style.backgroundColor = "#0d0d0d";
		document.getElementById("codee").style.backgroundColor = "#303030";
		document.getElementById("codee").style.color = "#fff";
	}
	if (ty == "Term") {
		document.body.style.backgroundColor = "#000000";
		document.getElementById("codee").style.backgroundColor = "#000000";
		document.getElementById("codee").style.color = "#00ff04";
	}
	localStorage.setItem("scl","dt-" + ty);
}

function ctha() {
	document.body.style.backgroundColor = document.getElementById("thcp").value;
	localStorage.setItem("scl", document.getElementById("thcp").value);
}

if (localStorage.getItem("scl") != null) {
		document.body.style.backgroundColor = localStorage.getItem("scl");
		toast("Loaded Previously customized background color");
		document.getElementById("thcp").value = localStorage.getItem("scl");
}

function toast(text) {
	var x = document.getElementById("snackbar");
	x.innerHTML = text;
	x.className = "show";
	setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}
