import type { Schema, Attribute } from '@strapi/strapi';

export interface Page5050 extends Schema.Component {
  collectionName: 'components_page_50_50s';
  info: {
    displayName: '50-50';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
    image: Attribute.Media;
    button: Attribute.Component<'page.button'>;
  };
}

export interface PageBanner5050 extends Schema.Component {
  collectionName: 'components_page_banner_50_50s';
  info: {
    displayName: 'banner-50-50';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
    image: Attribute.Media;
    button: Attribute.Component<'page.button'>;
  };
}

export interface PageBannerListHorizontal extends Schema.Component {
  collectionName: 'components_page_banner_list_horizontals';
  info: {
    displayName: 'banner-list-horizontal';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'page.list-item', true>;
    button: Attribute.Component<'page.button'>;
  };
}

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    text: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface PageFaqItem extends Schema.Component {
  collectionName: 'components_page_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Blocks;
  };
}

export interface PageFaq extends Schema.Component {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'page.faq-item', true>;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'alien';
  };
  attributes: {
    logo: Attribute.Media;
    title: Attribute.String;
    subtitle: Attribute.String;
    buttons: Attribute.Component<'page.button', true>;
  };
}

export interface PageListItem extends Schema.Component {
  collectionName: 'components_page_list_items';
  info: {
    displayName: 'list-item';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface PagePartnersLogos extends Schema.Component {
  collectionName: 'components_page_partners_logos';
  info: {
    displayName: 'partners-logos';
  };
  attributes: {
    title: Attribute.String;
    logos: Attribute.Media;
  };
}

export interface PageReview extends Schema.Component {
  collectionName: 'components_page_reviews';
  info: {
    displayName: 'review';
  };
  attributes: {
    avatar: Attribute.Media;
    name: Attribute.String;
    text: Attribute.Text;
  };
}

export interface PageReviews extends Schema.Component {
  collectionName: 'components_page_user_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {
    title: Attribute.String;
    reviews: Attribute.Component<'page.review', true>;
  };
}

export interface PageSimpleBanner extends Schema.Component {
  collectionName: 'components_page_simple_banners';
  info: {
    displayName: 'simple-banner';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
    button: Attribute.Component<'page.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.50-50': Page5050;
      'page.banner-50-50': PageBanner5050;
      'page.banner-list-horizontal': PageBannerListHorizontal;
      'page.button': PageButton;
      'page.faq-item': PageFaqItem;
      'page.faq': PageFaq;
      'page.header': PageHeader;
      'page.list-item': PageListItem;
      'page.partners-logos': PagePartnersLogos;
      'page.review': PageReview;
      'page.reviews': PageReviews;
      'page.simple-banner': PageSimpleBanner;
    }
  }
}
