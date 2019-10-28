import axios from "./urls/api";

var housecall = require("housecall");
var queue = housecall({ concurrency: 2, cooldown: 1000 });
//////////////////////////*debut action type texte */////////////////////////////

// afficher liste des type de textes
export function getAllTypeTextes({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_type_text")
      .then(response => {
        commit("GET_ALL_TYPES_TEXTES", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterTypeTexte({ commit }, nouveau) {
  axios
    .post("/ajouter_type_text", {
      code: nouveau.code,
      libelle: nouveau.libelle
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TYPE_TEXTE", response.data);
      }
    });
}

// modifier
export function modifierTypeTexte({ commit }, nouveau) {
  axios
    .put("/modifier_type_text/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle
    })
    .then(response => {
      commit("MODIFIER_TYPE_TEXTES", response.data);
    });
}
//supprimer
export function supprimerTypeTexte({ commit }, id) {
  let conf = confirm("Voulez vous vraiment supprimer ?");

  if (conf) {
    commit("SUPPRIMER_TYPE_TEXTE", id);

    axios.delete("/supprimer_typetext/" + id);
  }
}

/*fin action type texte */

////////////////////////////////*debut action acte de creation*//////////////////////////////

// afficher liste des acte de creation
export function getAllActeCreation({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_acte_creation")
      .then(response => {
        commit("GET_ALL_ACTE_CREATION", response.data);
      })
      .catch(error => console.log(error));
  });
}
// ajouter acte de creation
export function ajouterActeCreation({ commit }, nouveau) {
  axios
    .post("/ajouter_acte_creation", {
      code: nouveau.code,
      libelle: nouveau.libelle,
      typetext_id: nouveau.typetext_id,
      uniteadministrative_id: nouveau.uniteadministrative_id
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ACTE_CREATION", response.data);
      }
    });
}
// modifier
export function modifierActeCreation({ commit }, nouveau) {
  axios
    .put("/modifier_acte_creation/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle,
      typetext_id: nouveau.typetext_id,
      uniteadministrative_id: nouveau.uniteadministrative_id
    })
    .then(response => {
      commit("MODIFIER_ACTE_CREATION", response.data);
    });
}
//supprimer acte de creation
export function supprimerActeCreation({ commit }, id) {
  let conf = confirm("Voulez vous vraiment supprimer ?");

  if (conf) {
    commit("SUPPRIMER_ACTE_CREATION", id);

    axios.delete("/supprimer_acte_creation/" + id);
  }
}
/*fin action acte de creation */
////////////////////////////////*debut action Unite administrative*//////////////////////////////

// afficher liste des Unite administrative
export function getAllUniteAdministrative({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_unite_administrative")
      .then(response => {
        commit("GET_ALL_UNITE_ADMINISTRATIVE", response.data);
      })
      .catch(error => console.log(error));
  });
}
// ajouter Unite administrative
export function ajouterUniteAdministrative({ commit }, nouveau) {
  axios
    .post("/ajouter_unite_administrative", {
      code: nouveau.code,
      libelle: nouveau.libelle,
      section_id: nouveau.section_id,
      chapitre_id: nouveau.chapitre_id
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_UNITE_ADMINISTRATIVE", response.data);
      }
    });
}
// modifier Unite administrative
export function modifierUniteAdministrative({ commit }, nouveau) {
  axios
    .put("/modifier_unite_administrative/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle,
      section: nouveau.section_id,
      chapitre_id: nouveau.chapitre_id
    })
    .then(response => {
      commit("MODIFIER_UNITE_ADMINISTRATIVE", response.data);
    });
}
//supprimer Unite administrative
export function supprimerUniteAdministrative({ commit }, id) {
  let conf = confirm("Voulez vous vraiment supprimer ?");

  if (conf) {
    commit("SUPPRIMER_UNITE_ADMINISTRATIVE", id);

    axios.delete("/supprimer_unite_administrative/" + id);
  }
}
/*fin action Unite administrative */

////////////////////////////////*debut action note se service*//////////////////////////////

