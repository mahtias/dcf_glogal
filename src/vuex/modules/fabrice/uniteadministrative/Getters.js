
const typeTextes = state => state.typeTextes;

const uniteAdministratives = state => state.uniteAdministratives;
const archivageDocuments = state => state.archivageDocuments;

export const nombreUniteAdministratives = state =>
  state.uniteAdministratives.length;
export const nombreArchivageDocument = state => state.archivageDocuments.length;
export const nombreTypeText = state => state.typeTextes.length;
// const listeDocUniteAdministratives = state =>
//   state.listeDocUniteAdministratives;
// const nbreUniteAdministratives = state => state.nbreUniteAdministratives;
// const nbreTypeTextes = state => state.nbreTypeTextes;

// export const SuiviImmo = (state, getters, rootState, rootGetters) =>
//   state.uniteAdministratives.map(element => {
//     if (
//       element.chapitre_id !== null &&
//       element.section_id !== null

//     ) {
//       element = {
//         ...element,
//         chpitr: rootGetters[
//           "parametreGenerauxAdministratif/chapitres"
//         ].find(chapitre1 => chapitre1.id == element.chapitre_id),
//         secti: rootGetters["parametreGenerauxAdministratif/sections"].find(
//           Secti => Secti.id == element.section_id
//         ),

//       };
//     }

//     return element;
//   });
export {
  typeTextes,
  uniteAdministratives,
  archivageDocuments

  // listeDocUniteAdministratives,
  // nbreUniteAdministratives,
  // nbreTypeTextes
};
