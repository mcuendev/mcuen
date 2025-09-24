export interface Translation {
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
    education: {
      title: string;
      items: string[];
    };
    exhibitions: {
      title: string;
      items: string[];
    };
  };
  reviews: {
    title: string;
    quotes: Array<{
      text: string;
      author: string;
      source: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    formNote: string;
  };
}

export const es: Translation = {
  welcome: {
    title: "Bienvenida",
    subtitle: "Bienvenido/a al taller de Mónica Cuén",
    description:
      "Descubre una selección de obras y ambientes únicos, pensados para inspirar y personalizar cualquier espacio. Cada creación es exclusiva y adaptada a su entorno.",
  },
  environments: {
    title: "Ambientes",
    subtitle:
      "Explora ambientes cuidadosamente diseñados para revistas de interiorismo, arte y decoración",
    description:
      "Cada espacio refleja exclusividad y personalización, adaptándose a las necesidades de cada cliente y proyecto.",
    layout: {
      gallery:
        "Galería de 25 imágenes de ambientes reales con obras de la artista.",
      focus: "Enfoque en la singularidad y adaptación de cada ambiente.",
    },
  },
  artworks: {
    title: "Obras",
    subtitle: "Descubre la colección de cuadros de Mónica Cuén",
    description:
      "Caracterizados por su versatilidad y capacidad de integrarse en diferentes estilos y espacios.",
    layout: {
      gallery: "Galería de 24 obras destacadas.",
      adaptable: "Obras adaptables y personalizadas para cada cliente.",
    },
  },
  career: {
    title: "Trayectoria",
    education: {
      title: "Formación",
      items: [
        "Aprendizaje inicial con su abuelo, el pintor Jesús Cuén.",
        "Formación y técnicas con el escultor Cocomir, experto en el mercado norteamericano.",
        "Encuentros y colaboraciones con maestros del arte.",
      ],
    },
    exhibitions: {
      title: "Exposiciones y Reconocimientos",
      items: [
        "Obra itinerante en Andorra y Barcelona desde 2001, con presencia en revistas como Arquitectura y Diseño, Interiores, Mi Casa y El Mueble.",
        "Participación en exposiciones colectivas y ferias de arte en Andorra, Barcelona, Londres y Tokio.",
        "Colaboraciones con galerías y proyectos internacionales.",
      ],
    },
  },
  reviews: {
    title: "Crítica",
    quotes: [
      {
        text: "Pintora versátil en su obra, su pintura se adapta a cada ambiente y estilo dando un toque personalísimo e inimitable.",
        author: "Monti Canongia",
        source: "revista Interiores",
      },
      {
        text: "Su obra es camaleónica. Me sorprende una y otra vez su capacidad para mimetizarse o desmimetizarse del entorno. Ambiente y decoración se convierten en sinónimos en su obra.",
        author: "Bernardo Baiget",
        source: "Cortinova/Casadecor",
      },
      {
        text: "El talento de Mónica Cuén se expresa en cada una de sus creaciones ya que consigue adaptarlas al espacio convirtiendo sus obras en elementos decorativos singulares y personales.",
        author: "Isabel Núñez",
        source: "EL MUEBLE",
      },
      {
        text: "Sus propuestas son frescas y muy actuales por lo que encajan perfectamente en los espacios contemporáneos de todos los estilos. Sus cuadros suponen el toque final de la decoración.",
        author: "Manu Núñez",
        source: "EL MUEBLE",
      },
    ],
  },
  contact: {
    title: "Contacto",
    description:
      "¿Quieres saber más o solicitar una obra personalizada? Ponte en contacto:",
    phone: "(+34) 645 33 60 66",
    email: "info@monicacuen.com",
    formNote: "Formulario de contacto disponible para consultas y encargos.",
  },
};

