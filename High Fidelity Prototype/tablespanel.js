var selectedTable = 0;
var currentTables = [];
var selectedTableElement;
var currentTableOrder;

function showNewTablePanel() {
	document.getElementById("newTableTitle").style.visibility = 'visible';
	document.getElementById("newTables").style.visibility = 'visible';
	document.getElementById("addtablepanel").style.visibility = 'visible';
	
	document.getElementById('addButton').style.backgroundColor = "rgba(150, 150, 150, 0.5)";
}

function hideNewTablePanel() {
	document.getElementById("newTableTitle").style.visibility = 'hidden';
	document.getElementById("newTables").style.visibility = 'hidden';
	document.getElementById("addtablepanel").style.visibility = 'hidden';
	
	selectedTable = 0;
	document.getElementById('newTableText').innerHTML = "New Table:";
	document.getElementById('addButton').style.backgroundColor = "rgba(255, 255, 255, 0.5)";
}

function selectTableNumber(number, inputElement) {
	var tableInProgress = false;
	var i = 0;
	while (i < currentTables.length && !tableInProgress) {
		if (currentTables[i] === number) {
			tableInProgress = true;
		}
		i = i + 1;
	}
	if (!tableInProgress) {
		selectedTable = number;
		selectedTableElement = inputElement;
		inputElement.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
		document.getElementById('newTableText').innerHTML = "New Table: " + selectedTable;
	}
}

function addNewTable() {
	if (selectedTable > 0 && selectedTable <= 20) {
		var newTable = document.createElement("LI");
		var newA = document.createElement("a");
		var textNode = document.createTextNode(selectedTable);
		newA.appendChild(textNode);
		newTable.appendChild(newA);
		newTable.onclick = function() { selectTableOrder(this); };

		var list = document.getElementById('tablesList');
		list.insertBefore(newTable, list.lastElementChild);
		
		selectedTableElement.style.backgroundColor = "rgba(150, 150, 150, 0.5)";
		currentTables.push(selectedTable);
		selectedTable = 0;
		document.getElementById('newTableText').innerHTML = "New Table:";
		
		hideNewTablePanel();
	}
	if (currentTables.length >= 5) {
		document.getElementById('addButton').style.visibility = 'hidden';
	}
}

function selectTableOrder(inputElement) {
	clearButtonColor();
	
	var tableOrder = inputElement.getElementsByTagName("a")[0].textContent;
	inputElement.style.backgroundColor = "rgba(150, 150, 150, 0.5)";
	
	document.getElementById('tableorder').innerHTML = "Table " + tableOrder + " Order";
}

function clearButtonColor() {
	var currentChild = document.getElementById('tablesList').getElementsByTagName("LI")[0];
	for (i = 0; i < currentTables.length; i++) {
		currentChild.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
		currentChild = document.getElementById('tablesList').getElementsByTagName("LI")[i + 1];
	}
}