
<template>
  <div>
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste Documents</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Réference</th>
                    <th>Fichier</th>
                    <th>Date</th>
                    <th>Unite Administrative</th>
                    <th>Type Texte</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(archivagedocument) in filtre_archivage_document"
                    :key="archivagedocument.id"
                  >
                    <td>{{archivagedocument.reference || 'Non renseigné'}}</td>
                    <td>{{archivagedocument.fichier || 'Non renseigné'}}</td>
                    <td>{{archivagedocument.date || 'Non renseigné'}}</td>
                    <td>{{archivagedocument.unite_administrative.libelle || 'Non renseigné'}}</td>
                    <td>{{archivagedocument.type_texte.libelle|| 'Non renseigné'}}</td>

                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_archivage_document.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Document</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        // {
        //   name: "alertMe",
        //   icon: "add_alert"
        // }
      ],

      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "archivageDocuments",
      "typeTextes",
      "uniteAdministratives"
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