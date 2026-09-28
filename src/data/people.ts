// People. Paths are relative to src/assets/photos.
// Publication counts are the latest each person or RC has published.

export interface Leader {
	name: string;
	short: string; // Vancouver-style byline name
	role: string;
	title: string;
	place: string;
	publications: string;
	photo: string;
	bio: string;
}

export const leaders: Leader[] = [
	{
		name: 'Dr. M. Shahzeb Khan',
		short: 'Khan MS',
		role: 'Founder',
		title: 'Assistant Professor of Cardiology',
		place: 'Baylor University Medical Center, Dallas',
		publications: '500+',
		photo: 'people/shahzeb-khan.jpg',
		bio: 'Cardiologist and grant-funded researcher. Cardiology fellowship at Duke; MS, Rush University. Associate editor of JCF Intersections, ESC Heart Failure and Heart Failure Reviews, and a 2025 Cardiology Research All-Star. Co-founded RC in 2016, leads the CDC WONDER course and runs mock interviews for Match Mentorship students.'
	},
	{
		name: 'Dr. Kaneez Fatima',
		short: 'Fatima K',
		role: 'Founder',
		title: 'Postdoctoral Research Fellow',
		place: 'Baylor Scott & White Research Institute',
		publications: '170+',
		photo: 'people/kaneez-fatima.jpg',
		bio: 'Co-founded RC in 2016. Teaches statistics in the workshops and helps Match Mentorship students arrange U.S. clinical rotations. One student wrote that Dr. Fatima taught in a workshop what another teacher could not in a year.'
	},
	{
		name: 'Dr. M. Shariq Usman',
		short: 'Usman MS',
		role: 'President',
		title: 'Cardiovascular Disease Fellow',
		place: 'UT Southwestern Medical Center',
		publications: '130+',
		photo: 'people/shariq-usman-headshot.jpg',
		bio: 'Teaches the Meta-Analysis Masterclass, supervises project groups to submission and coaches Match Mentorship students for interviews. Former postdoctoral fellow at the University of Mississippi Medical Center.'
	},
	{
		name: 'Dr. Tariq Jamal Siddiqi',
		short: 'Siddiqi TJ',
		role: 'Vice-President',
		title: 'Internal Medicine Resident',
		place: 'Baylor Scott & White Health',
		publications: '100+',
		photo: 'people/tariq-siddiqi-headshot.jpg',
		bio: "Co-teaches the Meta-Analysis Masterclass and supervises project groups. Former postdoctoral fellow at the University of Mississippi Medical Center, author of RC's guide to U.S. research fellowships, and matched into Internal Medicine at Baylor University Medical Center.",
	},
];

export interface Mentor {
	name: string;
	role: string;
	place: string;
	publications: string;
	photo: string;
}

export const mentors: Mentor[] = [
	{ name: 'Ali Salman', role: 'Head Research Analyst', place: 'Dow Medical College, Pakistan', publications: '29+', photo: 'people/ali-salman.jpg' },
	{ name: 'Asad Ali Ahmed Cheema', role: 'Head Mentor', place: 'University of Oklahoma Health Sciences Center', publications: '38+', photo: 'people/asad-cheema.jpg' },
	{ name: 'Ahmed Kamal Siddiqi', role: 'Mentor', place: 'Emory University', publications: '54+', photo: 'people/ahmed-kamal-siddiqi.jpg' },
	{ name: 'Ahmed Mustafa Rashid', role: 'Mentor', place: 'Baylor Scott & White Research Institute', publications: '44+', photo: 'people/ahmed-mustafa-rashid.jpg' },
	{ name: 'Syed Sarmad Javaid', role: 'Mentor', place: 'University of Mississippi Medical Center', publications: '23+', photo: 'people/sarmad-javaid.jpg' },
	{ name: 'Muhammad Umer Sohail', role: 'Research Analyst', place: 'Dow Medical College, Pakistan', publications: '24+', photo: 'people/umer-sohail.jpg' },
	{ name: 'Muhammad Saad', role: 'Research Analyst', place: 'Dow Medical College, Pakistan', publications: '22+', photo: 'people/muhammad-saad.jpg' },
	{ name: 'Eliza Aisha', role: 'Research Analyst', place: 'Dow Medical College, Pakistan', publications: '11+', photo: 'people/eliza-aisha.jpg' },
	{ name: 'Ifrah Ansari', role: 'Mentor', place: 'Dow Medical College, Pakistan', publications: '10+', photo: 'people/ifrah-ansari.jpg' },
	{ name: 'Ruqiat Masooma Batool', role: 'Mentor', place: 'Dow Medical College, Pakistan', publications: '10+', photo: 'people/ruqiat-masooma-batool.jpg' },
	{ name: 'Mariam Shahabi', role: 'Mentor', place: 'Dow Medical College, Pakistan', publications: '6+', photo: 'people/mariam-shahabi.jpg' },
	{ name: 'Jazza Aamir', role: 'Mentor', place: 'Dow Medical College, Pakistan', publications: '6+', photo: 'people/jazza-aamir.jpg' },
];

