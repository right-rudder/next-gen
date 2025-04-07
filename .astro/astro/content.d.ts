declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"The-Value-of-Personalized-Flight-Training-Programs.md": {
	id: "The-Value-of-Personalized-Flight-Training-Programs.md";
  slug: "the-value-of-personalized-flight-training-programs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"choosing-a-flight-school-important-considerations-for-becoming-a-pilot.md": {
	id: "choosing-a-flight-school-important-considerations-for-becoming-a-pilot.md";
  slug: "choosing-a-flight-school-important-considerations-for-becoming-a-pilot";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"exploring-flight-careers-beyond-the-airline-path.md": {
	id: "exploring-flight-careers-beyond-the-airline-path.md";
  slug: "exploring-flight-careers-beyond-the-airline-path";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"flabob-veterans-day-2024.md": {
	id: "flabob-veterans-day-2024.md";
  slug: "flabob-veterans-day-2024";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"flight-school-faqs-everything-you-need-to-know.md": {
	id: "flight-school-faqs-everything-you-need-to-know.md";
  slug: "flight-school-faqs-everything-you-need-to-know";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"halloween-2024-at-nextgen-flight-academy.md": {
	id: "halloween-2024-at-nextgen-flight-academy.md";
  slug: "halloween-2024-at-nextgen-flight-academy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"high-altitude-endorsement-nextgen-flight-academy.md": {
	id: "high-altitude-endorsement-nextgen-flight-academy.md";
  slug: "high-altitude-endorsement-nextgen-flight-academy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"three-years-a-charm-aopa-honors-nextgen-flight-academy-for-third-time-running.md": {
	id: "three-years-a-charm-aopa-honors-nextgen-flight-academy-for-third-time-running.md";
  slug: "three-years-a-charm-aopa-honors-nextgen-flight-academy-for-third-time-running";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"understanding-flight-instruments-for-safer-navigation.md": {
	id: "understanding-flight-instruments-for-safer-navigation.md";
  slug: "understanding-flight-instruments-for-safer-navigation";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-the-written-exam.md": {
	id: "what-is-the-written-exam.md";
  slug: "what-is-the-written-exam";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-makes-a-good-training-fleet-understanding-aircraft-variety-in-flight-schools.md": {
	id: "what-makes-a-good-training-fleet-understanding-aircraft-variety-in-flight-schools.md";
  slug: "what-makes-a-good-training-fleet-understanding-aircraft-variety-in-flight-schools";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-zero-hero-flight-training-is-key-to-a-successful-career-as-a-pilot.md": {
	id: "why-zero-hero-flight-training-is-key-to-a-successful-career-as-a-pilot.md";
  slug: "why-zero-hero-flight-training-is-key-to-a-successful-career-as-a-pilot";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"location": {
"coachella-ca.md": {
	id: "coachella-ca.md";
  slug: "coachella-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"corona-ca.md": {
	id: "corona-ca.md";
  slug: "corona-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"fontana-ca.md": {
	id: "fontana-ca.md";
  slug: "fontana-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"grand-terrace-ca.md": {
	id: "grand-terrace-ca.md";
  slug: "grand-terrace-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"highland-ca.md": {
	id: "highland-ca.md";
  slug: "highland-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"indio-ca.md": {
	id: "indio-ca.md";
  slug: "indio-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"loma-linda-ca.md": {
	id: "loma-linda-ca.md";
  slug: "loma-linda-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"moreno-valley-ca.md": {
	id: "moreno-valley-ca.md";
  slug: "moreno-valley-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"ontario-ca.md": {
	id: "ontario-ca.md";
  slug: "ontario-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"palm-desert-ca.md": {
	id: "palm-desert-ca.md";
  slug: "palm-desert-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"palm-springs-ca.md": {
	id: "palm-springs-ca.md";
  slug: "palm-springs-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"perris-ca.md": {
	id: "perris-ca.md";
  slug: "perris-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"rancho-cucamonga-ca.md": {
	id: "rancho-cucamonga-ca.md";
  slug: "rancho-cucamonga-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"riverside-ca.md": {
	id: "riverside-ca.md";
  slug: "riverside-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"san-bernardino-ca.md": {
	id: "san-bernardino-ca.md";
  slug: "san-bernardino-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"upland-ca.md": {
	id: "upland-ca.md";
  slug: "upland-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"yucaipa-ca.md": {
	id: "yucaipa-ca.md";
  slug: "yucaipa-ca";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
