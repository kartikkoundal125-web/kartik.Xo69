function calculate() {
  let table = document.getElementById("excelTable");
  
  // Example: Column C = A + B
  for (let i = 1; i <= 2; i++) {
    let a = parseFloat(table.rows[i].cells[1].innerText) || 0;
    let b = parseFloat(table.rows[i].cells[2].innerText) || 0;
    table.rows[i].cells[3].innerText = (a + b).toFixed(2);
  }
}
