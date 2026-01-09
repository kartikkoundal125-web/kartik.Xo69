function hpToKwAmp() {
  let hp = parseFloat(document.getElementById("hp1").value);
  let voltage = parseFloat(document.getElementById("voltage").value);
  let pf = parseFloat(document.getElementById("pf").value);

  if (isNaN(hp)) {
    alert("Please enter HP value");
    return;
  }

  let kw = hp / 1.341;
  let current = (kw * 1000) / (1.732 * voltage * pf);

  document.getElementById("kw1").value = kw.toFixed(2);
  document.getElementById("amp1").value = current.toFixed(2);
}

function kwToHpAmp() {
  let kw = parseFloat(document.getElementById("kw2").value);
  let voltage = parseFloat(document.getElementById("voltage").value);
  let pf = parseFloat(document.getElementById("pf").value);

  if (isNaN(kw)) {
    alert("Please enter kW value");
    return;
  }

  let hp = kw * 1.341;
  let current = (kw * 1000) / (1.732 * voltage * pf);

  document.getElementById("hp2").value = hp.toFixed(2);
  document.getElementById("amp2").value = current.toFixed(2);
}