export const ca: Translation = {
  welcome: {
    title: "Benvinguda",
    subtitle: "Benvingut/da al taller de la Mónica Cuén",
    description:
      "Descobreix una selecció d'obres i ambients únics, pensats per inspirar i personalitzar qualsevol espai. Cada creació és exclusiva i adaptada al seu entorn.",
  },
  environments: {
    title: "Ambients",
    subtitle:
      "Explora ambients acuradament dissenyats per a revistes d'interiorisme, art i decoració",
    description:
      "Cada espai reflecteix exclusivitat i personalització, adaptant-se a les necessitats de cada client i projecte.",
    layout: {
      gallery: "Galeria de 25 imatges d'ambients reals amb obres de l'artista.",
      focus: "Èmfasi en la singularitat i adaptació de cada ambient.",
    },
  },
  artworks: {
    title: "Obres",
    subtitle: "Descobreix la col·lecció de quadres de la Mónica Cuén",
    description:
      "Caracteritzats per la seva versatilitat i capacitat d'integrar-se en diferents estils i espais.",
    layout: {
      gallery: "Galeria de 24 obres destacades.",
      adaptable: "Obres adaptables i personalitzades per a cada client.",
    },
  },
  career: {
    title: "Trajectòria",
    education: {
      title: "Formació",
      items: [
        "Aprenentatge inicial amb el seu avi, el pintor Jesús Cuén.",
        "Formació i tècniques amb l'escultor Cocomir, expert en el mercat nord-americà.",
        "Trobades i col·laboracions amb mestres de l'art.",
      ],
    },
    exhibitions: {
      title: "Exposicions i Reconeixements",
      items: [
        "Obra itinerant a Andorra i Barcelona des de 2001, amb presència a revistes com Arquitectura y Diseño, Interiores, Mi Casa i El Mueble.",
        "Participació en exposicions col·lectives i fires d'art a Andorra, Barcelona, Londres i Tòquio.",
        "Col·laboracions amb galeries i projectes internacionals.",
      ],
    },
  },
  reviews: {
    title: "Crítica",
    quotes: [
      {
        text: "Pintora versàtil en la seva obra, la seva pintura s'adapta a cada ambient i estil donant un toc personalíssim i inimitable.",
        author: "Monti Canongia",
        source: "revista Interiores",
      },
      {
        text: "La seva obra és camaleònica. Em sorprèn una i altra vegada la seva capacitat per mimetitzar-se o desmimetitzar-se de l'entorn. Ambient i decoració esdevenen sinònims en la seva obra.",
        author: "Bernardo Baiget",
        source: "Cortinova/Casadecor",
      },
      {
        text: "El talent de la Mónica Cuén s'expressa en cadascuna de les seves creacions ja que aconsegueix adaptar-les a l'espai convertint les seves obres en elements decoratius singulars i personals.",
        author: "Isabel Núñez",
        source: "EL MUEBLE",
      },
      {
        text: "Les seves propostes són fresques i molt actuals pel que encaixen perfectament en els espais contemporanis de tots els estils. Els seus quadres suposen el toc final de la decoració.",
        author: "Manu Núñez",
        source: "EL MUEBLE",
      },
    ],
  },
  contact: {
    title: "Contacte",
    description:
      "Vols saber-ne més o sol·licitar una obra personalitzada? Posa't en contacte:",
    phone: "(+34) 645 33 60 66",
    email: "info@monicacuen.com",
    formNote: "Formulari de contacte disponible per a consultes i encàrrecs.",
  },
};

export const en: Translation = {
  welcome: {
    title: "Welcome",
    subtitle: "Welcome to Mónica Cuén's studio",
    description:
      "Discover a selection of unique artworks and environments, designed to inspire and personalize any space. Each creation is exclusive and adapted to its surroundings.",
  },
  environments: {
    title: "Environments",
    subtitle:
      "Explore carefully designed environments for interior design, art, and decoration magazines",
    description:
      "Each space reflects exclusivity and personalization, adapting to the needs of each client and project.",
    layout: {
      gallery:
        "Gallery of 25 images featuring real environments with the artist's works.",
      focus: "Focus on the uniqueness and adaptation of each environment.",
    },
  },
  artworks: {
    title: "Artworks",
    subtitle: "Discover Mónica Cuén's collection of paintings",
    description:
      "Characterized by their versatility and ability to integrate into different styles and spaces.",
    layout: {
      gallery: "Gallery of 24 featured artworks.",
      adaptable: "Adaptable and personalized works for each client.",
    },
  },
  career: {
    title: "Career",
    education: {
      title: "Education",
      items: [
        "Initial learning with her grandfather, painter Jesús Cuén.",
        "Training and techniques with sculptor Cocomir, an expert in the North American market.",
        "Encounters and collaborations with art masters.",
      ],
    },
    exhibitions: {
      title: "Exhibitions and Recognition",
      items: [
        "Traveling exhibition in Andorra and Barcelona since 2001, featured in magazines such as Arquitectura y Diseño, Interiores, Mi Casa, and El Mueble.",
        "Participation in collective exhibitions and art fairs in Andorra, Barcelona, London, and Tokyo.",
        "Collaborations with galleries and international projects.",
      ],
    },
  },
  reviews: {
    title: "Reviews",
    quotes: [
      {
        text: "A versatile painter in her work, her paintings adapt to each environment and style, giving a highly personal and inimitable touch.",
        author: "Monti Canongia",
        source: "Interiores magazine",
      },
      {
        text: "Her work is chameleon-like. I am repeatedly surprised by her ability to blend into or stand out from the surroundings. Environment and decoration become synonymous in her work.",
        author: "Bernardo Baiget",
        source: "Cortinova/Casadecor",
      },
      {
        text: "Mónica Cuén's talent is expressed in each of her creations as she manages to adapt them to the space, turning her works into unique and personal decorative elements.",
        author: "Isabel Núñez",
        source: "EL MUEBLE",
      },
      {
        text: "Her proposals are fresh and very current, fitting perfectly in contemporary spaces of all styles. Her paintings provide the finishing touch to the decoration.",
        author: "Manu Núñez",
        source: "EL MUEBLE",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Want to know more or request a personalized artwork? Get in touch:",
    phone: "(+34) 645 33 60 66",
    email: "info@monicacuen.com",
    formNote: "Contact form available for inquiries and commissions.",
  },
};

// Helper function to get translations for a specific language
export const getTranslations = (lang: "es" | "ca" | "en"): Translation => {
  const translations = {
    es,
    ca,
    en,
  };
  return translations[lang];
};

export const languageNames = {
  es: "Español",
  ca: "Català",
  en: "English",
};

// Export supported languages
export const supportedLanguages = ["ca", "es", "en"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
