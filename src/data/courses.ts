import type { Accent } from './accents';
import { contact, enrol } from './site';

export type Art = 'manuscript' | 'forest' | 'network' | 'trend' | 'bars' | 'loop';

export interface Course {
	slug: string;
	name: string;
	/** The course page's title, set as an AHA article title. */
	paperTitle: string;
	/** Keys into the abbreviations list for this page's box. */
	abbreviations: string[];
	/** The course page's journal colour, matching the course's icon. */
	accent: Accent;
	stage: 'Start' | 'Publish';
	/** One line: what the course is. Used in lists of courses. */
	tagline: string;
	/** The question a student brings to this course, used in the comparison table. */
	question: string;
	summary: string;
	art: Art;
	tint: string; // figure-palette band behind the icon
	ink: string;
	/** Shown in the course's booking panel. Fee is a separate field so it can lead. */
	fee: string;
	facts: { label: string; value: string }[];
	prerequisite: string;
	outcomes: string[];
	curriculum: { title: string; items: { title: string; body?: string }[] }[];
	afterClass: string;
	example?: { text: string; href: string };
	enrolHref: string;
	enrolLabel: string;
}

const askOnWhatsApp = contact.whatsapp.href;

export const courses: Course[] = [
	{
		slug: 'level-1',
		accent: 'green',
		paperTitle: 'Rationale and Design of Level 1, a Two-Day Introductory Course in Clinical Research',
		abbreviations: ['ICMJE', 'USMLE'],
		name: 'Level 1',
		stage: 'Start',
		tagline: 'The first course. Study design, writing and statistics in two days.',
		question: "I've never done research. Where do I start?",
		summary:
			'Level 1 is where every RC student starts. In two days you learn how clinical studies are designed, how to turn a question into a paper, and how to analyze a dataset in SPSS. More than 6,000 students have taken it.',
		art: 'manuscript',
		tint: 'bg-green/15',
		ink: 'text-green',
		fee: '$35',
		facts: [
			{ label: 'Length', value: '2 days, 6 hours each' },
			{ label: 'Time', value: '5:30 to 11:30 AM, U.S. Central' },
			{ label: 'Software', value: 'SPSS' },
			{ label: 'Where', value: 'Live on Zoom' },
		],
		prerequisite: 'None',
		outcomes: [
			'Write a letter to the editor, a case report or a cross-sectional study',
			'Pick the right study design for a research question',
			'Clean, describe and analyze a dataset in SPSS',
			'Read the methods and statistics of the papers you cite',
			'Plan USMLE Step 1 and Step 2 around your research',
		],
		curriculum: [
			{
				title: 'Day 1. Designing and writing',
				items: [
					{ title: 'Study designs', body: 'Case reports, cross-sectional studies, cohorts and trials, and what each one can show.' },
					{ title: 'Starting a paper', body: 'Choosing a question, searching the literature and writing a first draft.' },
					{ title: 'Getting published', body: 'Choosing a journal, submitting, answering reviewers and agreeing authorship.' },
					{ title: 'USMLE and research', body: 'How to fit Step 1 and Step 2 around a research plan.' },
				],
			},
			{
				title: 'Day 2. Working with data',
				items: [
					{ title: 'SPSS from the first screen', body: 'Entering, cleaning and coding variables.' },
					{ title: 'Describing and testing data', body: 'Summary statistics and the common tests, run live.' },
					{ title: 'Writing results', body: 'Turning your own output into a results paragraph.' },
					{ title: 'Your questions', body: 'Open time with the instructors for your own project.' },
				],
			},
		],
		afterClass:
			'Level 1 gives you enough to start a small study on your own. Mentored projects start in the method courses, which build on what Level 1 teaches.',
		enrolHref: enrol.level1,
		enrolLabel: 'Enroll in Level 1',
	},
	{
		slug: 'meta-analysis',
		accent: 'purple',
		paperTitle: 'Rationale and Design of the Meta-Analysis Masterclass, a Three-Day Course With Mentored Projects',
		abbreviations: ['PRISMA', 'ICMJE'],
		name: 'Meta-Analysis Masterclass',
		stage: 'Publish',
		tagline: 'Pool published trials into one answer. Three days, then a project.',
		question: 'What do the published trials show when you pool them?',
		summary:
			'A meta-analysis combines the results of published studies to answer one question. In three days you go from the statistics to a forest plot you built yourself. Then every student joins a mentored project group working toward a paper.',
		art: 'forest',
		tint: 'bg-purple/40',
		ink: 'text-purple-deep',
		fee: 'Pay online to reserve',
		facts: [
			{ label: 'Length', value: '3 days, 6 hours each' },
			{ label: 'Time', value: '5:00 to 11:00 AM, U.S. Central' },
			{ label: 'Software', value: 'RevMan, OpenMetaAnalyst' },
			{ label: 'Where', value: 'Live on Zoom' },
			{ label: 'Afterwards', value: 'A mentored project for every student' },
		],
		prerequisite: 'None. Level 1 helps.',
		outcomes: [
			'Run a meta-analysis on your own laptop, from search to forest plot',
			'Judge each study for bias and explain differences between them',
			'Write up a meta-analysis as a paper and an abstract',
			'Repeat the method on your next question without help',
		],
		curriculum: [
			{
				title: 'Day 1. Statistics',
				items: [
					{ title: 'The core ideas', body: 'Distributions, P values and confidence intervals.' },
					{ title: 'Effect measures', body: 'Odds ratios, risk ratios and mean differences, and when each one fits.' },
					{ title: 'Designing the review', body: 'A PICO question and which studies can be pooled.' },
				],
			},
			{
				title: 'Day 2. Building the review',
				items: [
					{ title: 'Searching and screening', body: 'A search you can reproduce, screened with PRISMA.' },
					{ title: 'Quality', body: 'Rating each study for risk of bias.' },
					{ title: 'Software', body: 'Review Manager and OpenMetaAnalyst, set up on your laptop.' },
				],
			},
			{
				title: 'Day 3. Analysis and writing',
				items: [
					{ title: 'Pooling', body: 'Fixed and random effects, and the forest plot.' },
					{ title: 'Heterogeneity', body: 'Why studies disagree. Subgroup, sensitivity and cumulative analyses.' },
					{ title: 'Meta-regression and bias', body: 'Explaining the differences, and funnel plots for publication bias.' },
				],
			},
		],
		afterClass:
			'Every student gets a project and a mentor. Small groups work under Dr. Shariq Usman and Dr. Tariq Siddiqi from the search to a submitted paper.',
		example: {
			text: 'One group pooled 32 studies of about 270,000 patients to ask whether blood thinners can be stopped after ablation for atrial fibrillation.',
			href: 'https://www.globalcardiology.info/site/article/view/115',
		},
		enrolHref: enrol.metaAnalysis,
		enrolLabel: 'Reserve your seat',
	},
	{
		slug: 'cdc-wonder',
		accent: 'teal',
		paperTitle: 'Rationale and Design of a Course in U.S. Mortality Research Using CDC WONDER',
		abbreviations: ['CDC WONDER', 'ICMJE'],
		name: 'CDC WONDER',
		stage: 'Publish',
		tagline: 'Study U.S. deaths since 1999 with free national data.',
		question: 'How have deaths from a disease changed in the U.S., and for whom?',
		summary:
			'CDC WONDER holds every U.S. death certificate since 1999, and anyone can use it for free. You learn to query it, calculate age-adjusted death rates and show how they change over time and between groups. Dr. Shahzeb Khan leads the course.',
		art: 'trend',
		tint: 'bg-teal/15',
		ink: 'text-teal',
		fee: '$100 in September 2025',
		facts: [
			{ label: 'Length', value: '3 days, 6 hours each' },
			{ label: 'Software', value: 'CDC WONDER, Joinpoint' },
			{ label: 'Where', value: 'Live on Zoom' },
			{ label: 'Afterwards', value: 'A mentored project group' },
		],
		prerequisite: 'Level 1',
		outcomes: [
			'Pull national death data by age, sex, race and region',
			'Calculate crude and age-adjusted death rates',
			'Find where a trend changes direction with joinpoint regression',
			'Write a trends and disparities paper in a mentored group',
		],
		curriculum: [
			{
				title: 'What you practice',
				items: [
					{ title: 'Choosing the right CDC WONDER dataset' },
					{ title: 'Building queries with ICD-10 codes' },
					{ title: 'Crude and age-adjusted death rates' },
					{ title: 'Trends over time and annual percent change' },
					{ title: 'Writing a trends and disparities paper' },
				],
			},
		],
		afterClass:
			'You join a project group when the course ends. Dr. Khan used the same database for a JAMA Cardiology paper that JAMA named one of its top 10 papers of 2022.',
		example: {
			text: 'One group studied 170,610 deaths linked to peritonitis from 1999 to 2023. The death rate fell until 2010, then rose.',
			href: 'https://doi.org/10.1186/s12982-026-02595-6',
		},
		enrolHref: askOnWhatsApp,
		enrolLabel: 'Ask about the next class',
	},
	{
		slug: 'nis',
		accent: 'rust',
		paperTitle: 'Rationale and Design of a Course in Hospital Outcomes Research Using the National Inpatient Sample',
		abbreviations: ['NIS', 'ICMJE'],
		name: 'National Inpatient Sample',
		stage: 'Publish',
		tagline: 'Study U.S. hospital stays, outcomes and costs in STATA.',
		question: 'How do hospital outcomes and costs differ between patients?',
		summary:
			'The National Inpatient Sample is the largest database of U.S. hospital stays, covering every kind of insurance. You learn how to get access, how the data are weighted, and how to compare outcomes, length of stay and costs in STATA.',
		art: 'bars',
		tint: 'bg-orange/15',
		ink: 'text-[#b3480f]',
		fee: 'Ask on WhatsApp',
		facts: [
			{ label: 'Length', value: '3 days, 6 hours each' },
			{ label: 'Software', value: 'STATA' },
			{ label: 'Where', value: 'Live on Zoom' },
			{ label: 'Afterwards', value: 'A mentored project group' },
		],
		prerequisite: 'Level 1',
		outcomes: [
			'Get access to the database and apply its survey weights',
			'Build a patient group from diagnosis and procedure codes',
			'Compare outcomes, length of stay and costs between groups',
			'Write an original paper in a mentored group',
		],
		curriculum: [
			{
				title: 'What you practice',
				items: [
					{ title: 'Getting access to the NIS' },
					{ title: 'How the sample is drawn, and why weights matter' },
					{ title: 'Building a cohort with ICD-10 codes' },
					{ title: 'Regression for outcomes and length of stay' },
					{ title: 'Cost analysis' },
				],
			},
		],
		afterClass:
			'Every student joins a project group with a mentor. Recent groups studied 1.8 million admissions for heart attack and 147,420 for aortic aneurysm.',
		example: {
			text: 'One group studied 226,115 hernia repairs. Patients on Medicaid had more complications and longer stays than privately insured patients.',
			href: 'https://www.instagram.com/researchconsultancyrc/',
		},
		enrolHref: askOnWhatsApp,
		enrolLabel: 'Ask about the next class',
	},
	{
		slug: 'nrd',
		accent: 'magenta',
		paperTitle: 'Rationale and Design of a Course in Readmissions Research Using the Nationwide Readmissions Database',
		abbreviations: ['NRD', 'NIS', 'ICMJE'],
		name: 'Nationwide Readmissions Database',
		stage: 'Publish',
		tagline: 'Follow patients back to hospital after discharge.',
		question: 'Which patients come back to hospital, and why?',
		summary:
			"The Nationwide Readmissions Database follows each patient across U.S. hospitals for a year, so you can see who comes back after discharge. You learn to define the first admission, calculate 30-day and 90-day readmission rates and find what predicts a return.",
		art: 'loop',
		tint: 'bg-pink/15',
		ink: 'text-[#b8228a]',
		fee: 'Ask on WhatsApp',
		facts: [
			{ label: 'Length', value: '2 days, 6 hours each' },
			{ label: 'Software', value: 'STATA' },
			{ label: 'Where', value: 'Live on Zoom' },
			{ label: 'Afterwards', value: 'A mentored project group' },
		],
		prerequisite: 'Level 1. The NIS course helps.',
		outcomes: [
			'Get access to the database and find your way around it',
			'Link a first admission to later readmissions',
			'Calculate 30-day and 90-day readmission rates',
			'Find what predicts readmission and what it costs',
		],
		curriculum: [
			{
				title: 'What you practice',
				items: [
					{ title: 'Getting access to the NRD' },
					{ title: 'How the database links patients across hospitals' },
					{ title: 'Defining first admissions and readmission windows' },
					{ title: 'Predictors of readmission' },
					{ title: 'Costs of readmission' },
				],
			},
		],
		afterClass:
			'Groups work under Dr. Jawad Ahmed. In 2026, NRD projects were presented at ASH, AAN and ACC and published in Blood and Neurology.',
		example: {
			text: 'One group studied nearly 30,000 admissions for clot removal after stroke and found what predicted a return to hospital within 30 days.',
			href: 'https://doi.org/10.1212/WNL.0000000000217891',
		},
		enrolHref: askOnWhatsApp,
		enrolLabel: 'Ask about the next class',
	},
];

// How every method course runs, from the live class to a submitted paper.
export const method = [
	{ title: 'Learn', body: 'A live class teaches the method.' },
	{ title: 'Apply', body: 'You join a project group and run the analysis yourself.' },
	{ title: 'Revise', body: 'A mentor who has published the same kind of paper checks each draft.' },
	{ title: 'Submit', body: 'The group sends the paper to a PubMed-indexed journal, and the abstract to a conference.' },
];
