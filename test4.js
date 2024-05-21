
// Define JSON Payload
let cars_sale = {
    cars: [
        { make: "Nissan", model: "Silvia", year: "2000"},
        { make: "Subaru", model: "Impreza", year: "1998"},
        { make: "BMW", model: "M3", year: "2005"},
        { make: "Ford", model: "GT", year: "2006"},
        { make: "Toyota", model: "Supra", year: "1994"},
    ]
}

let jsonString = JSON.stringify(cars_sale);

cars_sale = JSON.parse(jsonString);

const table = document.getElementById("vehicles");

// Loop through all items in the JSON and extract data --> into a table

for (let i = 0; i < cars_sale.cars.length; i++) {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.classList.add("left")
    cell1.textContent = cars_sale.cars[i].make;
    row.appendChild(cell1);

     const cell2 = document.createElement("td");
    cell2.classList.add("middle")
    cell2.textContent = cars_sale.cars[i].model;
    row.appendChild(cell2);
    
    const cell3 = document.createElement("td");
    cell3.classList.add("right")
    cell3.textContent = cars_sale.cars[i].year;
    row.appendChild(cell3);

    table.appendChild(row);
}