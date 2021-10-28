// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'node': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'plugins': [
    '@typescript-eslint',
    'import',
  ],
  'rules': {
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': true,
    }],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'no-param-reassign': ['error'],
    'curly': ['error', 'all'],
    'no-implicit-coercion': ['error'],
    'eqeqeq': ['error', 'always'],
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
        'pathGroups': [
          {
            'pattern': 'src/**',
            'group': 'parent',
            'position': 'after',
          },
        ],
      },
    ],
    'import/newline-after-import': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': ['camelCase'],
      },
      {
        'selector': ['enumMember', 'variable'],
        'format': ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        'selector': 'parameter',
        'format': ['camelCase'],
        'leadingUnderscore': 'allow',
        'modifiers': ['unused'],
      },
      {
        'selector': 'objectLiteralProperty',
        'filter': {
          'regex': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
          'match': true,
        },
        'format': null,
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase'],
      },
      {
        'selector': 'typeProperty',
        'format': ['snake_case', 'camelCase'],
      },
    ],
    'max-depth': [2, 4],
    'max-len': [2, 120],
    'array-bracket-newline': [2, 'consistent'],
    'array-bracket-spacing': [2, 'never'],
    'array-element-newline': 0,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'camelcase': [2, {
      'properties': 'always',
      'ignoreDestructuring': false,
      'ignoreImports': false,
      'allow': ['^deprecated_'],
    }],
    'capitalized-comments': 0,
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'comma-spacing': [2, {
      'before': false,
      'after': true,
    }],
    'comma-style': 2,
    'computed-property-spacing': [2, 'never', { 'enforceForClassMembers': true }],
  },
};
