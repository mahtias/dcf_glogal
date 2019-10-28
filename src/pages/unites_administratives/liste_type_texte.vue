
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <div align="right">
            <div class="controls">
              <div data-toggle="buttons-checkbox" class="btn-group">
                <button class="btn btn-primary" type="button">Imprimer</button>
                <button class="btn btn-success" type="button">Exporter Excel</button>
              </div>
            </div>
          </div>-->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des type text</h5>
              <div align="right">
                Search:
                <input type="search" placeholder="Code ou libelle" v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Libelle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in filtre_type_teste" :key="type.id">
                    <td>{{type.code || 'Non renseigné'}}</td>
                    <td>{{type.libelle || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_type_teste.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Type de texte</p>
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
      ],
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),

    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.typeTextes.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  }
};
</script>

