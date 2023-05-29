import { defineConfig } from 'tinacms';
import { membersFields } from './templates';
import { pagesFields } from './templates';
import { storiesFields } from './templates';
import { stringsFields } from './templates';

const slugify = function (str) {
  if (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  }

  return str;
};

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'dist'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'dist'
    }
  },
  schema: {
    collections: [
      {
        format: 'md',
        label: 'Stories',
        name: 'stories',
        path: 'src/stories',
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.date.split('T')[0]}-${slugify(values?.title)}`;
            }
          },
          defaultItem: () => {
            return {
              title: 'New post',
              date: new Date().toISOString().split('T')[0]
            };
          }
        },
        fields: [...storiesFields()]
      },
      {
        format: 'md',
        label: 'Members',
        name: 'members',
        path: 'src/members',
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.acronym || values?.title);
            }
          }
        },
        fields: [...membersFields()]
      },
      {
        format: 'yml',
        label: 'Menus',
        name: 'menus',
        path: '_data',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'menus'
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info'
          }
        ]
      },
      {
        format: 'yml',
        label: 'Tags',
        name: 'tags',
        path: '_data',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'tags'
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info'
          }
        ]
      },
      {
        label: 'Members & DoGP Organizations',
        name: 'organizations',
        path: 'src/_data/',
        match: {
          include: 'organizations'
        },
        format: 'json',
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'string',
            name: 'members_regional_networks',
            label: 'Members: Regional Networks',
            list: true
          },
          {
            type: 'string',
            name: 'dogp_networks',
            label: 'DoGP: Networks',
            list: true
          },
          {
            type: 'string',
            name: 'dogp_organizations',
            label: 'DoGP: Organizations',
            list: true
          }
        ]
      },
      {
        format: 'yaml',
        label: 'English',
        name: 'english',
        path: '_data/en',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'strings'
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info'
          }
        ]
      },
      {
        format: 'yaml',
        label: 'Spanish',
        name: 'spanish',
        path: '_data/es',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'strings'
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info'
          }
        ]
      },
      {
        format: 'yaml',
        label: 'French',
        name: 'french',
        path: '_data/fr',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'strings'
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info'
          }
        ]
      },
      {
        format: 'yaml',
        label: 'Arabic',
        name: 'arabic',
        path: '_data/ar',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'strings'
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info'
          }
        ]
      },
      {
        format: 'yaml',
        label: 'Russian',
        name: 'russian',
        path: '_data/ru',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'strings'
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info'
          }
        ]
      }
    ]
  }
});
