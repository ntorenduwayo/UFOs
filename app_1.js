// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (i.e. a JavaScript library that produces sophisticated 
// and highly dynamic graphics in an HTML webpage.)
var tbody = d3.select("tbody");

// Creating a function buildTable:
function buildTable(data) {
    tbody.html(""); // Clearing the existing data creates a fresh table in which we can insert data.

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });

}

// Add filters using d3 (i.e. Data-Driven Documents - a JavaScript library):
// Creating a function handleClick:
function handleClick() {
    let date = d3.select("#datetime").property("value") // Grab the datetime value from the filter
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);
