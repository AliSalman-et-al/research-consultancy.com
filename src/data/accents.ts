// The article type's colour on each page, the way AHA colours each journal's article types.
// Only the article type and its side tab use it; every other element stays navy. 4.5:1 on white.
export const accents = {
	navy: '#02264d',
	teal: '#0f6b69',
	green: '#1d7433',
	purple: '#5e3b92',
	rust: '#a3440d',
	magenta: '#9c1f6a',
	red: '#ad2338',
	blue: '#1b5aa0',
	gold: '#855600',
} as const;

export type Accent = keyof typeof accents;
