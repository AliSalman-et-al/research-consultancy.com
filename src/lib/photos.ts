import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/**/*.{jpg,png}', { eager: true });

/** Resolve a photo by its path relative to src/assets/photos. */
export function photo(path: string): ImageMetadata {
	const entry = photos[`/src/assets/photos/${path}`];
	if (!entry) throw new Error(`Missing photo: src/assets/photos/${path}`);
	return entry.default;
}
