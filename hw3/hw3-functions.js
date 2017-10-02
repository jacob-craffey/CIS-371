/**
 * Created by Hans Dulimarta Fall 2017.
 * Author: Jacob Craffey
 */

/**
 * Given a node with id {rootId}, the following function finds all its descendant
 * elements having its attribute ID set. The function returns the number of
 * such elements. ALSO, for each such element this function sets its class
 * to {klazName}.
 *
 * @param rootId
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
    var nodes = Array.prototype.slice.call(document.getElementById(rootId).children);
    var count = 0;
    nodes.forEach(function(element) {
        if (element.id) {
            element.className += klazName;
            count++;
        }
    });
    return count;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
    // Set up the table
    var rowNum = document.querySelector("div[data-gv-row]").getAttribute("data-gv-row");
    var colNum = document.querySelector("div[data-gv-column]").getAttribute("data-gv-column");
    var body = document.getElementsByClassName("table-home")[0];
    var tbl = document.createElement("table");

    var lipsum = new LoremIpsum();

    // Adds an additional row for header
    rowNum = parseInt(rowNum);
    rowNum++;

    // Sets up the table based on the values
    for (var i = 0; i < rowNum; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < colNum; j++) {
            var word = lipsum.generate(3);
            if (i === 0) {
                var header = document.createElement("th");
                var headerText = document.createTextNode("Heading " + (j + 1));
                header.appendChild(headerText);
                row.appendChild(header);
            } else {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(word);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }
        tbl.appendChild(row);
    }
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}

