// from data.js
var tableData = data;

// Console.log to check for data
console.log(tableData);

// Use d3 to select the table body "tbody"
var tbody = d3.select("tbody");

// Create a function to update each cell's text with ufo sighting values to display data available
// Since the headers are already on the table, there's no need to append 'thead'
function createTable(data) {
    // This line clears any previous text. If the line is not present 
    // the function will append everything at the end of the table
    tbody.text("");
    data.forEach(function(ufo_report) {
    // Append table rows    
    row = tbody.append("tr");
    Object.entries(ufo_report).forEach(function([key,value]) {
    // Append 1 cell per sighting value
    cell = row.append("td");
    // Update each cell's text
    cell.text(value);
    })
})
}

// Display the table 
createTable(tableData)
    
//------------This can also be used to append the data 
//     tableData.forEach((ufo_report) => {
//     var row = tbody.append("tr");
// Object.entries(ufo_report).forEach(([key,value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    // })
// })

// Use D3 to select the input element 
var inputElement = d3.select("#datetime")
// Use D3 to select the date filter button
var button = d3.select("#filter-btn")
// Create event handler when pressing the button
// "inputElement.on("change", handleClick)" can be used but it will display data 
// when clicking anywhere on the site along with the button
button.on("click", dateSearch)
// Create the event handler function
function dateSearch() {
// Prevent the page from refreshing
d3.event.preventDefault();
// Get the value property of the input element 
var inputValue = inputElement.property("value");
// Create a new table showing the filtered data
var filteredData = tableData.filter(date => date.datetime === inputValue);
// Display table with only filtered data
createTable(filteredData)
}

// Add other filters 
// Use D3 to select the city filter button
var button = d3.select("#filter-btn1")
// Create event handler when pressing the button
button.on("click", citySearch)
// Create the event handler function
function citySearch() {
// Prevent the page from refreshing
d3.event.preventDefault();
// Get the value property of the input element 
var inputValue = inputElement.property("value");
// Create a new table showing the filtered data
var filteredData = tableData.filter(cities => cities.city === inputValue);
// Display table with only filtered data
createTable(filteredData)
}

// Use D3 to select the state filter button
var button = d3.select("#filter-btn2")
// Create event handler when pressing the button
button.on("click", stateSearch)
// Create the event handler function
function stateSearch() {
// Prevent the page from refreshing
d3.event.preventDefault();
// Get the value property of the input element 
var inputValue = inputElement.property("value");
// Create a new table showing the filtered data
var filteredData = tableData.filter(states => states.state === inputValue);
// Display table with only filtered data
createTable(filteredData)
}

// Use D3 to select the country filter button
var button = d3.select("#filter-btn3")
// Create event handler when pressing the button
button.on("click", countrySearch)
// Create the event handler function
function countrySearch() {
// Prevent the page from refreshing
d3.event.preventDefault();
// Get the value property of the input element 
var inputValue = inputElement.property("value");
// Create a new table showing the filtered data
var filteredData = tableData.filter(countries => countries.country === inputValue);
// Display table with only filtered data
createTable(filteredData)
}

// Use D3 to select the shape filter button
var button = d3.select("#filter-btn4")
// Create event handler when pressing the button
button.on("click", shapeSearch)
// Create the event handler function
function shapeSearch() {
// Prevent the page from refreshing
d3.event.preventDefault();
// Get the value property of the input element 
var inputValue = inputElement.property("value");
// Create a new table showing the filtered data
var filteredData = tableData.filter(shapes => shapes.shape === inputValue);
// Display table with only filtered data
createTable(filteredData)
}

// Use D3 to select the return to records button
var button = d3.select("#return-record")
// Create event handler when pressing the button
button.on("click", returnRecord)
// Create the event handler function
function returnRecord() {
// Prevent the page from refreshing
d3.event.preventDefault();
// Rerun initial function
tbody.text("");
data.forEach(function(ufo_report) {
// Append table rows    
row = tbody.append("tr");
Object.entries(ufo_report).forEach(function([key,value]) {
// Append 1 cell per sighting value
cell = row.append("td");
// Update each cell's text
cell.text(value);
})
})
}