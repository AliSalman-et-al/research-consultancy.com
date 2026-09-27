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
		note: '170,610 deaths analysed.',
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

export interface Story {
	name: string;
	portrait: string;
	steps: { when: string; what: string }[];
}

export const stories: Story[] = [
	{
		name: 'Dr. Laibah Arshad Khan',
		portrait: 'match/laibah-arshad-khan.jpg',
		steps: [
			{ when: 'October 2022', what: 'Took Level 1 as a graduate of King Edward Medical University.' },
			{ when: '2023', what: 'Became an RC mentor and led more than 20 group projects.' },
			{ when: '2024-25', what: 'Held a research fellowship at the University of Mississippi Medical Center and did clinical rotations at Duke.' },
			{ when: 'March 2026', what: 'Matched into Internal Medicine at Yale New Haven Hospital.' },
		],
	},
	{
		name: 'Dr. Asad Ali Ahmed Cheema',
		portrait: 'people/asad-cheema.jpg',
		steps: [
			{ when: 'August 2024', what: 'Took Level 1 with no research experience.' },
			{ when: 'April 2025', what: 'Presented a poster at Heart Rhythm 2025.' },
			{ when: '2025', what: 'Worked on more than 55 projects, published 35 PubMed-indexed papers and became Head Mentor.' },
			{ when: 'August 2026', what: 'Started a paid research fellowship at the University of Oklahoma Health Sciences Center.' },
		],
	},
	{
		name: 'Dr. Adeena Jamil',
		portrait: 'fellows/adeena-jamil.jpg',
		steps: [
			{ when: 'Second year', what: 'Took Level 1, then led the student ambassador programme.' },
			{ when: 'By 2026', what: 'Published 24 PubMed-indexed papers, including in the European Heart Journal and JAMA Cardiology, and presented 14 abstracts at AHA, ACC, AAN and ASCO.' },
			{ when: 'Alongside', what: 'Mentored more than 250 students.' },
			{ when: 'Now', what: 'Postdoctoral researcher at Baylor Scott & White Research Institute.' },
		],
	},
];

export const events = [
	{ photo: 'events/cheema-hrs-2025.jpg', caption: 'Asad Cheema with a poster at Heart Rhythm 2025, eight months after taking Level 1.' },
	{ photo: 'events/leadership-aha-2023.jpg', caption: 'RC faculty and mentees at the American Heart Association Scientific Sessions, 2023.' },
	{ photo: 'events/sheraz-acg-2025.jpg', caption: 'Sheraz Hakeem with a first-author poster at the American College of Gastroenterology meeting, 2025.' },
	{ photo: 'events/ali-aha-2023.jpg', caption: 'Ali Salman presenting one of three abstracts at AHA Scientific Sessions, 2023.' },
	{ photo: 'events/izza-presentation.jpg', caption: 'Izza Shahid presenting research at a scientific meeting.' },
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

export const yearInReview = [
	{ value: '20', label: 'workshops' },
	{ value: '150+', label: 'peer-reviewed papers' },
	{ value: '100+', label: 'conference abstracts' },
];
