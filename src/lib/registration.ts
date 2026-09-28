// Registration for classes, and applications for Match Mentorship. RC schedules a class when it has
// capacity and announces it about a month ahead, so each course carries a list of announced classes
// rather than a calendar. The page works out the state from today's date: at build time for the
// first paint, and again in the reader's browser, so a class closes on time without a redeploy.
//
// Prices are never shown; the payment page shows them.
import { courses } from '../data/courses';
import { contact, matchApplications } from '../data/site';

/** One dated run of a course (or one Match Mentorship intake). Dates are YYYY-MM-DD. */
export interface Klass {
	starts: string;
	ends?: string;
	/** Registration opens on this day. Omit when it opens as the class is announced. */
	opens?: string;
	/** Registration closes at the end of this day. */
	closes: string;
	/** The class's own payment link (Stripe), or the application link. */
	href: string;
	/** Every place is taken; registration stays closed before the closing date. */
	full?: boolean;
}

export interface Subject {
	slug: string;
	name: string;
	/** Courses take registration; Match Mentorship takes applications. */
	kind: 'course' | 'program';
	classes: Klass[];
}

export type State = 'open' | 'soon' | 'full' | 'closed';

const day = (iso: string, end = false) => {
	const [y, m, d] = iso.split('-').map(Number);
	return end ? new Date(y, m - 1, d, 23, 59, 59) : new Date(y, m - 1, d);
};

export function stateOf(classes: Klass[], now = new Date()): { state: State; klass?: Klass } {
	const current = classes.filter((k) => day(k.closes, true) >= now).sort((a, b) => a.closes.localeCompare(b.closes));
	const open = current.find((k) => !k.full && (!k.opens || day(k.opens) <= now));
	if (open) return { state: 'open', klass: open };
	const soon = current.find((k) => !k.full && k.opens && day(k.opens) > now);
	if (soon) return { state: 'soon', klass: soon };
	const full = current.find((k) => k.full);
	if (full) return { state: 'full', klass: full };
	return { state: 'closed' };
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const short = (iso: string) => {
	const d = day(iso);
	return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
};
const span = (k: Klass) => {
	const a = day(k.starts);
	const b = k.ends ? day(k.ends) : undefined;
	const first = `${MONTHS[a.getMonth()]} ${a.getDate()}`;
	if (!b) return first;
	return b.getMonth() === a.getMonth() ? `${first} to ${b.getDate()}` : `${first} to ${MONTHS[b.getMonth()]} ${b.getDate()}`;
};

// Journals mark free-to-read papers with an orange open padlock. Here it marks a class you can join.
const lock = (open: boolean) =>
	`<svg viewBox="0 0 16 16" class="reg-lock" aria-hidden="true"><rect x="2.75" y="7" width="10.5" height="7.5" rx="1.5" fill="currentColor"/><path d="${open ? 'M5 7V4.75a3 3 0 0 1 5.8-1.1' : 'M5 7V4.75a3 3 0 0 1 6 0V7'}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const arrow = '<svg viewBox="0 0 16 16" class="size-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function notifyHref(s: Subject) {
	const what = s.kind === 'program' ? `applications open for ${s.name}` : `registration opens for ${s.name}`;
	return `${contact.whatsapp.href}?text=${encodeURIComponent(`Hello RC, please tell me when ${what}.`)}`;
}

function words(s: Subject, state: State, k?: Klass) {
	const program = s.kind === 'program';
	const noun = program ? 'Applications' : 'Registration';
	return {
		badge: {
			open: `${noun} open`,
			soon: k?.opens ? `Opens ${short(k.opens)}` : `${noun} opening soon`,
			full: program ? 'Places filled' : 'Class full',
			closed: `${noun} closed`,
		}[state],
		detail: {
			open: k ? `Closes ${short(k.closes)}` : '',
			soon: '',
			full: '',
			closed: program ? '' : 'No class announced yet',
		}[state],
		when: k && !program ? `Next class ${span(k)}, live on Zoom` : k && program ? `Program starts ${span(k)}` : '',
		// The same button in every state, so a closed class reads as an inactive button, not a missing one.
		action: program ? `Apply for ${s.name}` : `Register for ${s.name}`,
	};
}

export type Variant = 'panel' | 'row' | 'status' | 'badge' | 'button';

/** The registration block, as HTML, for one course in one of five sizes. */
export function renderReg(s: Subject, variant: Variant, now = new Date()) {
	const { state, klass } = stateOf(s.classes, now);
	const w = words(s, state, klass);
	const open = state === 'open';
	const tone = `reg-${state}`;

	const badge = `<p class="reg-badge ${tone}">${lock(open)}<span><span class="reg-state">${w.badge}</span>${w.detail ? `<span class="reg-detail"> · ${w.detail}</span>` : ''}</span></p>`;
	const button = open
		? `<a href="${esc(klass!.href)}" class="btn-primary group reg-go" rel="noopener">${esc(w.action)}${arrow}</a>`
		: `<span class="btn-disabled" role="link" aria-disabled="true">${esc(w.action)}</span>`;
	const notify = open ? '' : `<a href="${esc(notifyHref(s))}" class="reg-notify" rel="noopener">Tell me when it opens</a>`;

	if (variant === 'status') return badge;
	if (variant === 'badge') return `<span class="reg-chip ${tone}" title="${esc(w.badge)}">${lock(open)}<span class="sr-only">${esc(w.badge)}</span></span>`;
	if (variant === 'button') return open ? button.replace('btn-primary', 'btn-primary btn-sm') : `<a href="${esc(notifyHref(s))}" class="btn-secondary btn-sm gap-1.5" rel="noopener" title="${esc(w.badge)}. Tell me when it opens."><span class="reg-closed inline-flex">${lock(false)}</span>${state === 'soon' ? esc(w.badge) : 'Closed'} · Notify me</a>`;
	if (variant === 'row')
		return `<div class="reg-row">${badge}${w.when ? `<p class="reg-when">${w.when}</p>` : ''}<div class="reg-actions">${button.replace('btn-primary', 'btn-primary btn-sm').replace('btn-disabled', 'btn-disabled btn-sm')}${notify}</div></div>`;
	return `<div class="reg-panel">${badge}${w.when ? `<p class="reg-when">${w.when}</p>` : ''}<div class="reg-actions">${button}${notify}</div></div>`;
}

// Placeholder classes for checking each state on the dev server (open any page with ?preview, or
// ?preview=open, soon, full or closed). They never reach the published site.
function previewClasses(state: string, slug: string, now: Date): Klass[] {
	const iso = (days: number) => {
		const d = new Date(now);
		d.setDate(d.getDate() + days);
		return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
	};
	const mix: Record<string, string> = { 'level-1': 'open', 'meta-analysis': 'soon', 'cdc-wonder': 'full', 'match-mentorship': 'open' };
	const pick = state === 'mix' ? (mix[slug] ?? 'closed') : state;
	const base = { starts: iso(24), ends: iso(25), closes: iso(12), href: '#preview-payment-link' };
	if (pick === 'open') return [{ ...base, opens: iso(-5) }];
	if (pick === 'soon') return [{ ...base, opens: iso(6) }];
	if (pick === 'full') return [{ ...base, full: true }];
	return [];
}

export function subjectFor(slug: string, preview?: string | null, now = new Date()): Subject {
	const course = courses.find((c) => c.slug === slug);
	const s: Subject = course
		? { slug, name: course.name, kind: 'course', classes: course.classes }
		: { slug, name: 'Match Mentorship', kind: 'program', classes: matchApplications };
	return preview ? { ...s, classes: previewClasses(preview, slug, now) } : s;
}
