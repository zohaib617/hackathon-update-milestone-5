var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var profilePicInput = document.getElementById('profile-pic');
var downloadBtn = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //fetch input values 
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var career = document.getElementById('career-obj').value;
    var cartificate = document.getElementById('certifcate').value;
    var education = document.getElementById('education').value;
    var experince = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //profile pic code 
    var profilePicHTML = '';
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgDataURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePicHTML = "<img src=\"".concat(imgDataURL, "\" alt =\"Profile Picture\" class=\"profile-img\">");
            var resumeHTML = "\n        <div class=\"resume-container\">\n            <div class=\"left-section\">\n                ".concat(profilePicHTML, "\n                <section id=\"objective\">\n                    <h3 class=\"heading2\">Career Objective</h3>\n                    <p> <span contenteditable=\"true\">").concat(career, "</span></p>\n                </section>\n                <section id=\"certification\">\n                    <h3 class=\"heading\">Certification</h3>\n                    <p><span contenteditable=\"true\">").concat(cartificate, "</span></p>\n                </section>\n            </div>\n            \n            <div class=\"right-section\">\n                <h1></h1>\n\n                <section id=\"personal-info\">\n                    <h3>Personal Information</h3>\n                    <p><b>Name: </b><span contenteditable=\"true\">").concat(name, "</span></p>\n                    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n                    <p><b>Mobile: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n                </section>\n                <section id=\"education\">\n                    <h3>Education</h3>\n                    <p><span contenteditable=\"true\">").concat(education, "</span></p>\n                </section>\n                <section id=\"work-experience\">\n                    <h3>Work Experience</h3>\n                    <p><span contenteditable=\"true\">").concat(experince, "</span></p>\n                </section>\n                <section id=\"skills\">\n                    <h3>Skills</h3>\n                    <p><span contenteditable=\"true\">").concat(skills, "</span></p>\n                </section>\n            </div>\n        </div>\n        ");
            resumeDisplayElement.innerHTML = resumeHTML;
        };
        reader.readAsDataURL(file);
    }
    else {
        var resumeHTML = "\n        <h2 ><b><span contenteditable=\"true\">".concat(name, "</b></span></h2>  \n    <h3> Personal Information</h3>\n    <p> <b> Name: </b><span contenteditable=\"true\">").concat(name, "</span></p>\n    <p> <b> Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p> <b> Mobile No: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h3>Career objective</h3>\n    <p> <span contenteditable=\"true\">").concat(career, "</span></p>\n    \n    <h3>Certification</h3>\n    <p> <span contenteditable=\"true\">").concat(cartificate, "</span></p>\n\n    \n    <h3>Education </h3>\n    <p> <span contenteditable=\"true\">").concat(education, "</span></p>\n\n    <h3>Work Experience </h3>\n    <p> <span contenteditable=\"true\">").concat(experince, "</span></p>\n        \n    <h3>Skills </h3>\n    <p> <span contenteditable=\"true\">").concat(skills, "</span></p>\n        ");
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    ;
});
var shareButton = document.getElementById('share-link-button');
var shareableLinkElement = document.getElementById('shareable-link');
shareButton.addEventListener('click', function () {
    var nameInput = document.getElementById('name');
    var usernameValue = nameInput.value;
    if (usernameValue) {
        var currentUrl = window.location.origin + window.location.pathname;
        var shareableUrl = "".concat(currentUrl, "?user=").concat(encodeURIComponent(usernameValue));
        shareableLinkElement.innerHTML = "<a href=\"".concat(shareableUrl, "\" target=\"_blank\">").concat(shareableUrl, "</a>");
    }
    else {
        shareableLinkElement.textContent = "Please enter your name before generating the link.";
    }
});
// Download resume as PDF
downloadBtn.addEventListener('click', function () {
    var element = resumeDisplayElement;
    var opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
});
