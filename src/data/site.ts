// Site-wide facts. Sources: research-consultancy.org, RC's Instagram and its programmes' records,
// and M. S. Khan, "Fostering the next generation of physician-scientists in developing
// countries", ACC Fellows in Training Section, January 2024.

export const contact = {
	whatsapp: { label: '+1 949-898-9375', href: 'https://wa.me/19498989375' },
	matchWhatsapp: { label: '+1 601-714-5285', href: 'https://wa.me/16017145285' },
	email: 'contactresearchconsultancy@gmail.com',
};

export const social = {
	instagram: 'https://www.instagram.com/researchconsultancyrc/',
	facebook: 'https://www.facebook.com/researchconsultancyrc',
	linkedin: 'https://www.linkedin.com/company/research-consultancy-rc/',
};

// Enrolment still runs through the current site's checkout pages.
export const enrol = {
	level1: 'https://research-consultancy.org/classes/level-1/',
	metaAnalysis: 'https://buy.stripe.com/14AfZhfOk1Rjckw1O8f7i0c',
	match: 'https://research-consultancy.org/static-pages/rc-match-mentorship/',
};

export const accArticle =
	'https://www.acc.org/membership/sections-and-councils/fellows-in-training-section/section-updates/2024/01/22/19/04/fostering-the-next-generation-of-physician-scientists-in-developing-countries';

export const nav = [
	{ label: 'Courses', href: '/courses' },
	{ label: 'Match Mentorship', href: '/match-mentorship' },
	{ label: 'Mentors', href: '/mentors' },
	{ label: 'Results', href: '/results' },
	{ label: 'About', href: '/about' },
];

export const stats = [
	{ value: '3,500+', label: 'students mentored since 2016' },
	{ value: '600+', label: 'papers published by mentees' },
	{ value: '20+', label: 'mentees in U.S. postdoctoral posts' },
	{ value: '90%', label: 'of the 2024-25 Match cohort matched' },
];

export const journals = ['JACC', 'JAMA', 'JAMA Cardiology', 'Circulation', 'European Heart Journal', 'The Lancet'];

// Quoted word for word from RC's course pages and posts.
export const testimonials = [
	{
		quote: "When I say this is the first time I've actually understood statistics, that would not be an understatement.",
		name: 'Hafiza Madiha Aslam',
		role: 'Medical student',
	},
	{
		quote:
			'I came into the workshops thinking I would only get oriented to the daunting world of research and left feeling like an expert! The entire course felt like climbing up a ladder.',
		name: 'Shiza Altaf',
		role: 'Medical student, Level 1 and Meta-Analysis',
	},
	{
		quote: 'They covered everything from A to Z; all of our queries were answered in great detail, and they made everything look so simple.',
		name: 'Ahmed Shaheer',
		role: 'Medical student, Meta-Analysis',
	},
	{
		quote: 'The standout point was the hands-on practice on SPSS which has now given me the confidence to work independently.',
		name: 'Ayesha Abdulrahman',
		role: 'Level 1',
	},
	{
		quote: 'What I love is that it actually opens up a whole new path for students and medical graduates you start learning how to do research properly, on your own, and build a strong CV along the way.',
		name: 'Ali Hashim',
		role: 'Level 1',
	},
];

export const faqs = [
	{
		q: 'Do I need research or statistics experience?',
		a: 'No. Level 1 starts from the beginning and assumes nothing. The method courses assume only what Level 1 teaches.',
	},
	{
		q: 'Will I get a publication?',
		a: 'We cannot promise one, and you should be wary of anyone who does. You join real projects, and authorship follows ICMJE criteria, so it depends on your contribution. Responsibility for each study lies with its authors.',
	},
	{
		q: 'How are the courses taught?',
		a: 'Live on Zoom over two or three mornings, U.S. Central time. Mentors help you run the software on your own laptop. Method courses continue as mentored project groups after the last class.',
	},
	{
		q: 'How do I register?',
		a: 'Pay online from the course page, or email your full name and medical school. We confirm your seat and send the Zoom link before the first class.',
	},
];
