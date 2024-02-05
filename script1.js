// Question 2 - For the above json, iterate over all for loops (for, for in, for of, for each )
const resumeData = {
    "name": "Harish G",
    "age": 25,
    "email": "itsharishg@gmail.com",
    "phone": "+1234567890",
    "address": "456 Main Street, Tamil Nadu, India",
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "school": "Tech University",
        "graduation_year": 2020
      }
    ],
    "experience": [
      {
        "title": "Software Developer",
        "company": "Tech Solutions Inc.",
        "start_date": "2020",
        "end_date": "Present",
        "responsibilities": [
          "Develop and maintain web applications.",
          "Collaborate with cross-functional teams for project delivery.",
          "Participate in code reviews and contribute to software architecture decisions."
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "React.js",
      "Node.js",
      "HTML/CSS",
      "Git"
    ]
  };
  
  // Using for...in loop to iterate over keys
  console.log("Using for...in loop:");
  for (let key in resumeData) {
    console.log(`${key}: ${resumeData[key]}`);
  }
  
  // Using for...of loop to iterate over values (for arrays)
  console.log("\nUsing for...of loop:");
  for (let value of resumeData.skills) {
    console.log(value);
  }
  
  // Using forEach for arrays
  console.log("\nUsing forEach loop:");
  resumeData.education.forEach(edu => {
    console.log(`- ${edu.degree} from ${edu.school}, Graduated in ${edu.graduation_year}`);
  });
  
  // Using regular for loop for arrays
  console.log("\nUsing regular for loop:");
  for (let i = 0; i < resumeData.experience.length; i++) {
    console.log(`- ${resumeData.experience[i].title} at ${resumeData.experience[i].company}`);
  }
  