// Course Data
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

// Ensure the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
    const courseWorkContainer = document.querySelector(".course-work");
    if (!courseWorkContainer) {
        console.error("Error: .course-work section not found.");
        return;
    }

    const courseWorkHeading = courseWorkContainer.querySelector("h2");
    if (!courseWorkHeading) {
        console.error("Error: <h2> not found inside .course-work.");
        return;
    }

    // Create a List Container
    const courseList = document.createElement("ul");
    courseList.style.listStyle = "none";
    courseList.style.padding = "0";
    courseList.style.display = "grid";
    courseList.style.gridTemplateColumns = "repeat(3, 1fr)"; // Grid with 3 columns
    courseList.style.gap = "10px";

    // Create Total Credits Display
    const creditDisplay = document.createElement("p");
    creditDisplay.id = "total-credits";
    creditDisplay.style.fontWeight = "bold";
    creditDisplay.style.marginTop = "10px";

    // Function to Display Course Titles
    function displayCourseTitles(filteredCourses) {
        courseList.innerHTML = ""; // Clear previous content

        let totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

        filteredCourses.forEach(course => {
            let listItem = document.createElement("li");
            listItem.textContent = `${course.subject} ${course.number}: ${course.title}`;
            listItem.style.backgroundColor = course.completed ? "green" : "red";
            listItem.style.color = "white";
            listItem.style.padding = "10px";
            listItem.style.borderRadius = "5px";
            listItem.style.textAlign = "center";
            courseList.appendChild(listItem);
        });

        // Update total credits display
        creditDisplay.textContent = `Total Credits: ${totalCredits}`;
    }

    // Insert Course List and Total Credits
    courseWorkHeading.insertAdjacentElement("afterend", courseList);
    courseWorkContainer.appendChild(creditDisplay);

    // Initial Load
    displayCourseTitles(courses);
});
