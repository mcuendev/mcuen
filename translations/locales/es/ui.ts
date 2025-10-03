import { UITranslation } from "@/translations/types";

export const ui: UITranslation = {
  artworks: {
    labels: {
      collection: "Colección",
      year: "Año",
    },
    sections: {
      moreFromCollection: "Más de esta Colección",
    },
  },
  buttons: {
    submit: "Enviar",
    cancel: "Cancelar",
    close: "Cerrar",
    backToGallery: "Volver a la Galería",
    contactArtist: "Contacta con Monica",
  },
  common: {
    loading: "Cargando...",
    noResults: "No se han encontrado cuadros",
    noResultsDetails:
      "No hay cuadros que coincidan con tus criterios de búsqueda actuales. Prueba a ajustar los filtros o los términos de búsqueda.",
    notFound: "Esta página no existe",
  },
  errors: {
    generic: "Se ha producido un error. Vuelve a intentarlo más tarde.",
    network: "Error de conexión. Revisa tu red.",
  },
  forms: {
    required: "Este campo es obligatorio",
    invalidEmail: "Correo electrónico no válido",
  },
  pagination: { prev: "Anterior", next: "Siguiente" },
};
