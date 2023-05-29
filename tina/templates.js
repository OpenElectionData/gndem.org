export function membersFields() {
  return [
    {
      type: 'string',
      name: 'name',
      label: 'Name'
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
    }
  ];
}
export function pagesFields() {
  return [
    {
      type: 'string',
      name: 'layout',
      label: 'layout'
    },
    {
      type: 'string',
      name: 'title',
      label: 'title'
    },
    {
      type: 'string',
      name: 'permalink',
      label: 'permalink'
    }
  ];
}

export function storiesFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true
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
      required: true,
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
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list: true
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    }
  ];
}
export function stringsFields() {
  return [
    {
      type: 'string',
      name: 'menu_resources',
      label: 'Menu Resources'
    },
    {
      type: 'string',
      name: 'menu_home',
      label: 'menu_home'
    },
    {
      type: 'string',
      name: 'menu_about',
      label: 'menu_about'
    },
    {
      type: 'string',
      name: 'menu_stories',
      label: 'menu_stories'
    },
    {
      type: 'string',
      name: 'menu_members',
      label: 'menu_members'
    },
    {
      type: 'string',
      name: 'copyright',
      label: 'copyright'
    },
    {
      type: 'string',
      name: 'privacy_policy',
      label: 'privacy_policy'
    },
    {
      type: 'string',
      name: 'terms_conditions',
      label: 'terms_conditions'
    },
    {
      type: 'string',
      name: 'continue_reading',
      label: 'continue_reading'
    },
    {
      type: 'string',
      name: 'read_all',
      label: 'read_all'
    },
    {
      type: 'string',
      name: 'home_desc',
      label: 'home_desc',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'home_latest_title',
      label: 'home_latest_title'
    },
    {
      type: 'string',
      name: 'footer_desc',
      label: 'footer_desc',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'download_declaration',
      label: 'download_declaration'
    },
    {
      type: 'string',
      name: 'endorsing_networks',
      label: 'endorsing_networks'
    },
    {
      type: 'string',
      name: 'supporting_organizations',
      label: 'supporting_organizations'
    },
    {
      type: 'string',
      name: 'table_of_contents',
      label: 'table_of_contents'
    },
    {
      type: 'string',
      name: 'regional_networks',
      label: 'regional_networks'
    },
    {
      type: 'string',
      name: 'members',
      label: 'members'
    },
    {
      type: 'string',
      name: 'country',
      label: 'country'
    },
    {
      type: 'string',
      name: 'organization_name',
      label: 'organization_name'
    },
    {
      type: 'string',
      name: 'organization_acronym',
      label: 'organization_acronym'
    },
    {
      type: 'string',
      name: 'website',
      label: 'website'
    },
    {
      type: 'string',
      name: 'membership_block_title',
      label: 'membership_block_title'
    },
    {
      type: 'string',
      name: 'membership_block_desc',
      label: 'membership_block_desc',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'view_members',
      label: 'view_members'
    },
    {
      type: 'string',
      name: 'register_members',
      label: 'register_members'
    },
    {
      type: 'string',
      name: 'visit_url',
      label: 'visit_url'
    },
    {
      type: 'string',
      name: 'gdpr_heading',
      label: 'gdpr_heading'
    },
    {
      type: 'string',
      name: 'gdpr_desc',
      label: 'gdpr_desc',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'gdpr_hide',
      label: 'gdpr_hide'
    },
    {
      type: 'string',
      name: 'gdpr_more_info',
      label: 'gdpr_more_info'
    },
    {
      type: 'string',
      name: 'tags',
      label: 'tags'
    }
  ];
}
