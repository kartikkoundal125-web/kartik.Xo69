function kwToHpAmp() {
  let kw = parseFloat(document.getElementById("kw").value);
  let voltage = parseFloat(document.getElementById("voltage").value);
  let pf = parseFloat(document.getElementById("pf").value);

  if (isNaN(kw)) {
    alert("Please enter kW value");
    return;
  }

  let hp = kw * 1.341;
  let current = (kw * 1000) / (1.732 * voltage * pf);

  document.getElementById("hp").value = hp.toFixed(2);

  document.getElementById("result").innerHTML =
    "HP = " + hp.toFixed(2) +
    "<br>Current = " + current.toFixed(2) + " A";
}

function hpToKwAmp() {
  let hp = parseFloat(document.getElementById("hp").value);
  let voltage = parseFloat(document.getElementById("voltage").value);
  let pf = parseFloat(document.getElementById("pf").value);

  if (isNaN(hp)) {
    alert("Please enter HP value");
    return;
  }

  let kw = hp / 1.341;
  let current = (kw * 1000) / (1.732 * voltage * pf);

  document.getElementById("kw").value = kw.toFixed(2);

  document.getElementById("result").innerHTML =
    "kW = " + kw.toFixed(2) +
    "<br>Current = " + current.toFixed(2) + " A";
}
