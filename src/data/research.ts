// Publications and outcomes. Titles verified against Crossref and PubMed; stories from RC's own posts.

export interface Paper {
	title: string;
	authors: string;
	journal: string;
	year: number;
	href: string;
	kind: string;
	note?: string;
}

// Vancouver style, as the students learn to write them.
export const menteePapers: Paper[] = [
	{
		title: 'Combining coronary calcium score with treatment in familial coronary artery disease',
		authors: 'Yadav A, Usman MS, Gupta R',
		journal: 'JAMA',
		year: 2025,
		href: 'https://doi.org/10.1001/jama.2025.6482',
		kind: 'Letter',
		note: 'The first author trained in RC workshops.',
	},
	{
		title: 'Patient-reported outcomes as end points in heart failure trials',
		authors: 'Butler J, Usman MS, Gandotra C, Salman A, et al.',
		journal: 'Circulation',
		year: 2025,
		href: 'https://doi.org/10.1161/circulationaha.124.072158',
		kind: 'Review',
		note: 'Co-authored by an RC mentee in the fourth year of medical school.',
	},
	{
		title: 'Predictors and outcomes of 30-day readmissions in patients hospitalized for acute ischemic stroke undergoing mechanical thrombectomy',
		authors: 'Jamil A, Javed, Alam, Awais, et al.',
		journal: 'Neurology',
		year: 2026,
		href: 'https://doi.org/10.1212/WNL.0000000000217891',
		kind: 'NRD',
		note: 'Nearly 30,000 admissions. Presented at AAN 2026.',
	},
	{
		title: 'Obesity adversely affects dietary metabolism: time to inform guidelines?',
		authors: 'Gupta R, Yadav A, et al.',
		journal: 'Journal of the American Heart Association',
		year: 2025,
		href: 'https://doi.org/10.1161/JAHA.125.045359',
		kind: 'Editorial',
	},
	{
		title: 'National trends and disparities in mortality associated with peritonitis in the United States from 1999 to 2023',
		authors: 'Chowdhary R, Leong XB, Cheema AA, et al.',
		journal: 'Discover Public Health',
		year: 2026,
		href: 'https://doi.org/10.1186/s12982-026-02595-6',
		kind: 'CDC WONDER',
		note: '170,610 deaths analyzed.',
	},
	{
		title: 'Safety of discontinuing oral anticoagulation after atrial fibrillation ablation: an updated systematic review and meta-analysis',
		authors: 'Cheema AAA, Cheema AA, Shahab A, Sohail S, et al.',
		journal: 'Global Cardiology',
		year: 2026,
		href: 'https://www.globalcardiology.info/site/article/view/115',
		kind: 'Meta-analysis',
		note: '32 studies, about 270,000 patients.',
	},
	{
		title: 'Letter: unmasking the risks. The need for robust data on baclofen in cirrhotic patients',
		authors: 'Salman Z',
		journal: 'Alimentary Pharmacology & Therapeutics',
		year: 2026,
		href: 'https://doi.org/10.1111/apt.70693',
		kind: 'Letter',
		note: 'Written as sole author after Level 1.',
	},
	{
		title: 'In-hospital initiation of sodium-glucose co-transporter-2 inhibitors in patients with acute heart failure',
		authors: 'Arshad MS, Jamil A, Greene SJ, Van Spall HGC, Khan MS',
		journal: 'Heart Failure Reviews',
		year: 2024,
		href: 'https://doi.org/10.1007/s10741-024-10446-2',
		kind: 'Review',
	},
	{
		title: 'Trends in mortality due to inflammatory bowel disease in the United States: a CDC WONDER database analysis (1999–2020)',
		authors: 'Javaid SS, Akhtar S, Hafeez A, Nofal A, et al.',
		journal: 'Digestive Diseases and Sciences',
		year: 2025,
		href: 'https://doi.org/10.1007/s10620-024-08803-0',
		kind: 'CDC WONDER',
		note: 'Authors from 13 universities.',
	},
	{
		title: 'Prophylactic local antibiotic therapy in tissue expander-based breast reconstruction: a systematic review and meta-analysis',
		authors: 'Salim H, Gillani SM, Qureshi MT, et al.',
		journal: 'Aesthetic Plastic Surgery',
		year: 2026,
		href: 'https://doi.org/10.1007/s00266-026-06074-w',
		kind: 'Meta-analysis',
	},
	{
		title: 'Trends in rheumatic heart disease-related mortality in the United States from 1999 to 2020',
		authors: 'Larik MO, Amir MA, Majeed Y, et al.',
		journal: 'Current Problems in Cardiology',
		year: 2024,
		href: 'https://doi.org/10.1016/j.cpcardiol.2023.102148',
		kind: 'CDC WONDER',
	},
	{
		title: "Association of bilateral oophorectomy with incidence of Parkinson's disease: a systematic review and meta-analysis",
		authors: 'Ali A, Tabassum SA, Rehman Z, et al.',
		journal: 'Parkinsonism & Related Disorders',
		year: 2024,
		href: 'https://doi.org/10.1016/j.parkreldis.2024.106025',
		kind: 'Meta-analysis',
	},
];

