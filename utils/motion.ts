export const motionTokens = {
	duration: {
		fast: 0.12,
		base: 0.2,
		slow: 0.32,
		xslow: 0.48,
	},
	ease: {
		standard: [0.22, 1, 0.36, 1] as [number, number, number, number],
	},
};

export const createRevealVariants = (reduced: boolean) => {
	const y = reduced ? 0 : 12;
	const duration = reduced ? 0 : motionTokens.duration.base;
	return {
		hidden: { opacity: 0, y },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration, ease: motionTokens.ease.standard },
		},
	};
};

export const createStaggerContainer = (reduced: boolean) => ({
	hidden: {},
	visible: {
		transition: {
			staggerChildren: reduced ? 0 : 0.04,
			when: 'beforeChildren',
		},
	},
});


