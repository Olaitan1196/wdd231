// Course Data
const courses = [
    { subject: 'CSE', number: 110, credits: 2, completed: true },
    { subject: 'WDD', number: 130, credits: 2, completed: true },
    { subject: 'CSE', number: 111, credits: 2, completed: true },
    { subject: 'CSE', number: 210, credits: 2, completed: true },
    { subject: 'WDD', number: 131, credits: 2, completed: false },
    { subject: 'WDD', number: 231, credits: 2, completed: false }
];

// Select Web and Computer Programming Section
const certificateContainer = document.querySelector(".web-certificate");

// Select the h2 heading inside the certificate section
const certificateHeading = certificateContainer.querySelector("h2");

// Create a Grid Container for Courses
const courseGrid = document.createElement("div");
courseGrid.style.display = "grid";
courseGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
courseGrid.style.gap = "10px";
courseGrid.style.marginTop = "10px"; // Add space between buttons and grid

// Create Credit Display
const creditDisplay = document.createElement("p");
creditDisplay.id = "total-credits";
creditDisplay.style.marginTop = "10px";
creditDisplay.style.fontWeight = "bold";

// Function to Display Courses in Grid and Calculate Total Credits
function displayCourseCodes(filteredCourses) {
    courseGrid.innerHTML = ""; // Clear previous content

    let totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    filteredCourses.forEach(course => {
        let courseBox = document.createElement("div");
        courseBox.textContent = `${course.subject} ${course.number}`;
        courseBox.style.backgroundColor = course.completed ? "green" : "firebrick";
        courseBox.style.color = "white";
        courseBox.style.textAlign = "center";
        courseBox.style.padding = "10px";
        courseBox.style.borderRadius = "5px";
        courseBox.style.fontWeight = "bold";
        courseGrid.appendChild(courseBox);
    });

    // Update Total Credits
    creditDisplay.textContent = `Total Credits Displayed: ${totalCredits}`;
}

// Create Button Container and Position It Under the h2
const buttonContainer = document.createElement("div");
buttonContainer.style.marginTop = "10px";
buttonContainer.style.marginBottom = "10px";

// Filter Buttons
["All Courses", "WDD Courses", "CSE Courses"].forEach(type => {
    let btn = document.createElement("button");
    btn.textContent = type;
    btn.style.marginRight = "10px";
    btn.style.padding = "5px 10px";
    btn.style.cursor = "pointer";
    btn.onclick = () => filterCourseCodes(type.includes("All") ? "all" : type.split(" ")[0]);
    buttonContainer.appendChild(btn);
});

// Insert Elements into the Certificate Section
certificateHeading.insertAdjacentElement("afterend", buttonContainer);
certificateContainer.appendChild(courseGrid);
certificateContainer.appendChild(creditDisplay);

// Filter Courses by Subject
function filterCourseCodes(type) {
    if (type === "all") {
        displayCourseCodes(courses);
    } else {
        let filtered = courses.filter(course => course.subject === type.toUpperCase());
        displayCourseCodes(filtered);
    }
}

// Initial Load
displayCourseCodes(courses);
