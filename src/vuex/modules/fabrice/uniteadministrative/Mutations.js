/////////////////////////////////*debut mutation type texte */////////////////////
// afficher les type de texte*
const GET_ALL_TYPES_TEXTES = (state, tableauTypeTexte) => {
  state.typeTextes = tableauTypeTexte;
};

// ajouter type_textes
const AJOUTER_TYPE_TEXTE = (state, nouveau_type) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.typeTextes.unshift(nouveau_type);
};

// modifier type_textes
const MODIFIER_TYPE_TEXTES = (state, objetModifie) => {
  state.typeTextes = state.typeTextes.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_TYPE_TEXTE = (state, id) => {
  state.typeTextes = state.typeTextes.filter(type => type.id != id);
};

/*fin mutation type texte */

////////////////////////////////////*debut mutation unite administrative *//////////////////////

// afficher des unite administrative*
const GET_ALL_UNITE_ADMINISTRATIVE = (state, tableauUniteAdministrative) => {
  state.uniteAdministratives = tableauUniteAdministrative;
};
// ajouter unite administrative
const AJOUTER_UNITE_ADMINISTRATIVE = (state, nouveau_unite_administrative) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.uniteAdministratives.unshift(nouveau_unite_administrative);
};
// modifier unite administrative
const MODIFIER_UNITE_ADMINISTRATIVE = (state, objetModifie) => {
  state.uniteAdministratives = state.uniteAdministratives.map(
    uniteadministrative => {
      if (uniteadministrative.id == objetModifie.id) {
        uniteadministrative = { ...objetModifie };
      }

      return uniteadministrative;
    }
  );
};
// supprimer unite administrative
const SUPPRIMER_UNITE_ADMINISTRATIVE = (state, id) => {
  state.uniteAdministratives = state.uniteAdministratives.filter(
    uniteadministrative => uniteadministrative.id != id
  );
};
/*fin mutation unite administrative */

////////////////////////////////////*debut mutation archivage note de service *//////////////////////

// afficher des archivage note de service*
const GET_ALL_ARCHIVAGE_DOCUMENT = (state, tableauArchivageDocument) => {
  state.archivageDocuments = tableauArchivageDocument;
};
// ajouter note de service
const AJOUTER_ARCHIVAGE_DOCUMENT = (state, nouveau_archivage_document) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.archivageDocuments.unshift(nouveau_archivage_document);
};
// modifier note de service
const MODIFIER_ARCHIVAGE_DOCUMENT = (state, objetModifie) => {
  state.archivageDocuments = state.archivageDocuments.map(archivagedocument => {
    if (archivagedocument.id == objetModifie.id) {
      archivagedocument = { ...objetModifie };
    }

    return archivagedocument;
  });
};
// supprimer note de service
const SUPPRIMER_ARCHIVAGE_DOCUMENT = (state, id) => {
  state.archivageDocuments = state.archivageDocuments.filter(
    archivageDocuments => archivageDocuments.id != id
  );
};



export {
  GET_ALL_TYPES_TEXTES,
  AJOUTER_TYPE_TEXTE,
  MODIFIER_TYPE_TEXTES,
  SUPPRIMER_TYPE_TEXTE,
  /*export debut mutation ua */
  GET_ALL_UNITE_ADMINISTRATIVE,
  AJOUTER_UNITE_ADMINISTRATIVE,
  MODIFIER_UNITE_ADMINISTRATIVE,
  SUPPRIMER_UNITE_ADMINISTRATIVE,
  /*export fin mutation ua */

  /*export debut mutation note service */
  GET_ALL_ARCHIVAGE_DOCUMENT,
  AJOUTER_ARCHIVAGE_DOCUMENT,
  MODIFIER_ARCHIVAGE_DOCUMENT,
  SUPPRIMER_ARCHIVAGE_DOCUMENT
  
};
