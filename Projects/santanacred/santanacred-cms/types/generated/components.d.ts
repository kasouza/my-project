import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageBanner extends Schema.Component {
  collectionName: 'components_home_page_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo: Attribute.String;
  };
}

export interface HomePageCabecalho extends Schema.Component {
  collectionName: 'components_home_page_cabecalhos';
  info: {
    displayName: 'cabecalho';
  };
  attributes: {
    logo: Attribute.Media;
    links: Attribute.Component<'home-page.link', true>;
  };
}

export interface HomePageCardServico extends Schema.Component {
  collectionName: 'components_home_page_card_servicos';
  info: {
    displayName: 'section_3_card';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    texto: Attribute.Blocks;
  };
}

export interface HomePageLink extends Schema.Component {
  collectionName: 'components_home_page_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    texto: Attribute.String;
    url: Attribute.String;
  };
}

export interface HomePageSecao4 extends Schema.Component {
  collectionName: 'components_home_page_secao_4s';
  info: {
    displayName: 'secao_4';
  };
  attributes: {
    cards: Attribute.Component<'page.card-com-imagem', true> &
      Attribute.Required;
  };
}

export interface HomePageSecao1 extends Schema.Component {
  collectionName: 'components_home_page_secao1s';
  info: {
    displayName: 'secao1';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    texto_esquerda: Attribute.Blocks;
    texto_direita: Attribute.Blocks;
  };
}

export interface HomePageSecao2 extends Schema.Component {
  collectionName: 'components_home_page_secao2s';
  info: {
    displayName: 'secao2';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    imagem_centro: Attribute.Media;
    cards: Attribute.Component<'home-page.card-servico', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 4;
        max: 4;
      }>;
  };
}

export interface HomePageSecao3 extends Schema.Component {
  collectionName: 'components_home_page_secao3s';
  info: {
    displayName: 'secao3';
  };
  attributes: {};
}

export interface HomePageSecao5Card extends Schema.Component {
  collectionName: 'components_home_page_secao5_cards';
  info: {
    displayName: 'secao5_card';
  };
  attributes: {
    titulo: Attribute.String;
    texto: Attribute.Blocks;
  };
}

export interface HomePageSecao5 extends Schema.Component {
  collectionName: 'components_home_page_secao5s';
  info: {
    displayName: 'secao5';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo_1: Attribute.String;
    subtitulo_2: Attribute.String;
    texto: Attribute.Blocks;
    cards: Attribute.Component<'home-page.secao5-card', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 3;
        max: 3;
      }>;
  };
}

export interface HomePageSecao6 extends Schema.Component {
  collectionName: 'components_home_page_secao6s';
  info: {
    displayName: 'secao6';
  };
  attributes: {
    title: Attribute.String;
    parceiros: Attribute.Media & Attribute.Required;
  };
}

export interface PageCardComImagem extends Schema.Component {
  collectionName: 'components_page_card_com_imagems';
  info: {
    displayName: 'card_com_imagem';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    texto: Attribute.Blocks;
    imagem: Attribute.Media;
    link: Attribute.String;
  };
}

export interface SaquefgtsLpAvaliacao extends Schema.Component {
  collectionName: 'components_saquefgts_lp_avaliacaos';
  info: {
    displayName: 'avaliacao';
  };
  attributes: {
    nome: Attribute.String & Attribute.Required;
    texto: Attribute.Blocks & Attribute.Required;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface SaquefgtsLpFaqItem extends Schema.Component {
  collectionName: 'components_saquefgts_lp_faq_items';
  info: {
    displayName: 'faq_item';
  };
  attributes: {
    pergunta: Attribute.String & Attribute.Required;
    resposta: Attribute.Blocks & Attribute.Required;
  };
}

export interface SaquefgtsLpHeader extends Schema.Component {
  collectionName: 'components_saquefgts_lp_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    logo: Attribute.Media;
    titulo: Attribute.String & Attribute.Required;
    subtitulo: Attribute.String & Attribute.Required;
    imagem_direita: Attribute.Media & Attribute.Required;
  };
}

export interface SaquefgtsLpSecao1 extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao1s';
  info: {
    displayName: 'secao1';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    texto: Attribute.Blocks & Attribute.Required;
  };
}

export interface SaquefgtsLpSecao2Card extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao2_cards';
  info: {
    displayName: 'secao2_card';
  };
  attributes: {
    icone: Attribute.Media & Attribute.Required;
    titulo: Attribute.String & Attribute.Required;
    texto: Attribute.Blocks & Attribute.Required;
  };
}

export interface SaquefgtsLpSecao2 extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao2s';
  info: {
    displayName: 'secao2';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    cards: Attribute.Component<'saquefgts-lp.secao2-card', true> &
      Attribute.Required;
  };
}

export interface SaquefgtsLpSecao3 extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao3s';
  info: {
    displayName: 'secao3';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    parceiros: Attribute.Media & Attribute.Required;
  };
}

export interface SaquefgtsLpSecao4 extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao4s';
  info: {
    displayName: 'secao4';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    texto: Attribute.Blocks & Attribute.Required;
    subtitulo: Attribute.String & Attribute.Required;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface SaquefgtsLpSecao5 extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao5s';
  info: {
    displayName: 'secao5';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    faq: Attribute.Component<'saquefgts-lp.faq-item', true> &
      Attribute.Required;
  };
}

export interface SaquefgtsLpSecao6 extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao6s';
  info: {
    displayName: 'secao6';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    texto: Attribute.Blocks & Attribute.Required;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface SaquefgtsLpSecao7 extends Schema.Component {
  collectionName: 'components_saquefgts_lp_secao7s';
  info: {
    displayName: 'secao7';
  };
  attributes: {
    avaliacoes: Attribute.Component<'saquefgts-lp.avaliacao', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-page.banner': HomePageBanner;
      'home-page.cabecalho': HomePageCabecalho;
      'home-page.card-servico': HomePageCardServico;
      'home-page.link': HomePageLink;
      'home-page.secao-4': HomePageSecao4;
      'home-page.secao1': HomePageSecao1;
      'home-page.secao2': HomePageSecao2;
      'home-page.secao3': HomePageSecao3;
      'home-page.secao5-card': HomePageSecao5Card;
      'home-page.secao5': HomePageSecao5;
      'home-page.secao6': HomePageSecao6;
      'page.card-com-imagem': PageCardComImagem;
      'saquefgts-lp.avaliacao': SaquefgtsLpAvaliacao;
      'saquefgts-lp.faq-item': SaquefgtsLpFaqItem;
      'saquefgts-lp.header': SaquefgtsLpHeader;
      'saquefgts-lp.secao1': SaquefgtsLpSecao1;
      'saquefgts-lp.secao2-card': SaquefgtsLpSecao2Card;
      'saquefgts-lp.secao2': SaquefgtsLpSecao2;
      'saquefgts-lp.secao3': SaquefgtsLpSecao3;
      'saquefgts-lp.secao4': SaquefgtsLpSecao4;
      'saquefgts-lp.secao5': SaquefgtsLpSecao5;
      'saquefgts-lp.secao6': SaquefgtsLpSecao6;
      'saquefgts-lp.secao7': SaquefgtsLpSecao7;
    }
  }
}