export const facultyPapers: Paper[] = [
	{
		title: 'Did finerenone improve health status in the FINEARTS trial? A critical reevaluation of the analysis of patient-reported outcomes in heart failure',
		authors: 'Usman MS, Butler J, Harrell FE, Packer M',
		journal: 'Journal of the American College of Cardiology',
		year: 2025,
		href: 'https://doi.org/10.1016/j.jacc.2024.12.005',
		kind: 'Faculty',
	},
	{
		title: 'Patient enrollment for cardiovascular clinical trials in the United States',
		authors: 'Khan MS, Jamil A, Shakoor, et al.',
		journal: 'JAMA Cardiology',
		year: 2025,
		href: 'https://doi.org/10.1001/jamacardio.2024.5537',
		kind: 'Faculty',
	},
	{
		title: 'The effect of SGLT2 inhibitors on left cardiac remodelling in heart failure with reduced ejection fraction: systematic review and meta-analysis',
		authors: 'Usman MS, Januzzi JL, Anker SD, Salman A, et al.',
		journal: 'European Journal of Heart Failure',
		year: 2024,
		href: 'https://doi.org/10.1002/ejhf.3129',
		kind: 'Faculty',
	},
	{
		title: 'Effect of SGLT2 inhibitors on cardiovascular outcomes across various patient populations',
		authors: 'Usman MS, Siddiqi TJ, Anker SD, et al.',
		journal: 'Journal of the American College of Cardiology',
		year: 2023,
		href: 'https://doi.org/10.1016/j.jacc.2023.04.034',
		kind: 'Faculty',
	},
];

// Four mentees' paths from their first RC course, for the swimmer plot on Results.
// Dates are month-precise where RC's posts give a month; `approx` marks a year-only date,
// drawn at mid-year.
export type Milestone = 'course' | 'abstract' | 'paper' | 'mentor' | 'outcome';

export interface MenteePath {
	name: string;
	origin: string;
	/** Where the lane ends, as two lines: the role, then the place. */
	outcome: [string, string];
	events: { at: string; kind: Milestone; what: string; approx?: boolean }[];
}

