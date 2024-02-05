// Question 1: Create your own resume data in JSON format
// Fetch the JSON data asynchronously

fetch('resumeData.json')
  .then(response => response.json())
  .then(resumeData => {
    // Accessing and using the imported JSON data
    console.log("Name:", resumeData.name);
    console.log("Age:", resumeData.age);
    console.log("Email:", resumeData.email);
    console.log("Phone:", resumeData.phone);
    console.log("Address:", resumeData.address);

    console.log("\nEducation:");
    resumeData.education.forEach(edu => {
      console.log(`- ${edu.degree} from ${edu.school}, Graduated in ${edu.graduation_year}`);
    });

    console.log("\nExperience:");
    resumeData.experience.forEach(exp => {
      console.log(`- ${exp.title} at ${exp.company}, ${exp.start_date} to ${exp.end_date}`);
      console.log("  Responsibilities:");
      exp.responsibilities.forEach(res => {
        console.log(`    - ${res}`);
      });
    });

    console.log("\nSkills:");
    resumeData.skills.forEach(skill => {
      console.log(`- ${skill}`);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));



  