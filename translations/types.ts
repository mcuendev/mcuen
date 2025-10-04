import { supportedLanguages } from ".";

/* ------------------------
    Business Translations Types
   ------------------------ */

export interface BusinessTranslation {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
  };
  environments: {
    title: string;
    subtitle: string;
    description: string;
    layout: {
      gallery: string;
      focus: string;
    };
  };
  artworks: {
    title: string;
    subtitle: string;
    description: string;
    layout: {
      gallery: string;
      adaptable: string;
    };
  };
  career: {
    title: string;
    subtitle: string;
    description: string;
    education: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    exhibitions: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
  };
  reviews: {
    title: string;
    subtitle: string;
    description: string;
    quotes: Array<{
      text: string;
      author: string;
      source: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    formNote: string;
  };
}

/* ------------------------
    Ui Translations Types
   ------------------------ */

export interface UITranslation {
  artworks: {
    labels: {
      collection: string;
      year: string;
    };
    sections: {
      moreFromCollection: string;
    };
    filters: {
      ariaSearch: string;
      search: string;
      allCollections: string;
    };
  };
  buttons: {
    submit: string;
    cancel: string;
    close: string;
    backToGallery: string;
    contactArtist: string;
    skipLink: string;
    exploreEnvironments: string;
    viewArtworks: string;
  };
  common: {
    loading: string;
    noResults: string;
    noResultsDetails: string;
    notFound: string;
  };
  errors: {
    generic: string;
    network: string;
  };
  forms: {
    required: string;
    invalidEmail: string;
  };
  pagination: {
    prev: string;
    next: string;
  };
}

export type AppTranslation = BusinessTranslation & { ui: UITranslation };
export type SupportedLanguage = (typeof supportedLanguages)[number];
