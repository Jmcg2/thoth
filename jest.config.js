import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customJestCongfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom'
};

export { customJestCongfig };
