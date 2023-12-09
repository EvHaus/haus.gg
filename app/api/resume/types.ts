export type RoleItemType = {
	about: string;
	colors: [string, string];
	company: string;
	roles: Array<{
		accomplishments: Array<string>;
		date: [Date, Date | null];
		dateNote?: string;
		title: string;
	}>;
	url: string;
};
