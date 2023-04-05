type NavItem = {
	href: `/${string}`;
	label: string;
};

export const navItems: NavItem[] = [
	{
		href: '/words',
		label: 'Words'
	},
	{
		href: '/game',
		label: 'Game'
	},
	{
		href: '/favorite',
		label: 'Favorite'
	},
	{
		href: '/profile',
		label: 'Profile'
	}
];
