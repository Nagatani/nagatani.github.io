module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle CSS imports (if you import CSS files in your components)
    '\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle module aliases (if you have them in tsconfig.json)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // if you need setup files
  transform: {
    '^.+\.(ts|tsx)?$': ['ts-jest', { tsconfig: 'tsconfig.json', babelConfig: true }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\.pnp\.[^\/]+$',
  ],
};
