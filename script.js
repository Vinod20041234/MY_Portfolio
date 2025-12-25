const output = document.getElementById("output");
const commandInput = document.getElementById("command");

const responses = {"resume": "Click here to download my resume: <a href='Vinod_Resume.pdf' download>Download Resume</a>",

"download resume": "<a href='Vinod_Resume.pdf' download>Download Resume</a>"
  help: `Commands:
 - about
- education
- skills
- projects
- resume
- github
- linkedin`,
  about: "Vinod Vishwanath | Software Engineer | AI/ML | Backend Developer",
  education: "B.E. ECE | Shridevi Institute of Engineering & Technology | CGPA: 7.55",
  skills: "Python, C, React, Node.js, MongoDB, PostgreSQL, AI/ML",
  projects: "Mini: Coal Mining Hazard Detection (IoT) | Major: Heart Disease Detection (ML)",
  resume: "Email: vinodvishwanathshetty@gmail.com | Phone: +91 7619564865",
  github: "https://github.com/Vinod20041234",
  linkedin: "https://www.linkedin.com/in/vinod-v-a6a437289"
};

commandInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = commandInput.value.toLowerCase();
    output.innerHTML += `<div>> ${cmd}</div>`;
    output.innerHTML += `<div>${responses[cmd] || "Command not found. Type help."}</div>`;
    commandInput.value = "";
  }
});
