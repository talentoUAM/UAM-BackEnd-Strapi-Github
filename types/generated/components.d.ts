import type { Schema, Struct } from '@strapi/strapi';

export interface ListLinksFooterPanels extends Struct.ComponentSchema {
  collectionName: 'components_list_links_footer_panels';
  info: {
    displayName: 'footer-panels';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'list-links.footer-panels': ListLinksFooterPanels;
    }
  }
}
