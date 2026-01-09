function calculate() {
  let kw = document.getElementById("kw").value;
  let voltage = document.getElementById("voltage").value;
  let pf = document.getElementById("pf").value;

  let current = (kw * 1000) / (1.732 * voltage * pf);
  document.getElementById("result").innerHTML =
    "Motor Current = " + current.toFixed(2) + " A";
}
