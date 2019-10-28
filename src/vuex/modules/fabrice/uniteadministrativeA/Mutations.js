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
////////////////////////////////////*debut mutation acte de creation *//////////////////////

// afficher des actes de creation*
const GET_ALL_ACTE_CREATION = (state, tableauActeCreation) => {
  state.acteCreations = tableauActeCreation;
};
// ajouter actes de creation
const AJOUTER_ACTE_CREATION = (state, nouveau_acte_creation) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.acteCreations.unshift(nouveau_acte_creation);
};
// modifier actes de creation
const MODIFIER_ACTE_CREATION = (state, objetModifie) => {
  state.acteCreations = state.acteCreations.map(actecreation => {
    if (actecreation.id == objetModifie.id) {
      actecreation = { ...objetModifie };
    }

    return actecreation;
  });
};
// supprimer acte de creation
const SUPPRIMER_ACTE_CREATION = (state, id) => {
  state.acteCreations = state.acteCreations.filter(
    actecreation => actecreation.id != id
  );
};
/*fin mutation acte de creation */
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

////////////////////////////////////*debut mutation note de service *//////////////////////

// afficher des note de service*
const GET_ALL_NOTE_SERVICE = (state, tableauNoteService) => {
  state.noteServices = tableauNoteService;
};
// ajouter note de service
const AJOUTER_NOTE_SERVICE = (state, nouveau_note_service) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.noteServices.unshift(nouveau_note_service);
};
// modifier note de service
const MODIFIER_NOTE_SERVICE = (state, objetModifie) => {
  state.noteServices = state.noteServices.map(noteservice => {
    if (noteservice.id == objetModifie.id) {
      noteservice = { ...objetModifie };
    }

    return noteservice;
  });
};
// supprimer note de service
const SUPPRIMER_NOTE_SERVICE = (state, id) => {
  state.noteServices = state.noteServices.filter(
    noteservice => noteservice.id != id
  );
};
/*fin mutation note de services */

////////////////////////////////////*debut mutation archivage note de service *//////////////////////

// afficher des archivage note de service*
const GET_ALL_ARCHIVAGE_NOTE_SERVICE = (state, tableauArchivageNoteService) => {
  state.archivageNoteServices = tableauArchivageNoteService;
};
// ajouter note de service
const AJOUTER_ARCHIVAGE_NOTE_SERVICE = (
  state,
  nouveau_archivage_note_service
) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.archivageNoteServices.unshift(nouveau_archivage_note_service);
};
// modifier note de service
const MODIFIER_ARCHIVAGE_NOTE_SERVICE = (state, objetModifie) => {
  state.archivageNoteServices = state.archivageNoteServices.map(
    archivagenoteservice => {
      if (archivagenoteservice.id == objetModifie.id) {
        archivagenoteservice = { ...objetModifie };
      }

      return archivagenoteservice;
    }
  );
};
// supprimer note de service
const SUPPRIMER_ARCHIVAGE_NOTE_SERVICE = (state, id) => {
  state.archivageNoteServices = state.archivageNoteServices.filter(
    archivagenoteservice => archivagenoteservice.id != id
  );
};
// afficher le nombre de type text*
const GET_ALL_NOMBRE_TYPE_TEXT = (state, tableauTypeTexte) => {
  state.listeTypeTextes = tableauTypeTexte;
};

//AUTRE REQUETE

// afficher le nombre de ua*
const GET_ALL_NOMBRE_NOTE_SERV = (state, tableauNoteService) => {
  state.nbreNoteServices = tableauNoteService;
};

//recherche de document par unite administrative

// afficher le nombre de ua*
const GET_ALL_RECH_DOC_UA = (state, tableaudocumentau) => {
  state.listeDocUniteAdministratives = tableaudocumentau;
};
// afficher le nombre de acte creation*
const GET_ALL_NOMBRE_ACTE_CREATION = (state, tableauActeCreat) => {
  state.nbreActeCreations = tableauActeCreat;
};
// afficher le nombre de acte creation*
const GET_ALL_NOMBRE_UA = (state, tableauUA) => {
  state.nbreUniteAdministratives = tableauUA;
};
// afficher le nombre archivage*
const GET_ALL_NOMBRE_ARCHIVAGE = (state, tableauArchivage) => {
  state.nbreArchivageNotes = tableauArchivage;
};
export {
  GET_ALL_TYPES_TEXTES,
  AJOUTER_TYPE_TEXTE,
  MODIFIER_TYPE_TEXTES,
  SUPPRIMER_TYPE_TEXTE,
  /*export debut mutation acte de creation */
  GET_ALL_ACTE_CREATION,
  AJOUTER_ACTE_CREATION,
  MODIFIER_ACTE_CREATION,
  SUPPRIMER_ACTE_CREATION,
  /*export fin mutation acte de creation */
  /*export debut mutation ua */
  GET_ALL_UNITE_ADMINISTRATIVE,
  AJOUTER_UNITE_ADMINISTRATIVE,
  MODIFIER_UNITE_ADMINISTRATIVE,
  SUPPRIMER_UNITE_ADMINISTRATIVE,
  /*export fin mutation ua */
  /*export debut mutation note service */
  GET_ALL_NOTE_SERVICE,
  AJOUTER_NOTE_SERVICE,
  MODIFIER_NOTE_SERVICE,
  SUPPRIMER_NOTE_SERVICE,
  /*export fin mutation note service */
  /*export debut mutation note service */
  GET_ALL_ARCHIVAGE_NOTE_SERVICE,
  AJOUTER_ARCHIVAGE_NOTE_SERVICE,
  MODIFIER_ARCHIVAGE_NOTE_SERVICE,
  SUPPRIMER_ARCHIVAGE_NOTE_SERVICE,
  /*export fin mutation note service */

  /* AUTRE REQUETE*/

  GET_ALL_NOMBRE_TYPE_TEXT,
  GET_ALL_NOMBRE_NOTE_SERV,
  GET_ALL_RECH_DOC_UA,
  GET_ALL_NOMBRE_ACTE_CREATION,
  GET_ALL_NOMBRE_UA,
  GET_ALL_NOMBRE_ARCHIVAGE
};
