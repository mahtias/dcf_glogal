
<template>
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_lg span3">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreUniteAdministratives}}</span> Nombre Unite d'administrative
          </a>
        </li>
        <li class="bg_lb span3">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreArchivageDocument}}</span>Nombre Archivage document
          </a>
        </li>
        <li class="bg_ls span3">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTypeText}}</span>Nombre de type texte
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "nombreTypeText",
      "nombreUniteAdministratives",
      "nombreArchivageDocument"

      // "nbreArchivageNotes"
    ]),
    filtre_archivage_document() {
      const st = this.search.toLowerCase();
      return this.archivageDocuments.filter(archivagedocument => {
        return (
          archivagedocument.reference.toLowerCase().includes(st) ||
          archivagedocument.unite_administrative.libelle
            .toLowerCase()
            .includes(st) ||
          archivagedocument.type_texte.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {}
};
</script>



<style>
.nbre {
  background-color: #27a9e3;
}
.center1 {
  margin: 5px 270px 5px;
}
</style>
