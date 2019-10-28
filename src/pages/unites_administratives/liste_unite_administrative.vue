
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
              <h5>Liste des unité d'administrative</h5>

              <div align="right">
                Search:
                <input type="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Libelle</th>
                    <th>Section</th>
                    <th>Chapitre</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(uniteadministrative) in uniteAdministratives"
                    :key="uniteadministrative.id"
                  >
                    <td>{{uniteadministrative.code || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.section.libelle || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.chapitre.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerUniteAdministrative(uniteadministrative.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="uniteAdministratives.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Unite D'administrative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // fabActions: [
      //   {
      //     name: "cache",
      //     icon: "add"
      //   }
      // ]
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["uniteAdministratives"])
  }
};
</script>