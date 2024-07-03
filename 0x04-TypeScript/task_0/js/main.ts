interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

 const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const body: HTMLBodyElement | null = document.querySelector("body");

  if (body) {
    const table: HTMLTableElement = document.createElement("table");
    const thead: HTMLTableSectionElement = document.createElement("thead");
    const tbody: HTMLTableSectionElement = document.createElement("tbody");

    // Create header row
    const headerRow: HTMLTableRowElement = document.createElement("tr");
    const thFirstName: HTMLTableCellElement = document.createElement("th");
    const thLocation: HTMLTableCellElement = document.createElement("th");

    thFirstName.textContent = "First Name";
    thLocation.textContent = "Location";

    headerRow.appendChild(thFirstName);
    headerRow.appendChild(thLocation);
    thead.appendChild(headerRow);

    // Create rows for each student
    studentsList.forEach((student: Student) => {
      const row: HTMLTableRowElement = document.createElement("tr");
      const tdFirstName: HTMLTableCellElement = document.createElement("td");
      const tdLocation: HTMLTableCellElement = document.createElement("td");

      tdFirstName.textContent = student.firstName;
      tdLocation.textContent = student.location;

      row.appendChild(tdFirstName);
      row.appendChild(tdLocation);
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    body.appendChild(table);
  }
}

// Call the function to render the table
renderTable();
