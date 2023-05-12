type Options = {
  [key: string]: { [key: string]: string };
};

export const options: Options = {
  field: {
    fe: 'Front-end',
    be: 'Back-end',
    fullstack: 'Fullstack',
  },
  experience: {
    starter: 'In school / Studying',
    junior: 'Junior',
    senior: 'Senior',
  },
  lang: {
    'en-US': 'English',
    'cmn-Hans-CN': '中文',
    'fr-FR': 'Français',
    'ko-KR': '한국어',
  },
};

export const OPTIONS_DATA = [
  {
    id: 1,
    label: 'Development Field',
    name: 'field',
    type: 'dropdown',
    options: options.field,
  },
  {
    id: 2,
    label: 'Work Experience',
    name: 'experience',
    type: 'dropdown',
    options: options.experience,
  },
  {
    id: 3,
    label: 'Language',
    name: 'lang',
    type: 'dropdown',
    options: options.lang,
  },
  { id: 4, label: 'OpenAI API Key', name: 'apiKey', type: 'input' },
];
