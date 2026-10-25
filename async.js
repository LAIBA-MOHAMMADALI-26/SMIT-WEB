
function getStudentData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Student", id, "data loaded!");
            resolve();
        }, 2000);
    });
}

function loadAllStudents() {
    console.log("Loading Student 1...");

    getStudentData(1)
        .then(() => {
            console.log("Loading Student 2...");
            return getStudentData(2);
        })
        .then(() => {
            console.log("Loading Student 3...");
            return getStudentData(3);
        })
        .then(() => {
            console.log("All students loaded!");
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

loadAllStudents();
