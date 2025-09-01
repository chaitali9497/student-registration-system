//--------admin --------

function openModal() {
  document.getElementById("adminModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("adminModal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginBtn").addEventListener("click", openModal);

   document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
});
});



// -------- LOGIN FORM --------
// Admin login form handling
function checkLogin(event) {
  event.preventDefault();  
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;


  if (user === "admin" && pass === "Qwerty@123") {
    //  Redirect after login
    window.location.href = "datacollect.html";
  } else {
    alert("Invalid username or password.");
  }
}




//
// -------- FORM SUBMIT --------
// Student registration form handling
document.addEventListener("DOMContentLoaded", () => {
  console.log(" DOMContentLoaded: script started after DOM is ready.");

   document.getElementById("registerLink").addEventListener("click", () => {
        const form = document.getElementById("registerNow");
        if (form) {
          form.scrollIntoView({ behavior: "smooth", block: "start" });
          const firstInput = form.querySelector("input, select, textarea");
          if (firstInput) firstInput.focus();
        }
      });

  // form + messages
  const form = document.getElementById("student");
  const successMsg = document.getElementById("successMsg");
  const errorMsg = document.getElementById("errorMsg"); // duplicate warning
  console.log(" Found form element? ->", !!form, form);

  if (!form) {
    console.error(`STOP: No form with id="student" found. Attach this script after your HTML or ensure the id matches.`);
    return;
  }

  // load existing students
  let students = [];
  try {
    const raw = localStorage.getItem("students");
    students = raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error(" Failed to parse localStorage:", err);
    students = [];
  }

  // single submit handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // collect data
    const fd = new FormData(form);
    const student = Object.fromEntries(fd.entries());

    // trim & normalize
    for (const key in student) {
      if (Object.prototype.hasOwnProperty.call(student, key)) {
        student[key] = student[key].trim();
      }
    }

    // check duplicate
    const duplicate = students.some(s => s.student_id === student.student_id);
    if (duplicate) {
      console.warn(` Duplicate detected: student_id "${student.student_id}" already exists.`);

      if (errorMsg) {
        errorMsg.classList.remove("hidden");
        setTimeout(() => {
          errorMsg.classList.add("hidden");
        }, 2000);
      }
      return;
    }

    // add + save
    students.push(student);
    try {
      localStorage.setItem('students', JSON.stringify(students));
    } catch (err) {
      console.error(" Failed to save to localStorage:", err);
    }

    // reset form
    form.reset();

    // show success
    if (successMsg) {
      successMsg.classList.remove("hidden");
      setTimeout(() => {
        successMsg.classList.add("hidden");
      }, 2000);
    }

    console.log(" Final students array (after submit) ->", students);
  });

  console.log("Setup complete: listener attached, waiting for user submissions.");
});




