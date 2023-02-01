import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Cover letter",
	desc: "Create a cover letter based on some basic details, like title, job description, etc.",
	category: "Business",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/business/coverletter",
	api: "/ai/business/coverletter",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Cover Letter Example",
		desc: "Example of a possible job application ad",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Detailed Ad",
		desc: "Write a short few words about the position/company",
		// n: 1,
		prompts: [
			{ 
				title: "Company Name",
				attr: "company",
				value: "", 
				placeholder: "Google",
				label: "Examples: Google, Facebook, Amazon, Apple",
				maxLength: 40,
				min: 3,
				required: true,
				error: "",
				example: "Google",
			},
			{
				title: "Job Title",
				attr: "job",
				value: "",
				placeholder: "Junior Software Developer",
				label: "Examples: Developer, Data analyst, Accountant, Receptionist",
				maxLength: 40,
				min: 10,
				required: true,
				error: "",
				example: "Developer",
			},
			{ 
				title: "Job Description",
				attr: "description",
				value: "", 
				placeholder: "Creation and implementation of an update and maintenance concept for Linux Systems with a focus on high availability and flexibility",
				label: "The job description and requirements",
				type: "textarea",
				maxLength: 140,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "40k",
			},
			{ 
				title: "Skills or Experience", 
				attr: "skills",  
				value: "", 
				placeholder: "Computer science graduate, Javascript, React, etc",
				label: "Any specific skills or qualifications that are relevant to the position",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Tax Audit, Reports, MyOB",
			},
			{ 
				title: "Additional Information",
				attr: "additionalInfo",
				value: "", 
				placeholder: "During my time studying I tutored computer science students and worked on a variety of projects using React",
				label: "Additional information such as the company's mission statement or unique skills that you can use to tailor your letter",
				type: "textarea",
				maxLength: 300,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Adrian Smith adrian@smith.com",
			},
		],
		example: {
			output: `Dear Hiring Manager,

			I am writing to express my interest in the Graduate Software Engineer position at Genesys. After reading the job description, I am confident that my two years of experience in full stack development, as well as my background in computer science, make me an ideal candidate for the role.
			
			I have React, Node.js and Java experience, and understand the importance of writing code with scale, security and usability in mind. I am familiar with the workings of a high-class software development team and I am excited by the opportunity to work with the technology mentioned in the job description, such as Dynamo DB, S3, Kafka, CloudFormation & Jenkins.
			
			I am from South Africa but am willing to relocate for the role. I am passionate about engineering and believe I have the skills and attitude necessary to excel in this position. I look forward to discussing my qualifications and experience in greater detail.
			
			Thank you for your time and consideration.
			
			Sincerely,
			[Your Name]`
		}
	},
	{
		title:"Basic Cover Letter",
		desc: "Write a short few words about the ad",
		// n: 1,
		prompts: [
			{ 
				title: "Job Information",
				attr: "content",  
				value: "", 
				placeholder: "accountant 40k can do report, audit, myob, Smith and Co, contact Ryan ryan@co.com", 
				label: "Short description of the job and requirements",
				type: "textarea",
				maxLength: 400,
				// max: 100,
				// min: 1,
				required: true,
				error: "",
				example: "Junior Accountant earning $40k that does reports, audits, uses myob to work for Smith and Co contact John at john@smith.com",
			},
		],
		example: {
			output: `
			Dear Hiring Manager,

			I am writing to express my interest in the Graduate Software Engineer position at Genesys. After reading the job description, I am confident that my two years of experience in full stack development, as well as my background in computer science, make me an ideal candidate for the role.
			
			I have React, Node.js and Java experience, and understand the importance of writing code with scale, security and usability in mind. I am familiar with the workings of a high-class software development team and I am excited by the opportunity to work with the technology mentioned in the job description, such as Dynamo DB, S3, Kafka, CloudFormation & Jenkins.
			
			I am from South Africa but am willing to relocate for the role. I am passionate about engineering and believe I have the skills and attitude necessary to excel in this position. I look forward to discussing my qualifications and experience in greater detail.
			
			Thank you for your time and consideration.
			
			Sincerely,
			[Your Name]`
		}
	}]
		
}

export default obj

