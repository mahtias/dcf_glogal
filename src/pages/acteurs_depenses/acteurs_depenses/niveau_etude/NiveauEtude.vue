
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
                            <h5>Liste des nievau etude</h5>
                            <div align="right">
                                Search: <input type="text">

                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Code </th>
                                    <th>Libelle</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item, index) in niveau_etudes" :key="item.id">
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.code || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.libelle || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerNiveauEtude(item.id)"  class="btn btn-danger ">
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
                <h3>Ajouter fonctions</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
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
                    // {
                    //     name: 'alertMe',
                    //     icon: 'add_alert'
                    // }
                ],
                liste:[],
                formData : {
                    code: "",
                    libelle: ""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
          //  this.getNiveauEtude()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['niveau_etudes'])
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getNiveauEtude',"ajouterNiveauEtude","supprimerNiveauEtude","modifierNiveauEtude"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterNiveauEtude(this.formData)
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
                this.editTitre = this.niveau_etudes[index];

            }
            ,
            modifier(){
                this.modifierNiveauEtude(this.editTitre)
                //this.getNiveauEtude()
            }


        }
    };
</script>