document.addEventListener("DOMContentLoaded", function () {
  console.log(" datacollect.html loaded, DOM ready.");

   
//Find table body
  var tbody = document.getElementById("datatable");
  console.log(" Found tbody element? ->", !!tbody, tbody);

  if (!tbody) {
    console.error(`STOP: tbody with id="datatable" not found.`);
    return;
  }

  // 3) Load students array from localStorage
  var students = [];
  try {
    var raw = localStorage.getItem("students");
    console.log(' localStorage "students" raw value ->', raw);
    students = raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error(" Failed to parse localStorage. Starting with empty array.", err);
    students = [];
  }

  console.log(" Parsed students array ->", students);

  // 4) Function to render table
  function renderTable() {
    tbody.innerHTML = ''; // clear existing rows
    console.log("Cleared existing tbody content.");

    if (students.length === 0) {
      console.warn("No students to display.");
      tbody.innerHTML = '<tr><td colspan="5" class="text-center p-2">No students registered yet.</td></tr>';
      return;
    }

    // Loop through students array and add rows
    students.forEach(function (s, index) {
      var tr = document.createElement("tr");

      tr.innerHTML = '\
        <td class="p-2 border">' + s.student_id + '</td>\
        <td class="p-2 border">' + s.student_name + '</td>\
        <td class="p-2 border">' + s.email + '</td>\
        <td class="p-2 border">' + s.contact + '</td>\
        <td class="p-2 border">\
          <button class="editBtn bg-green-500 text-white px-2 py-1 m-2 rounded" data-index="' + index + '">Edit</button>\
          <button class="resetBtn bg-red-500 text-white px-2 py-1 rounded ml-2" data-index="' + index + '">Delete</button>\
        </td>';

      tbody.appendChild(tr);
      console.log("Row " + (index + 1) + " added ->", s);
    });

    // attach edit buttons
    var editBtns = document.querySelectorAll(".editBtn");
    editBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        var idx = e.target.dataset.index;
        editStudent(idx);
      });
    });

    // attach reset buttons
    var resetBtns = document.querySelectorAll(".resetBtn");
    resetBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        var idx = e.target.dataset.index;
        resetStudent(idx);
      });
    });

    console.log("Table render complete. Total rows ->", students.length);
  }

  // Only ONE editStudent (inline table editing, no prompt)
  function editStudent(index) {
    var student = students[index];
    var tr = tbody.querySelectorAll("tr")[index]; // select that row

    tr.innerHTML = '\
      <td class="p-2 border"><input type="text" value="' + student.student_id + '" disabled class="editInput"></td>\
      <td class="p-2 border"><input type="text" autofocus value="' + student.student_name + '" class="editInput"></td>\
      <td class="p-2 border"><input type="email" value="' + student.email + '" class="editInput"></td>\
      <td class="p-2 border"><input type="tel" value="' + student.contact + '" class="editInput"></td>\
      <td class="p-2 border">\
          <button class="saveBtn bg-green-500 text-black px-2 py-1 rounded m-2" data-index="' + index + '">Save</button>\
          <button class="cancelBtn bg-red-500 text-black px-2 py-1 rounded" data-index="' + index + '">Cancel</button>\
      </td>';

    // Focus on the "name" input (second input)
    const input = tr.querySelectorAll(".editInput")[1];
    if (input) input.focus();

    var saveBtn = tr.querySelector(".saveBtn");
    saveBtn.addEventListener("click", function () {
      var inputs = tr.querySelectorAll(".editInput");
      
        //validation
        let studentname = inputs[1].value.trim();
        let emailValue = inputs[2].value.trim();
        let contactValue = inputs[3].value.trim();


        //name validation
        if (!/^[A-Z]+ [A-Z]+$/.test(studentname)) {
          alert("Please enter a valid full name in uppercase (e.g., JOE SEN).");
          return; 
        }
        

      //  Allow only digits
      if (!/^\d+$/.test(contactValue)) {
        alert("Contact number must contain digits only.");
        return; 
  }
       // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
       alert("Please enter a valid email address.");
       return; 
  }
  
      students[index] = {
        student_id: student.student_id, // keep ID fixed
        student_name: studentname,
        email: emailValue,
        contact: contactValue
      };
      localStorage.setItem("students", JSON.stringify(students));
      renderTable();
    });

    var cancelBtn = tr.querySelector(".cancelBtn");
    cancelBtn.addEventListener("click", function () {
      renderTable(); // revert row back
    });
  }

  // Reset function (delete row)
  function resetStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
      students.splice(index, 1); // remove from array
      localStorage.setItem("students", JSON.stringify(students));
      renderTable();
    }
  }


  // Initial render
  renderTable();


 //Delete all records 
const recordDeleteBtn = document.getElementById("deleteBtn");

if (recordDeleteBtn) {
  recordDeleteBtn.addEventListener("click", () => {
    if (confirm(" All student records will be deleted permanently.\nDo you want to continue?")) {
      tbody.innerHTML = '';                // clear table rows
      localStorage.removeItem("students"); // clear localStorage
      students = [];                       // clear array in memory
      alert(" All student records have been deleted successfully.");
      console.log("All student records reset. Array + localStorage cleared.");
    } else {
      alert(" Deletion cancelled. Records are safe.");
    }
  });
}
});


document.addEventListener("DOMContentLoaded", function () {
  // Push only once
  history.pushState(null, "", location.href);
  window.addEventListener("popstate", function (event) {
    // Ask user
    if (confirm("Do you really want to go back?")) {
      // allow back
      history.back();
    } else {
      //  stay on the same page (no extra push to avoid stack buildup)
      history.pushState(null, "", location.href);
    }
  });
  document.getElementById("logoutBtn").addEventListener("click", function () {
  if (confirm("Do you really want to log out?")) {
   
    // Redirect to login page AND clear back stack
    window.location.replace("index.html");
  }
});

});




