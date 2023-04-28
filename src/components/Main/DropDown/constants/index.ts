type Options = {
  [key: string]: string;
};

const fieldOptions: Options = {
  fe: 'Front-end',
  be: 'Back-end',
  fullstack: 'Fullstack',
};

const experienceOptions: Options = {
  starter: 'In school / Studying',
  junior: 'Junior',
  senior: 'Senior',
};

const languageOptions: Options = {
  asd: 'English',
  'cmn-Hans-CN': '中文',
  'fr-FR': 'Français',
  'ko-KR': '한국어',
};

export const SELECT_DATA = [
  { id: 1, label: 'Development Field', name: 'field', options: fieldOptions },
  {
    id: 2,
    label: 'Work Experience',
    name: 'experience',
    options: experienceOptions,
  },
  { id: 3, label: 'Language', name: 'language', options: languageOptions },
];
