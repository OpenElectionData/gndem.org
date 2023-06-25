import { defineConfig } from 'tinacms';
import {
  membersFields,
  pagesFields,
  storiesFields,
  translationFields
} from './templates';

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
  // search: {
  //   tina: {
  //     indexerToken: process.env.TINA_SEARCH_TOKEN
  //   }
  // },
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
        format: 'json',
        label: 'Tags',
        name: 'keywords',
        path: 'src/_data',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'keywords'
        },
        fields: [
          {
            type: 'string',
            name: 'keywords',
            label: 'Tags',
            list: true
          }
        ]
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
        label: 'Menus',
        name: 'navigation',
        path: 'src/_data/',
        match: {
          include: 'navigation'
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
            type: 'object',
            name: 'header',
            label: 'Site navigation',
            list: true,
            fields: [
              {
                name: 'identifier',
                label: 'Identifier',
                type: 'string',
                description: 'Unique slug to identify menu item'
              },
              {
                name: 'url',
                label: 'URL',
                type: 'string'
              },
              {
                name: 'title',
                label: 'Language string',
                type: 'string',
                description:
                  'String to use to lookup translations for menu item text'
              }
            ],
            ui: {
              itemProps: (item) => {
                return { label: `${item?.identifier}` };
              }
            }
          },
          {
            type: 'object',
            name: 'languages',
            label: 'Language selection',
            list: true,
            fields: [
              {
                name: 'label',
                label: 'Label',
                type: 'string',
                description:
                  'Name of language as you want it to appear in the menu'
              },
              {
                name: 'code',
                label: 'Code',
                type: 'string',
                description: 'Two-letter language code identifier'
              }
            ],
            ui: {
              itemProps: (item) => {
                return { label: `${item?.label}` };
              }
            }
          }
        ]
      },
      {
        format: 'json',
        label: 'Translations',
        name: 'translations',
        path: 'src/_data/i18n',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: '*'
        },
        fields: [...translationFields()]
      },
      // TODO: this is a bug, need to report with TinaCMS
      // {
      //   format: 'md',
      //   label: 'Pages',
      //   name: 'pages',
      //   path: 'src',
      //   match: {
      //     include: '{en,es,fr,ar,ru}/*'
      //   },
      //   fields: [...pagesFields()],
      //   ui: {
      //     filename: {
      //       slugify: (values) => {
      //         return slugify(values?.title);
      //       }
      //     }
      //   }
      // },
      // Temporary work arounds
      {
        format: 'md',
        label: 'Pages: English',
        name: 'pages_en',
        path: 'src/en',
        fields: [...pagesFields()],
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        }
      },
      {
        format: 'md',
        label: 'Pages: Spanish',
        name: 'pages_es',
        path: 'src/es',
        fields: [...pagesFields()],
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        }
      },
      {
        format: 'md',
        label: 'Pages: French',
        name: 'pages_fr',
        path: 'src/fr',
        fields: [...pagesFields()],
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        }
      },
      {
        format: 'md',
        label: 'Pages: Arabic',
        name: 'pages_ar',
        path: 'src/ar',
        fields: [...pagesFields()],
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        }
      },
      {
        format: 'md',
        label: 'Pages: Russian',
        name: 'pages_ru',
        path: 'src/ru',
        fields: [...pagesFields()],
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        }
      }
    ]
  }
});