export const paths: MenteePath[] = [
	{
		name: 'Laibah Arshad Khan',
		origin: 'Graduate, King Edward MU',
		outcome: ['Matched in Internal Medicine', 'Yale New Haven Hospital'],
		events: [
			{ at: '2022-10', kind: 'course', what: 'Took Level 1' },
			{ at: '2023-06', kind: 'mentor', what: 'Became a mentor; led more than 20 project groups', approx: true },
			{ at: '2024-06', kind: 'outcome', what: 'Research fellowship, University of Mississippi Medical Center, with rotations at Duke', approx: true },
			{ at: '2026-03', kind: 'outcome', what: 'Matched in Internal Medicine at Yale New Haven Hospital' },
		],
	},
	{
		name: 'Asad Cheema',
		origin: 'Graduate, Intl. University of Kyrgyzstan',
		outcome: ['Paid research fellowship', 'University of Oklahoma'],
		events: [
			{ at: '2024-08', kind: 'course', what: 'Took Level 1 with no research experience' },
			{ at: '2024-12', kind: 'abstract', what: 'Four abstracts accepted, at ACP, Heart Rhythm, DDW and ASCO' },
			{ at: '2025-01', kind: 'paper', what: 'First PubMed-indexed paper' },
			{ at: '2025-02', kind: 'mentor', what: 'Became a mentor; later Head Mentor, guiding more than 150 students' },
			{ at: '2026-08', kind: 'outcome', what: 'Paid research fellowship at the University of Oklahoma Health Sciences Center, with 35 papers' },
		],
	},
	{
		name: 'Adeena Jamil',
		origin: 'Year 2, Dow International MC',
		outcome: ['Postdoctoral researcher', 'Baylor Scott & White'],
		events: [
			{ at: '2022-06', kind: 'course', what: 'Took Level 1 in second year', approx: true },
			{ at: '2024-06', kind: 'paper', what: 'First PubMed-indexed paper', approx: true },
			{ at: '2024-05', kind: 'mentor', what: 'After leading the ambassador program, began mentoring project groups; more than 100 students since' },
			{ at: '2026-06', kind: 'outcome', what: 'Postdoctoral researcher at Baylor Scott & White Research Institute, with 24 papers', approx: true },
		],
	},
	{
		name: 'Ali Salman',
		origin: 'Year 1, Dow Medical College',
		outcome: ['Head Mentor', 'Papers in EJHF and Circulation'],
		events: [
			{ at: '2022-05', kind: 'course', what: 'Took Level 1' },
			{ at: '2022-07', kind: 'course', what: 'Took the Meta-Analysis Masterclass' },
			{ at: '2023-07', kind: 'mentor', what: 'Became a mentor' },
			{ at: '2023-11', kind: 'abstract', what: 'Presented three abstracts at AHA Scientific Sessions' },
			{ at: '2024-01', kind: 'paper', what: 'First paper, in the European Journal of Heart Failure' },
			{ at: '2025-04', kind: 'outcome', what: 'Paper in Circulation, with FDA co-authors' },
			{ at: '2025-08', kind: 'mentor', what: 'Appointed Head Mentor; founded the Research Analyst team in 2024' },
		],
	},
];

export const events = [
	{ photo: 'events/cheema-hrs-2025.jpg', caption: 'Asad Cheema with a poster at Heart Rhythm 2025, eight months after taking Level 1.' },
	{ photo: 'events/leadership-aha-2023.jpg', caption: 'RC faculty and mentees at the American Heart Association Scientific Sessions, 2023.' },
	{ photo: 'events/sheraz-acg-2025.jpg', caption: 'Sheraz Hakeem with a first-author poster at the American College of Gastroenterology meeting, 2025.' },
	{ photo: 'events/ali-aha-2023.jpg', caption: 'Ali Salman presenting one of three abstracts at AHA Scientific Sessions, 2023.' },
	{ photo: 'events/izza-presentation.jpg', caption: 'Izza Shahid presenting research at a scientific meeting.', position: '88% 40%' },
	{ photo: 'events/shahzeb-cvct.jpg', caption: 'Dr. Shahzeb Khan on a panel at the CVCT Forum.' },
];

export const awards = [
	{ title: 'Paul Dudley White International Scholar Award, 2024', detail: "The American Heart Association gives this award to the highest-ranked abstract from each country. Mentees won it for a CDC WONDER analysis of mortality from pericardial disease." },
	{ title: '40 abstracts at ACC.25', detail: 'All 40 were published in JACC. In 2024, more than 50 mentee abstracts were accepted at AHA Scientific Sessions.' },
	{ title: 'Correspondence in The Lancet, 2025', detail: "Mentees wrote on Sudan's measles epidemic and children who have had no vaccine doses. Other mentees have published in The Lancet Psychiatry." },
	{ title: 'First place for best abstract poster', detail: 'Mohammad Saad Javaid, APPNA Young Physicians Committee, chosen from 90 submissions.' },
	{ title: "One of JAMA's top 10 papers of 2022", detail: "Dr. Shahzeb Khan's CDC WONDER analysis in JAMA Cardiology." },
	{ title: 'Faculty at HFSA 2025', detail: 'Dr. Khan presented a study of intravenous ferric carboxymaltose at the Heart Failure Society of America meeting.' },
];

