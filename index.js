let myAccountBalance = parseInt(document.getElementById("myAccountBalance"));
myAccountBalance.innerText;

function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 5000) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount)) + enterAmount;
        finalAmount.innerHTML;
        var myAccountBalance = parseInt(document.getElementById("myAccountBalance")) - enterAmount;
        myAccountBalance.innerText;
        document.getElementById("myAccountBalance");
        document.getElementById(findUserBankAccount);
        alert(`Successful Transaction!!  
  $${enterAmount} is sent to ${enterName}@email.com.`)

        // transaction history 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}

function transferAmount() {
    var enterName1 = document.getElementById('enterName1').value;
    var enterName2 = document.getElementById('enterName2').value;
    var enterAmount1 = document.getElementById('enterAmount1').value;

    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);

    cel1.innerHTML = enterName1;
    cel2.innerHTML = enterName2;
    cel3.innerHTML = enterAmount1;
}