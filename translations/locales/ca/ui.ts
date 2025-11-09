import { UITranslation } from "@/translations/types";

export const ui: UITranslation = {
  artworks: {
    labels: {
      collection: "Col·lecció",
      technique: "Tècnica",
      year: "Any",
    },
    sections: {
      moreFromCollection: "Més d'aquesta Col·lecció",
    },
    filters: {
      ariaSearch: "Cercar quadres",
      search: "Cerca per títol, descripció o col·lecció",
      allCollections: "Totes les col·leccions",
    },
  },
  buttons: {
    submit: "Enviar",
    cancel: "Cancel·lar",
    close: "Tancar",
    backToGallery: "Tornar a la Galeria",
    contactArtist: "Contacta amb la Monica",
    skipLink: "Salta al contingut",
    exploreEnvironments: "Explora Ambients",
    viewArtworks: "Veure Obres",
    language: "Idioma",
  },
  common: {
    loading: "Carregant...",
    noResults: "No s'han trobat quadres",
    noResultsDetails:
      "No s'ha trobat cap quadre que coincideixi amb els criteris de cerca actuals. Prova d'ajustar els filtres o els termes de cerca.",
    notFound: "Aquesta pàgina no existeix",
  },
  navigation: {
    menu: {
      description:
        "Explora els diferents espais disponibles en aquest lloc web.",
    },
  },
  errors: {
    generic: "S'ha produït un error. Torna-ho a provar més tard.",
    network: "Error de connexió. Revisa la teva xarxa.",
  },
  forms: {
    required: "Aquest camp és obligatori",
    invalidEmail: "Correu electrònic invàlid",
  },
  pagination: { prev: "Anterior", next: "Següent" },
};
