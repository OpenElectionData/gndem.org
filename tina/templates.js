import keywords from '../src/_data/keywords.json';
import en from '../src/_data/i18n/en.json';

export function translationFields() {
  const codes = Object.keys(en).map((code) => {
    return {
      type: 'string',
      name: code,
      label: code,
      component: code.includes('_desc') ? 'textarea' : 'text'
    };
  });

  return codes;
}

export function membersFields() {
  return [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      isTitle: true,
      required: true
    },
    {
      type: 'string',
      name: 'country',
      label: 'Country'
    },
    {
      type: 'string',
      name: 'region',
      label: 'Region'
    },
    {
      type: 'string',
      name: 'acronym',
      label: 'Acronym'
    },
    {
      type: 'string',
      name: 'website',
      label: 'Website'
    },
    {
      type: 'boolean',
      name: 'eleventyExcludeFromCollections',
      label: 'Hidden',
      description:
        'If this is checked, this member will not show up in the members list'
    }
  ];
}
export function pagesFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'boolean',
      name: 'draft',
      label: 'Draft',
      description: 'If this is checked, the story will not be published'
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description:
        'The main body text of your story. You can use markdown formatting.',
      isBody: true
    },
    {
      type: 'string',
      name: 'layout',
      label: 'Layout',
      description: 'Type of page layout this page should have.',
      list: true,
      options: ['page', 'stories', 'members', 'principles'],
      component: 'select'
    }
  ];
}

export function storiesFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true,
      isTitle: true
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'Date',
      required: true,
      ui: {
        dateFormat: 'YYYY-MM-DD',
        parse: (value) => {
          return value && value.split('T')[0];
        }
      }
    },
    {
      type: 'boolean',
      name: 'draft',
      label: 'Draft',
      description: 'If this is checked, the story will not be published'
    },
    {
      type: 'image',
      name: 'image',
      label: 'Feature Image'
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt',
      description: 'Recommended to be 100 words or less.',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description:
        'The main body text of your story. You can use markdown formatting.',
      isBody: true
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list: true,
      options: keywords.keywords.map((d) => ({ value: d, label: d }))
    }
  ];
}