// afficher liste des note se service
export function getAllNoteService({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_note_service")
      .then(response => {
        commit("GET_ALL_NOTE_SERVICE", response.data);
      })
      .catch(error => console.log(error));
  });
}
// afficher liste des note se service
// ajouter note se service
export function ajouterNoteService({ commit }, nouveau) {
  axios
    .post("/ajouter_note_service", {
      code: nouveau.code,
      objet: nouveau.objet,
      date_signature: nouveau.date_signature,
      date_publication: nouveau.date_publication,
      unite_administrative_id: nouveau.unite_administrative_id
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NOTE_SERVICE", response.data);
      }
    });
}
// modifier note se service
export function modifierNoteService({ commit }, nouveau) {
  axios
    .put("/modifier_note_service/" + nouveau.id, {
      code: nouveau.code,
      objet: nouveau.objet,
      date_signature: nouveau.date_signature,
      date_publication: nouveau.date_publication,
      unite_administrative_id: nouveau.unite_administrative_id
    })
    .then(response => {
      commit("MODIFIER_NOTE_SERVICE", response.data);
    });
}
// afficher liste des note se service
//supprimer note se service
export function supprimerNoteService({ commit }, id) {
  let conf = confirm("Voulez vous vraiment supprimer ?");

  if (conf) {
    commit("SUPPRIMER_NOTE_SERVICE", id);

    axios.delete("/supprimer_note_service/" + id);
  }
}
/*fin action note se service */
////////////////////////////////*debut action archivage note se service*//////////////////////////////

// afficher liste des archivage note se service

export function getAllArchivageNoteService({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_archivage_note_services")
      .then(response => {
        commit("GET_ALL_ARCHIVAGE_NOTE_SERVICE", response.data);
      })
      .catch(error => console.log(error));
  });
}
// ajouter archivage note se service
export function ajouterArchivageNoteService({ commit }, nouveau) {
  axios
    .post("/ajouter_archivage_note_services", {
      code: nouveau.code,
      libelle: nouveau.libelle,
      fichier: nouveau.fichier,
      noteservice_id: nouveau.noteservice_id
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ARCHIVAGE_NOTE_SERVICE", response.data);
      }
    });
}
// modifier archivage note se service
export function modifierArchivageNoteService({ commit }, nouveau) {
  axios
    .put("/modifier_archivage_note_services/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle,
      fichier: nouveau.fichier,
      noteservice_id: nouveau.noteservice_id
    })
    .then(response => {
      commit("MODIFIER_ARCHIVAGE_NOTE_SERVICE", response.data);
    });
}
//supprimer archivage note se service

export function supprimerArchivageNoteService({ commit }, id) {
  let conf = confirm("Voulez vous vraiment supprimer ?");

  if (conf) {
    axios.delete("/supprimer_archivage_note_services/" + id);
    commit("SUPPRIMER_ARCHIVAGE_NOTE_SERVICE", id);
  }
}
// afficher liste des archivage note se service
/*fin action archivage note se service */

// afficher le nombre de type de texte

export function getAllNombreTypeText({ commit }) {
  axios
    .get("/nbretypetext")
    .then(response => {
      commit("GET_ALL_NOMBRE_TYPE_TEXT", response.data);
    })
    .catch(error => console.log(error));
}
// afficher le nombre de type de texte

export function getAllNombreNoteServ({ commit }) {
  axios
    .get("/nbre_note_service")
    .then(response => {
      commit("GET_ALL_NOMBRE_NOTE_SERV", response.data);
    })
    .catch(error => console.log(error));
}

// recherche document par unite administrative

export function getAllRechercheDocua({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_archivage_service_ua")
      .then(response => {
        commit("GET_ALL_RECH_DOC_UA", response.data);
      })
      .catch(error => console.log(error));
  });
}
// afficher le nombre acte creation

export function getAllNombreActeCreation({ commit }) {
  queue.push(() => {
    axios
      .get("/nbre_acte_creation")
      .then(response => {
        commit("GET_ALL_NOMBRE_ACTE_CREATION", response.data);
      })
      .catch(error => console.log(error));
  });
}

// afficher le nombre acte creation
export function getAllNombreua({ commit }) {
  queue.push(() => {
    axios
      .get("/nbre_unite_administrative")
      .then(response => {
        commit("GET_ALL_NOMBRE_UA", response.data);
      })
      .catch(error => console.log(error));
  });
}
// afficher le nombre archivage
export function getAllNombreArchivage({ commit }) {
  queue.push(() => {
    axios
      .get("/nbre_archivage")
      .then(response => {
        commit("GET_ALL_NOMBRE_ARCHIVAGE", response.data);
      })
      .catch(error => console.log(error));
  });
}
