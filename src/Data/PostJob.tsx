const fields = [
    {
        label: "Job Title",
        placeholder: "Enter Job Title",
        options: ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "Marketing Specialist",  "Sales Representative", "Customer Support Specialist", "Business Analyst", "Project Manager", "DevOps Engineer" ,   "Full Stack Developer", "Mobile App Developer", "Data Analyst", "Content Writer", "Graphic Designer", "HR Manager", "Financial Analyst", "Operations Manager", "Quality Assurance Engineer", "Digital Marketing Manager", "UI/UX Designer", "Network Administrator", "Database Administrator", "Cloud Solutions Architect", "Cybersecurity Analyst", "Machine Learning Engineer", "Business Development Manager", "Social Media Manager", "E-commerce Specialist", "Video Editor"],

    },
    {
        label: "Company",
        placeholder: "Enter Company Name",
        options: ["Google", "Facebook", "Amazon", "Apple", "Microsoft", "Netflix", "Tesla", "IBM", "Intel", "Salesforce", "Adobe", "Oracle", "Uber", "Airbnb", "Spotify", "Twitter", "LinkedIn", "Snapchat", "Pinterest", "Dropbox"],

    },
    {
        label: "Experience",
        placeholder: "Enter Experience Level",
        options: ["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"],
    },

    {
        label: "Job Type",
        placeholder: "Enter Job Type",
        options: ["Full-time", "Part-time", "Contract", "Internship"],
    },
    {
        label: "Location",
        placeholder: "Enter Location",
        options: ["New York", "San Francisco", "Los Angeles", "Chicago", "Seattle"]
    },
    {
        label: "Salary",
        placeholder: "Enter Salary",
        options: ["10 LPA", "20 LPA", "30 LPA", "40 LPA", "50 LPA"]
    }
]

const content = '<h4>About the Job</h4><p>Provide a detailed description of the job... </p><h4>Responsibilities</h4><ul><li>List the key responsibilities...</li></ul><h4>Qualifications and Skill Set</h4><ul><li>List the required qualifications and skill set...</li></ul><h4>Benefits</h4><ul><li>List the benefits...</li></ul>';

export { fields, content };