// From RC's "Fellowship success stories" post: mentees now in U.S. research posts.
export const fellows = [
	{ name: 'Dr. M. Shariq Usman', school: 'Dow University of Health Sciences', place: 'University of Mississippi Medical Center', photo: 'fellows/shariq-usman.jpg' },
	{ name: 'Dr. Tariq Jamal Siddiqi', school: 'Dow University of Health Sciences', place: 'University of Mississippi Medical Center', photo: 'fellows/tariq-jamal-siddiqi.jpg' },
	{ name: 'Dr. Laibah Arshad Khan', school: 'King Edward Medical University', place: 'University of Mississippi Medical Center', photo: 'fellows/laibah-arshad-khan.jpg' },
	{ name: 'Dr. Ahmed Mustafa Rashid', school: 'Sindh Medical College', place: 'Baylor Scott & White Health', photo: 'fellows/ahmed-mustafa-rashid.jpg' },
	{ name: 'Dr. M. Sameer Arshad', school: 'Dow University of Health Sciences', place: 'Baylor Scott & White Health', photo: 'fellows/sameer-arshad.jpg' },
	{ name: 'Dr. Adeena Jamil', school: 'Dow International Medical College', place: 'Baylor Scott & White Health', photo: 'fellows/adeena-jamil.jpg' },
	{ name: 'Dr. Syed Sarmad Javaid', school: 'Jinnah Sindh Medical University', place: 'University of Mississippi Medical Center', photo: 'fellows/sarmad-javaid.jpg' },
	{ name: 'Dr. Aimen Shafiq', school: 'Dow University of Health Sciences', place: 'University of Mississippi Medical Center', photo: 'fellows/aimen-shafiq.jpg' },
	{ name: 'Dr. Ahmed Kamal Siddiqi', school: 'Ziauddin Medical University', place: 'Emory University', photo: 'fellows/ahmed-kamal-siddiqi.jpg' },
	{ name: 'Dr. Izza Shahid', school: 'Ziauddin Medical University', place: 'Houston Methodist', photo: 'fellows/izza-shahid.jpg' },
	{ name: 'Dr. Asad Ali Ahmed Cheema', school: 'International University of Kyrgyzstan', place: 'University of Oklahoma', photo: 'fellows/asad-cheema.jpg' },
	{ name: 'Dr. Aymen Ahmed', school: 'Dow University of Health Sciences', place: 'Endeavor Health', photo: 'fellows/aymen-ahmed.jpg' },
];

// Match 2026 results, from RC's posts.
export interface Matched {
	name: string;
	specialty: string;
	program: string;
	photo?: string;
	school?: string;
	quote?: string;
}

