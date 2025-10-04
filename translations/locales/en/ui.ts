import { UITranslation } from "@/translations/types";

export const ui: UITranslation = {
  artworks: {
    labels: {
      collection: "Collection",
      year: "Year",
    },
    sections: {
      moreFromCollection: "More from this Collection",
    },
  },
  buttons: {
    submit: "Submit",
    cancel: "Cancel",
    close: "Close",
    backToGallery: "Back to Gallery",
    contactArtist: "Contact Monica",
    skipLink: "Skip to content",
    exploreEnvironments: "Explore Environments",
    viewArtworks: "View Artworks",
  },
  common: {
    loading: "Loading...",
    noResults: "No paintings found",
    noResultsDetails:
      "No artworks match your current search criteria. Try adjusting your filters or search terms.",
    notFound: "This page does not exist",
  },
  errors: {
    generic: "An error occurred. Please try again later.",
    network: "Connection error. Check your network.",
  },
  forms: {
    required: "This field is required",
    invalidEmail: "Invalid email address",
  },
  pagination: { prev: "Previous", next: "Next" },
};
