// Expansions for the "Nonstandard Abbreviations and Acronyms" box. Each page picks the ones it uses.
export const abbreviations: Record<string, string> = {
	'CDC WONDER': 'CDC Wide-ranging Online Data for Epidemiologic Research',
	ERAS: 'Electronic Residency Application Service',
	ICMJE: 'International Committee of Medical Journal Editors',
	IMG: 'international medical graduate',
	NIS: 'National Inpatient Sample',
	NRD: 'Nationwide Readmissions Database',
	NRMP: 'National Resident Matching Program',
	PRISMA: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses',
	'Step 2 CK': 'USMLE Step 2 Clinical Knowledge',
	USMLE: 'United States Medical Licensing Examination',
};

export const pick = (...keys: string[]): [string, string][] => keys.map((k) => [k, abbreviations[k]]);