export const match2026: Matched[] = [
	{ name: 'Laibah Arshad Khan', specialty: 'Internal Medicine', program: 'Yale New Haven Hospital, CT', photo: 'match/laibah-arshad-khan.jpg', school: 'King Edward Medical University' },
	{ name: 'Qais Bin Abdul Ghaffar', specialty: 'Internal Medicine', program: 'West Virginia University / Camden Clark Medical Center', photo: 'match/qais-bin-abdul-ghaffar.jpg', quote: 'They allowed me to bring in the Program Director from the institution where I ultimately matched as a senior author.' },
	{ name: 'Ezza Bashir', specialty: 'Internal Medicine', program: "St. Luke's Hospital, St. Louis", photo: 'match/ezza-bashir.jpg', school: 'Akhter Saeed Medical and Dental College', quote: 'This was my second match cycle. As someone who was extremely scared of research, I had 10 papers submitted by the time I submitted the ERAS application.' },
	{ name: 'Muhammad Faisal Riaz', specialty: 'Internal Medicine', program: 'The Brooklyn Hospital Center, NY', photo: 'match/muhammad-faisal-riaz.jpg', school: 'Rawalpindi Medical University', quote: 'Having learned data analysis for NIS, NRD and CDC WONDER, I was able to independently work on some projects of my own.' },
	{ name: 'Omama Farooq', specialty: 'Pediatrics', program: 'Marshall University School of Medicine, WV', photo: 'match/omama-farooq.jpg', school: 'Islamic International Medical College', quote: 'The meta-analysis classes were a great help as well. They helped me publish and answer meticulously the research questions asked during the interviews.' },
	{ name: 'Zain Ul Abideen', specialty: 'Family Medicine', program: 'ECU Health', photo: 'match/zain-ul-abideen.jpg', school: 'Quaid-e-Azam Medical College', quote: 'I gained proficiency in working with NIS, NRD, and CDC WONDER, enabling me to independently conduct research.' },
	{ name: 'Laiba', specialty: 'Internal Medicine', program: 'Capital Health Regional Medical Center, NJ', photo: 'match/laiba.jpg', school: 'Akhtar Saeed Medical and Dental College', quote: 'Throughout the year, I was added to multiple research groups and had the opportunity to attend all their workshops.' },
	{ name: 'Mahnoor Shah', specialty: 'Primary Care', program: 'NM Primary Care Training Program', photo: 'match/mahnoor-shah.jpg', school: 'King Edward Medical University', quote: 'Learning to work with databases such as NIS, NRD, and CDC WONDER gave me the confidence to pursue independent projects.' },
	{ name: 'Osman Wafai', specialty: 'Internal Medicine', program: 'HCA Centerpoint, Kansas City', photo: 'match/osman-wafai.jpg', school: 'Jinnah Medical & Dental College', quote: 'What helped most by far was the mock interview, which provided invaluable insight and feedback.' },
	{ name: 'Zainab Pervaiz', specialty: 'Internal Medicine', program: 'DMC Sinai-Grace / Wayne State', photo: 'match/zainab-pervaiz.jpg', school: 'CMH Lahore Medical College', quote: "Dr. Shahzeb conducted a mock [interview] with me and shared tips and feedback that I hadn't come across before, and it really changed how I approached my interviews." },
	{ name: 'Komal Saleem', specialty: 'Internal Medicine', program: 'Zucker School of Medicine at Hofstra/Northwell', photo: 'match/komal-saleem.jpg', school: 'Ameer ud Din Medical College', quote: 'It helped me develop essential research skills from scratch to learning complex datasets like NIS, CDC WONDER.' },
	{ name: 'Shahzaib Hassan', specialty: 'Transitional Year', program: 'Merit Health Wesley', photo: 'match/shahzaib-hassan.jpg' },
	{ name: 'Aamna Nasir', specialty: 'Internal Medicine', program: 'Quinnipiac University Frank H. Netter MD School of Medicine', photo: 'match/aamna-nasir.jpg' },
	{ name: 'Arbab Burhan Uddin Kasi', specialty: 'Neurology', program: 'Louisiana State University', photo: 'match/arbab-burhan-uddin-kasi.jpg', school: 'Dow Medical College', quote: 'RC was where I was first introduced to clinical research, something that became a turning point in my career.' },
	{ name: 'Marian Harrison', specialty: 'Internal Medicine', program: 'Yale New Haven Health / Bridgeport Hospital', school: 'University of Ghana Medical School', quote: 'I had multiple research projects ongoing with a dedicated team of mentors and mentees. I was guided through the manuscript writing process with multiple revisions.' },
	{ name: 'Saeeda Khanam', specialty: 'Family Medicine', program: 'Larkin Health System', photo: 'match/saeeda-khanam.jpg', school: 'Faisalabad Medical University, class of 2007', quote: 'Through RC, I also had the opportunity to learn research from scratch and successfully contribute to impactful article submissions.' },
];

// Match 2025 results (the 2024–25 cohort, 90% matched), from RC's posts.
export const match2025: Matched[] = [
	{ name: 'Muhammad Mubariz', specialty: 'Internal Medicine', program: 'Doctors Hospital at Renaissance, Texas', school: 'AMDC, class of 2022' },
	{ name: 'Ahson Afzal', specialty: 'Pediatrics', program: 'Hurley Medical Center', school: 'Dow Medical College, class of 2019' },
	{ name: 'Nabeeha Essam', specialty: 'Family Medicine', program: 'University of Pittsburgh Medical Center', school: 'Jinnah Sindh Medical University, class of 2018' },
	{ name: 'Asim Shaikh', specialty: 'Internal Medicine', program: 'SUNY Upstate Medical University', school: 'Dow Medical College, class of 2021' },
];
