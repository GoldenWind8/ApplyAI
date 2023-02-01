
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/business/coverletter', async (req, res, next) => {
	let { content, currentPrompt, company, job, description, skills, additionalInfo} = req.body
  
	let prompt = ""
	let inputRaw = ""

	if(currentPrompt === "Basic Ad"){
		prompt = `Create a detailed Job Ad from the text:\n###\n` +
				  `TEXT: moshi marketing agency position $40k web developer knows lots of front end, html, react, etc can work alone\nJOB AD:\nMoshi is looking for a candidate to join our exciting Marketing Agency working programming on the front end. If you are looking for a Front End position, you will get the chance to build websites designed by our amazing team on platforms such as WordPress, Shopify and more.\n\nThe Role:\n- Create Websites using latest coding standards\n- Use technology stacks such as React, Angular, Vue \n- Work on small and large projects with a team\n\nTechnical Requirements:\n- Understanding in HTML, CSS, JS\n- Experience in libraries like React & TypeScript\n- Experience in Azure or AWS\n\nHow to apply:\nIf you are interested, you can apply by contacting us directly at Moshi.\n###\n` +
				  `TEXT: smiths & co leadership job for a financial planner manager that helps with budgets, liases with managers, helps the ceo, is local in australia. contact is james@s.com\nJOB AD:\nWell established in the Australian financial industry, Smith & Co has seen significate internal movement and revenue growth over the past year and is looking to bring on an develop top talent. This is a career building opportunity for an experience candidate seeking progression.\n\nThe Role:\n- Report directly to the Chief Financial Officer\n- Drive the budgeting and forecasting process\n- Liaise with Business Unit Managers to drive process improvements\n- Work with the Executive team to develop a balanced scorecard\n- Review existing systems and recommend changes\n\nSkills and Experience:\n- Proven Experience in a senior finance role\n- Ability to develop meaningful FP&P reporting and detailed analysis\n- Experience in the retail industry would be an advantage\n\nHow to apply:\nDoes this sound like you? Please apply now below by contacting us at Smiths & Co or email james@s.com\n###\n`

	  inputRaw = `TEXT: ${content}\nJOB AD:\n`
	  prompt += inputRaw
	  
	}
  
	if(currentPrompt === "Detailed Ad"){
		//prompt="Company name: Google\nJob description:  We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.\n\nWith your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions.\nSkills: Java,  Bachelors Degree in computer science, React Js\nAdditional Information: I was top of my math class. 3 years work experience\n\n\nPlease write me a cover letter:\n\nDear Team at Google,\n\nI am applying for the Software Engineer position and I believe I have the necessary skills to be a great addition to the team. I am a Bachelor's degree holder in Computer Science and boast a strong technical expertise in Java and React JS. I also have three years of work experience in the software engineering field.\n\nI find the job description very interesting and believe I have the right skills to apply my knowledge to its fullest potential. My ability to work on projects with tight deadlines and to manage project priorities makes me a strong candidate for this job. Additionally, I have a knack for problem-solving and am not afraid to tackle new challenges.\n\nI was at the top of my mathematics class in school, which gave me the confidence to take up software engineering as a career. I am a quick learner and believe that I can become a great asset to Google.\n\nThank you for your time and consideration. I look forward to hearing from you.\n\nSincerely,\n[Your Name]\n",
		prompt =""
		inputRaw = `Company Name: ${company}\nJob Title: ${job}\nJob Description: ${description}\nSkills: ${skills}\nAdditional Information: ${additionalInfo}\nPlease write me a cover letter: \n`
	  prompt += inputRaw
	}
  
	
  
	const gptResponse = await openai.complete({
		engine: 'davinci',
		prompt,
		maxTokens: 250,
		temperature: 0.5,
		topP: 1,
		frequencyPenalty: 0.2,
		presencePenalty: 0,
		bestOf: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>","Cover Letter","TEXT" ],
	});
  
	let output = `${gptResponse.data.choices[0].text}`

	console.log(output, prompt)
	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()
	
  })

  module.exports = app