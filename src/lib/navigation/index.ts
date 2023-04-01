type NavItem = {
	id: number;
	href: `/${string}`;
	label: string;
};

export const navItems: NavItem[] = [
	{
		id: 1,
		href: '/',
		label: 'Home'
	},
	{
		id: 2,
		href: '/game',
		label: 'Game'
	},
	{
		id: 3,
		href: '/favorite',
		label: 'Favorite'
	},
	{
		id: 4,
		href: '/profile',
		label: 'Profile'
	}
];
