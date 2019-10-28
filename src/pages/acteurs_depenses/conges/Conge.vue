
<template>
    <div>



        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Suivie des conges</h5>
                            <div align="right">
                                Search: <input type="text">
                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped" v-if="conges">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Type conges</th>
                                    <th>Nom acteur</th>
                                    <th>Prenom acteur</th>
                                    <th>Unite admin</th>
                                    <th>Date debut</th>
                                    <th>Date fin</th>
                                    <th>Temps restant</th>
                                    <th>Annee</th>

                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item, index) in conges" :key="item.id">
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.code || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.type_conge || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.nom || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.prenom || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.ua || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.date_debut || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.date_fin || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.delais || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.annee || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerConge(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>
                                        </div>

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <fab :actions="fabActions"
             @cache="afficherModalAjouterTitre"
             bg-color="green"
        ></fab>

        <!----- ajouter modal   ---->
        <div id="exampleModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter </h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code conge :</label>
                        <div class="controls">
                            <input type="text" v-model="conge.code" placeholder="Entre le code congé">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Type de congés</label>
                        <div class="controls">
                            <select v-model="conges.type_conge">
                                <option></option>
                                <option value="congés payés">
                                    Congés payés
                                </option>
                                <option value="congé maternité">
                                    Congés maternité
                                </option>
                                <option value="Congés paternité">
                                    Congés paternité
                                </option>
                                <option value="congé sabbatique">
                                    Congés sabbatique
                                </option>
                                <option value="congé pour raisons familiales">
                                    Congé pour raisons familiales
                                </option>
                                <option value="congé parental d'éducation">
                                    Congé parental d'éducation
                                </option>
                                <option value="congé de reclassement">
                                    Congé de reclassement
                                </option>

                                <option value="congé d'adoption">
                                    Congé d'adoption
                                </option>
                                <option value="congé de longue maladie">
                                    Congé de longue maladie
                                </option>
                                <option value="congé pour engagement associatif">
                                    Congé pour engagement associatif
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Date debut</label>
                        <div class="controls">
                            <input type="date"  placeholder="Enter date" v-model="conge.date_debut">
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Date fin</label>
                        <div class="controls">
                            <input type="date"  placeholder="Enter date" v-model="conge.date_fin">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="ajouterTitreLocal" class="btn btn-primary"
                   href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>
        <!----- fin modal  ajouter  ---->



        <!----- modifier modal debut  ---->

        <div id="modifierModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier un fonctions</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.code" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modifier()" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>


        <!----- fin modifier modal  ---->

    </div>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                liste:[],
                formData : {
                    code: "",
                    libelle: ""
                },
                conge:{
                    code: "",
                    type_conge: "",
                    date_debut: "",
                    date_fin: "",
                    acte_personnel_id: "",
                },
                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            //this.getConges();
            //  this.getTypeContrat()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['conges'])
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getConges',"ajouterConges","supprimerConge","modifierConges"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterConges(this.formData)
                this.formData = {
                    code: "",
                    libelle: ""
                }
            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.conges[index];

            },
            modifier(){
                this.modifierConges(this.editTitre)
                this.getTypeContrat()
            }

        }
    };
</script>

