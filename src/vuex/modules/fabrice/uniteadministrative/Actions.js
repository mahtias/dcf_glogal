import axios from "../../fabrice/uniteadministrative/urls/api";

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
 
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_TYPE_TEXTE', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimer_typetext/' + id).then(() => dialog.close() )   
  })
}

/*fin action type texte */

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
      section_id: nouveau.section_id,
      chapitre_id: nouveau.chapitre_id,
      code: nouveau.code,
      libelle: nouveau.libelle
    })
    .then(response => {
      commit("MODIFIER_UNITE_ADMINISTRATIVE", response.data);
    });
}
//supprimer Unite administrative
export function supprimerUniteAdministrative({ commit }, id) {
 
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_UNITE_ADMINISTRATIVE', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimer_unite_administrative/' + id).then(() => dialog.close() )   
  })
  
}
/*fin action Unite administrative */

////////////////////////////////*debut action archivage note se service*//////////////////////////////

// afficher liste des archivage note se service

export function getAllArchivageDocument({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_archivage_document")
      .then(response => {
        commit("GET_ALL_ARCHIVAGE_DOCUMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}
// ajouter archivage note se service
export function ajouterArchivageDocument({ commit }, nouveau) {
  axios
    .post("/ajouter_archivage_document", {
      reference: nouveau.reference,
      uniteadministrative_id: nouveau.uniteadministrative_id,
      typetexte_id: nouveau.typetexte_id,
      fichier_join: nouveau.fichier_join,
      date: nouveau.date
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ARCHIVAGE_DOCUMENT", response.data);
      }
    });
}
// modifier archivage note se service
export function modifierArchivageDocument({ commit }, nouveau) {
  axios
    .put("/modifier_archivage_document/" + nouveau.id, {
      reference: nouveau.reference,
      uniteadministrative_id: nouveau.uniteadministrative_id,
      typetexte_id: nouveau.typetexte_id,
      fichier_join: nouveau.fichier_join,
      date: nouveau.date
    })
    .then(response => {
      commit("MODIFIER_ARCHIVAGE_DOCUMENT", response.data);
    });
}
//supprimer archivage note se service

export function supprimerArchivageDocument({ commit }, id) {

  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_ARCHIVAGE_DOCUMENT', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimer_archivage_document/' + id).then(() => dialog.close() )   
  })
}
// afficher liste des archivage note se service
/*fin action archivage note se service */

