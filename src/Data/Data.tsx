import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const companies = ["google", "faceBook", "Amazon", "Microsoft", "Apple"];
const jobCategories = [
    { "name": "dreamJob", desc: "Software Engineer", job: "900" },
    { "name": "dreamJob", desc: "Product Manager", job: "1k" },
    { "name": "dreamJob", desc: "Designer", job: "10k" },
    { "name": "dreamJob", desc: "Data Scientist", job: "20k" },
    { "name": "dreamJob", desc: "Engineer", job: "900" },
    { "name": "dreamJob", desc: "Manager", job: "1k" },
    { "name": "dreamJob", desc: "Team Lead", job: "10k" },
    { "name": "dreamJob", desc: "Data Engineer", job: "20k" }
];

const work = [
    {
        "name": "Build your resume",
        "desc": "create a standout resume with your skills"
    },
    {
        "name": "Apply for job",
        "desc": "find and apply for jobs that match your skills"
    },
    {
        "name": "Get Hired",
        "desc": "land your dream job with our help"
    }
]

const testimonials = [
    {
        "name": "Sheetal Verma",
        "testimonial": "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "rating": 5
    },
    {
        "name": "Shitu",
        "testimonial": "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "rating": 4
    },
    {
        "name": "Puchi",
        "testimonial": "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "rating": 4
    },
    {
        "name": "Ras Malai",
        "testimonial": "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "rating": 5
    }
]

const footerLinks = [
    { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
    { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms of Service"] },
    { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] }

]


const dropDownData = [
    {
        "title": "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager',
            'Marketing Speciflist', 'Data Scientist', 'Data Analyst', 'Data Engineer', 'Software Engineer', 'Software Developer', 'Software Tester', 'Software Architect', 'Software Consultant', 'Software Trainer', 'Software Support Engineer', 'Software Support Specialist', 'Software Support Analyst', 'Software Support Technician', 'Software Support Manager', 'Software Support Director']
    },
    {
        "title": "Location", icon: IconMapPin, options: ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington']
    },
    {
        "title": "Company", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert']
    },
    {
        "title": "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship']
    }]

const jobList = [
    {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "32 LPA",
        postedDaysAgo: 5,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    },
    {
        jobTitle: "Designer",
        company: "Adobe",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "32 LPA",
        postedDaysAgo: 15,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    },
    {
        jobTitle: "SME",
        company: "Amazon",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "32 LPA",
        postedDaysAgo: 25,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    },
    {
        jobTitle: "Manager",
        company: "Apple",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "32 LPA",
        postedDaysAgo: 5,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    },
    {
        jobTitle: "Director",
        company: "Google",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "32 LPA",
        postedDaysAgo: 35,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    },
    {
        jobTitle: "CTO",
        company: "Microsoft",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "3 LPA",
        postedDaysAgo: 55,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    },
    {
        jobTitle: "CEO",
        company: "Netflix",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "30 LPA",
        postedDaysAgo: 65,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    },
    {
        jobTitle: "HR",
        company: "Spotify",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Type",
        location: "New Yourk",
        package: "22 LPA",
        postedDaysAgo: 75,
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur ipsum? Tempore, aperiam. Voluptatum, vero laudantium autem quibusdam cupiditate iste"
    }
]

const searchFields = [
    {
        title: "Job Title", icon: IconSearch, options: ['Designer', "Developer", "Product Manager", "Maketing Specilist", "Data Analyst",
            "Sales Executives", "Content Writer", "Customer Support"]
    },
    {
        "title": "Location", icon: IconMapPin, options: ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington']
    },
    {
        "title": "Skills", icon: IconRecharging, options: ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Go', 'Rust', 'TypeScript', 'SQL', 'HTML/CSS']
    }
]



const talents = [
    {
        name: "abc",
        role: "Software Engineer",
        company: "Google",
        topSkills: ["JavaScript", "React", "Node.js"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
        expectedCtc: "₹ 20 - 30 LPA",
        location: "San Francisco, CA",
        image: "avatar"
    },
    {
        name: "xyz",
        role: "Product Manager",
        company: "Microsoft",
        topSkills: ["Leadership", "Strategy", "Communication"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
        expectedCtc: "₹ 30 - 40 LPA",
        location: "Seattle, WA",
        image: "avatar"
    },
    {
        name: "pqr",
        role: "Data Scientist",
        company: "Amazon",
        topSkills: ["Python", "Machine Learning", "Data Analysis"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
        expectedCtc: "₹ 25 - 35 LPA",
        location: "New York, NY",
        image: "avatar"
    },

    {
        name: "abhnhc",
        role: "Software Engineer",
        company: "Google",
        topSkills: ["JavaScript", "React", "Node.js"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
        expectedCtc: "₹ 20 - 30 LPA",
        location: "San Francisco, CA",
        image: "avatar"
    },
    {
        name: "xfdyz",
        role: "Product Manager",
        company: "Microsoft",
        topSkills: ["Leadership", "Strategy", "Communication"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
        expectedCtc: "₹ 30 - 40 LPA",
        location: "Seattle, WA",
        image: "avatar"
    },
    {
        name: "pqrfrer",
        role: "Data Scientist",
        company: "Amazon",
        topSkills: ["Python", "Machine Learning", "Data Analysis"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
        expectedCtc: "₹ 25 - 35 LPA",
        location: "New York, NY",
        image: "avatar"
    }
]


const TalentData = {
    name: "ewfef",
    Role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel iusto, rem magni blanditiis laudantium molestiae ipsum officiis aliquam expedita explicabo porro optio sunt. Porro nam ad tempore minus vero dolorem. Pariatur voluptates nobis architecto placeat atque eaque sapiente. Eaque, magni quisquam doloribus expedita quaerat consequatur. Nisi cupiditate soluta deserunt.",
    skills: ["React","Spring Boot","refre","erferfer","eferf","vfvgt","erewr","ewrft","nbvc","wer","wsx","tre","ppnmk"],
    experience:[
        {
            title: "Software Enginer 3",
            company:"Google",
            location:"New York,USA",
            startDate:"Apr 2022",
            endDate:"Present",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel iusto, rem magni blanditiis laudantium molestiae ipsum officiis aliquam expedita explicabo porro optio sunt. Porro nam ad tempore minus vero dolorem. Pariatur voluptates nobis architecto placeat atque eaque sapiente. Eaque, magni quisquam doloribus expedita quaerat consequatur. Nisi cupiditate soluta deserunt."
        }
    ],
    certifications:[
        {
            title: "React Developer",
            company:"Google",
            date: "June, 2023",
            id: "12345"
        }
    ]    
}
   




export { companies, jobCategories, work, testimonials, footerLinks, jobList, dropDownData, searchFields, talents, TalentData };