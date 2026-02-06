function selectProduct(productName) {
document.getElementById('produktInput').value = productName;
document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' });
}

// Dërgimi i formularit në Google Sheets
document.getElementById('orderForm').addEventListener('submit', function(e) {
e.preventDefault();

fetch("https://script.google.com/macros/s/AKfycbxX27tmTrfQZHHO-0HNpF2R02h-_suX1XTFSUgpnSdlRyqZTxYFz7Y23HuqavAAoAma2Q/exec", { // vendos këtu Web App URL nga Apps Script
method: "POST",
body: new URLSearchParams(new FormData(this))
})
.then(response => response.text())
.then(data => {
document.getElementById('successMsg').style.display = 'block';
document.getElementById('orderForm').reset();
})
.catch(error => alert("Gabim në regjistrim: " + error));
});
