import { enrol } from './site';

export type Art = 'manuscript' | 'forest' | 'network' | 'trend' | 'bars' | 'loop';

export interface Course {
	slug: string;
	name: string;
	stage: 'Start' | 'Publish';
	/** One line under the title: what the course is. */
	tagline: string;
	/** The question a student brings to this course, used in the comparison table. */
	question: string;
	summary: string;
	art: Art;
	tint: string; // figure-palette band behind the illustration
	ink: string;
	facts: { label: string; value: string }[];
	prerequisite: string;
	outcomes: string[];
	curriculum: { title: string; items: { title: string; body?: string }[] }[];
	afterClass?: string;
	example?: { text: string; href: string };
	enrolHref?: string;
	enrolLabel?: string;
}

export const courses: Course[] = [
	{
		slug: 'level-1',
		name: 'Level 1',
		stage: 'Start',
		tagline: 'Two days on study design, writing and SPSS.',
		question: 'I have never done research. Where do I start?',
		summary:
			'Level 1 is where every RC student starts. Over two mornings you learn how clinical studies are designed, how to turn a question into a manuscript, and how to clean and analyse a dataset in SPSS. More than 6,000 students have taken it.',
		art: 'manuscript',
		tint: 'bg-green/15',
		ink: 'text-green',
		facts: [
			{ label: 'Length', value: '2 days, 6 hours each' },
			{ label: 'Schedule', value: '5:30 to 11:30 AM, U.S. Central' },
			{ label: 'Format', value: 'Live on Zoom' },
			{ label: 'Fee', value: '$35' },
		],
		prerequisite: 'None.',
		outcomes: [
			'Draft a letter to the editor, a case report, an audit or a cross-sectional study',
			'Match a research question to a study design',
			'Clean, describe and analyse a dataset in SPSS',
			'Read the methods and statistics of the papers you cite',
			'Plan for USMLE Step 1 and Step 2 and for postgraduate training in the U.S. or U.K.',
		],
		curriculum: [
			{
				title: 'Day 1. Designing and writing',
				items: [
					{ title: 'How clinical studies are designed', body: 'Case reports, cross-sectional studies, cohorts and trials, and what each can show.' },
					{ title: 'Starting a manuscript', body: 'Choosing a question, reading the literature and writing the first draft.' },
					{ title: 'The route to publication', body: 'Journals, submission, peer review and authorship.' },
					{ title: 'USMLE Step 1 and Step 2', body: 'How to plan exams around research.' },
				],
			},
			{
				title: 'Day 2. Working with data',
				items: [
					{ title: 'SPSS from the first screen', body: 'Entering, cleaning and coding variables.' },
					{ title: 'Describing and testing data', body: 'Summary statistics and the common tests, run live.' },
					{ title: 'From analysis to results', body: 'Writing a results paragraph from your own output.' },
					{ title: 'Questions for the instructors', body: 'Open time for your own project.' },
				],
			},
		],
		afterClass:
			'Level 1 teaches you to start research on your own. Mentored projects aimed at publication begin in the method courses, which assume what Level 1 covers.',
		enrolHref: enrol.level1,
		enrolLabel: 'Enrol in Level 1',
	},
	{
		slug: 'meta-analysis',
		name: 'Meta-Analysis Masterclass',
		stage: 'Publish',
		tagline: 'Three days of method, then a mentored project.',
		question: 'What does the published evidence show when it is pooled?',
		summary:
			'In three live mornings you go from the statistics behind a meta-analysis to a forest plot you built yourself. When the class ends, every student joins a mentored project group that works toward a PubMed-indexed paper.',
		art: 'forest',
		tint: 'bg-purple/40',
		ink: 'text-purple-deep',
		facts: [
			{ label: 'Length', value: '3 days, 6 hours each' },
			{ label: 'Schedule', value: '5:00 to 11:00 AM, U.S. Central' },
			{ label: 'Format', value: 'Live on Zoom' },
			{ label: 'Afterwards', value: 'A mentored project for every student' },
		],
		prerequisite: 'No research experience needed. Level 1 helps.',
		outcomes: [
			'Run a meta-analysis on your own laptop, through to network meta-analysis',
			'Join a mentored project group working toward a PubMed-indexed paper',
			'Prepare an abstract for a conference',
			'Repeat the method on your next question without help',
		],
		curriculum: [
			{
				title: 'Day 1. Statistics',
				items: [
					{ title: 'The core ideas', body: 'Distributions, P values and confidence intervals.' },
					{ title: 'Effect measures', body: 'Odds ratios, risk ratios and mean differences, and when each fits.' },
					{ title: 'Designing the review', body: 'The PICO question and which studies can be pooled.' },
				],
			},
			{
				title: 'Day 2. Building the review',
				items: [
					{ title: 'Searching and screening', body: 'A reproducible search, screened with PRISMA.' },
					{ title: 'Data extraction', body: 'Turning each study into the numbers the analysis needs.' },
					{ title: 'Software set-up', body: 'Installing the software with a mentor so day 3 runs on your laptop.' },
				],
			},
			{
				title: 'Day 3. Analysis and writing',
				items: [
					{ title: 'Pooling', body: 'Fixed and random effects, and building the forest plot.' },
					{ title: 'Heterogeneity and bias', body: 'I², subgroup and sensitivity analyses, and funnel plots.' },
					{ title: 'Writing it up', body: 'Structuring the paper and choosing a journal.' },
				],
			},
		],
		afterClass:
			'Every student is assigned a project and a mentor, whatever their score in class. Small groups work under Dr. Shariq Usman and Dr. Tariq Siddiqi from the search to a submitted manuscript.',
		example: {
			text: 'One mentee group pooled 32 studies of about 270,000 patients to ask whether anticoagulation can be stopped after atrial fibrillation ablation.',
			href: 'https://www.globalcardiology.info/site/article/view/115',
		},
		enrolHref: enrol.metaAnalysis,
		enrolLabel: 'Reserve a seat',
	},
	{
		slug: 'cdc-wonder',
		name: 'CDC WONDER',
		stage: 'Publish',
		tagline: 'U.S. death records since 1999, by age, sex, race and place.',
		question: 'How have deaths from a disease changed in the U.S., and for whom?',
		summary:
			'CDC WONDER holds U.S. death certificate data from 1999 onward and is free to use. You learn to query it, calculate age-adjusted mortality rates and describe how they change over time and between groups. Dr. Shahzeb Khan leads the course.',
		art: 'trend',
		tint: 'bg-teal/15',
		ink: 'text-teal',
		facts: [
			{ label: 'Format', value: 'Live masterclass on Zoom' },
			{ label: 'Data', value: 'U.S. death certificates, 1999 onward' },
			{ label: 'Afterwards', value: 'Mentored project groups' },
			{ label: 'Fee', value: '$100 (September 2025 cohort)' },
		],
		prerequisite: 'Level 1.',
		outcomes: [
			'Query national mortality data by age, sex, race and region',
			'Calculate crude and age-adjusted mortality rates',
			'Describe trends over time with joinpoint regression',
			'Write a disparities paper in a mentored group',
		],
		curriculum: [
			{
				title: 'What you practise',
				items: [
					{ title: 'Choosing the right CDC WONDER dataset' },
					{ title: 'Building queries with ICD-10 codes' },
					{ title: 'Crude and age-adjusted mortality rates' },
					{ title: 'Trends over time and annual percent change' },
					{ title: 'Writing up a disparities paper' },
				],
			},
		],
		afterClass:
			'You join a project group when the workshop ends. Dr. Khan used the same database for a JAMA Cardiology paper that JAMA listed among its top 10 papers of 2022.',
		example: {
			text: 'One mentee group analysed 170,610 peritonitis-related deaths from 1999 to 2023. Mortality fell until 2010, then rose.',
			href: 'https://doi.org/10.1186/s12982-026-02595-6',
		},
		enrolLabel: 'Ask about the next cohort',
	},
	{
		slug: 'nis',
		name: 'National Inpatient Sample',
		stage: 'Publish',
		tagline: 'Weighted U.S. hospital data, analysed in STATA.',
		question: 'How do in-hospital outcomes and costs differ between patients?',
		summary:
			'The National Inpatient Sample is the largest all-payer inpatient database in the U.S. You learn how its discharges are coded and weighted, then analyse outcomes, length of stay and costs in STATA. RC was the first to teach this course to international medical graduates.',
		art: 'bars',
		tint: 'bg-orange/15',
		ink: 'text-[#b3480f]',
		facts: [
			{ label: 'Format', value: 'Live workshop on Zoom' },
			{ label: 'Data', value: 'U.S. hospital discharges, all payers' },
			{ label: 'Software', value: 'STATA' },
			{ label: 'Afterwards', value: 'Mentored project groups' },
		],
		prerequisite: 'Level 1.',
		outcomes: [
			'Apply survey weights to national discharge data',
			'Build a cohort from diagnosis and procedure codes',
			'Compare in-hospital outcomes, length of stay and costs',
			'Write an original paper in a mentored group',
		],
		curriculum: [
			{
				title: 'What you practise',
				items: [
					{ title: 'How the sample is drawn, and why weights matter' },
					{ title: 'Building a cohort with ICD-10 codes' },
					{ title: 'Regression for outcomes and length of stay' },
					{ title: 'Cost analysis' },
				],
			},
		],
		afterClass:
			'Every student joins a project group with a mentor. Recent groups studied 1.8 million admissions for myocardial infarction and 147,420 admissions for aortic aneurysm.',
		example: {
			text: 'One mentee group analysed 226,115 hernia repairs. Medicaid patients had more complications and longer stays than privately insured patients.',
			href: 'https://www.instagram.com/researchconsultancyrc/',
		},
		enrolLabel: 'Ask about the next cohort',
	},
	{
		slug: 'nrd',
		name: 'Nationwide Readmissions Database',
		stage: 'Publish',
		tagline: 'Readmissions tracked across U.S. hospitals.',
		question: 'Which patients come back to hospital, and why?',
		summary:
			'The Nationwide Readmissions Database links a patient\'s admissions across hospitals within a year. You learn to define an index admission, calculate 30-day and 90-day readmission rates and find what predicts a return.',
		art: 'loop',
		tint: 'bg-pink/15',
		ink: 'text-[#b8228a]',
		facts: [
			{ label: 'Format', value: 'Live workshop on Zoom' },
			{ label: 'Data', value: 'Linked U.S. hospital admissions' },
			{ label: 'Software', value: 'STATA' },
			{ label: 'Afterwards', value: 'Mentored project groups' },
		],
		prerequisite: 'Level 1. The NIS course helps.',
		outcomes: [
			'Link index admissions to later readmissions',
			'Calculate 30-day and 90-day readmission rates',
			'Model predictors of readmission and its cost',
		],
		curriculum: [
			{
				title: 'What you practise',
				items: [
					{ title: 'How the database links patients across hospitals' },
					{ title: 'Defining index admissions and readmission windows' },
					{ title: 'Predictors of readmission' },
					{ title: 'Costs of readmission' },
				],
			},
		],
		afterClass:
			'Groups work under Dr. Jawad Ahmed. In 2026, NRD projects were presented at ASH, AAN and ACC and published in Blood and Neurology.',
		example: {
			text: 'One mentee group studied nearly 30,000 admissions for thrombectomy after stroke and reported what predicted readmission within 30 days.',
			href: 'https://doi.org/10.1212/WNL.0000000000217891',
		},
		enrolLabel: 'Ask about the next cohort',
	},
];

export const courseBySlug = (slug: string) => courses.find((c) => c.slug === slug);

export const method = [
	{ title: 'Learn', body: 'A live workshop teaches the method.' },
	{ title: 'Apply', body: 'You join a project group and do the analysis yourself.' },
	{ title: 'Revise', body: 'A mentor who has published the same kind of paper reviews each draft.' },
	{ title: 'Publish', body: 'The group submits to a PubMed-indexed journal and a conference.' },
];
