<template>
    <div>

        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">
            <div class="quick-actions_homepage">
                <ul class="quick-actions">
                    <li class="bg_lb"> <router-link :to="{name: 'Acteur'}" tag="a"><h3>
                        {{totalActeurDepense}} <br/>
                    </h3>
                        <span class="label label-important"></span> Total acteur depense </router-link> </li>
                    <li class="bg_lb "> <router-link :to="{name: 'Acteur'}" tag="a">
                        <h3>
                            {{totalActeurEnctivite}}
                        </h3>
                        Total acteur en activité</router-link>
                    </li>
                    <li class="bg_lb "> <router-link :to="{name: 'Acteur'}" tag="a">
                        <h3>
                            {{totalActeurAccredite}}
                        </h3>
                        Total acteur accredité</router-link>
                    </li>
                    <li class="bg_lb">
                        <router-link :to="{name: 'Acteur'}" tag="a">  <h3>{{totalActeurNonAccredite}}</h3>
                            Total acteur non accredité
                        </router-link> </li>
                    <li class="bg_lb">
                        <router-link :to="{name: 'Acteur'}" tag="a">  <h3>{{tauxActeurAccredite}} %</h3>
                            Taux acteurs acredité </router-link></li>


                </ul>
            </div>
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab10">Tous les acteurs depense</a></li>
                                <li class=""><a data-toggle="tab" href="#tab20">Liste des acteurs depense en activité</a></li>
                               <!-- <li class=""><a data-toggle="tab" href="#tab30">Acteurs non actif</a></li>-->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab10" class="tab-pane active">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste de tous les acteurs depenses</h5>
                                        <div align="right">
                                            Search: <input type="text">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de naissance</th>
                                                <th>Unite administrative</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="(item, index) in all_acteur_depense" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.date_naissance || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.libelle || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.acteur_depense.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="tab20" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste des acteurs</h5>
                                        <div align="right">
                                            Search: <input type="text">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de naissance</th>
                                                <th>Unite administrative</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="(item, index) in acteur_depenses" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.acteur_depense.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.acteur_depense.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.acteur_depense.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.acteur_depense.date_naissance || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.acteur_depense.libelle || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.acteur_depense.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.acteur_depense.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="tab30" class="tab-pane">
                                <p>And is full of waffle to It has multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.multiple paragraphs and is full of waffle to pad out the comment. </p>
                                <img src="img/demo/demo-image3.jpg" alt="demo-image"></div>
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

        <div id="exampleModal" class="modal bd-example-modal-lg hide" style="width: 70%;  -webkit-transform: translate(-25%, -5%);">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter acteur</h3>
            </div>
            <div class="modal-body" >
                <form class="form-horizontal">

                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Information personnel acteur</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Information act de personnel</a></li>

                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="span6">
                                    <div class="control-group">
                                        <label class="control-label">Matricule:</label>
                                        <div class="controls">
                                            <input type="text"  v-model="formData.matricule" class="span" placeholder="Saisir le matricule" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Nom:</label>
                                        <div class="controls">
                                            <input type="text" v-model="formData.nom" class="span" placeholder="Saisir le nom" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Prenom:</label>
                                        <div class="controls">
                                            <input type="text" v-model="formData.prenom" class="span" placeholder="Saisir le prenom" />
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">Sexe:</label>
                                        <div class="controls">
                                            <select v-model="formData.sexe" class="span">
                                                <option></option>
                                                <option value="H">Homme</option>
                                                <option value="F">Femme</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Numero CNI:</label>
                                        <div class="controls">
                                            <input type="text" v-model="formData.numero_cni" class="span" placeholder="Saisir le numero cni" />
                                        </div>
                                    </div>

                                </div>
                                <div class="span6">
                                    <div class="control-group">
                                        <label class="control-label">Numero passeport:</label>
                                        <div class="controls">
                                            <input type="text" v-model="formData.numero_passeport" class="span" placeholder="Saisir le numero passeport" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Date de naissance:</label>
                                        <div class="controls">
                                            <input type="date" v-model="formData.date_naissance" class="span" placeholder="Saisir la date de naissance" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Nom du père:</label>
                                        <div class="controls">
                                            <input type="text" v-model="formData.nom_pere" class="span" placeholder="Saisir le nom du pere" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Nom de la mère:</label>
                                        <div class="controls">
                                            <input type="text" v-model="formData.nom_mere" class="span" placeholder="Saisir le nom de la mere" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="tab2" class="tab-pane">

                                        <div class="row-fluid">
                                            <div class="span4">
                                                <div class="control-group">
                                                    <label class="control-label">Type acte de personnel</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_acte_id">
                                                            <option></option>
                                                            <option v-for="item in type_acte_personnels" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">L'unite administrative:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.unite_administrative_id" class="span" placeholder="Saisir l'unite administrative" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date debut contrat:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_debut_contrat" class="span" placeholder="" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Reference acte:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.code" class="span" placeholder="Saisir la reference" />
                                                    </div>
                                                </div>




                                            </div>
                                            <div class="span4">
                                                <div class="control-group">
                                                    <label class="control-label">Type salarie</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_salarie_id">
                                                            <option></option>
                                                            <option v-for="item in type_salaries" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">Type contrat</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_contrat_id">
                                                            <option></option>
                                                            <option v-for="item in type_contrats" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">Type niveau etude</label>
                                                    <div class="controls">
                                                        <select v-model="formData.niveau_etude_id">
                                                            <option></option>
                                                            <option v-for="item in niveau_etudes" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="span4">
                                                <div class="control-group">
                                                    <label class="control-label">Exercice budgetaire:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.exercice_budgetaire_id" class="span" placeholder="Saisir l'exercice budgetaire" />
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">Ligne budgetaires:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.plan_budgetaire_id" class="span" placeholder="Saisir le plan budgetaire" />
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">Fonctions</label>
                                                    <div class="controls">
                                                        <select v-model="formData.fonction_id">
                                                            <option></option>
                                                            <option v-for="item in fonctions" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Grades</label>
                                                    <div class="controls">
                                                        <select v-model="formData.grade_id">
                                                            <option></option>
                                                            <option v-for="item in grades" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Salaire:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.salaires" class="span" placeholder="Saisir le nom de la mere" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                            </div>
                            <div id="tab3" class="tab-pane">
                                <p>full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end. </p>
                            </div>
                        </div>
                    </div>



                    <div class="row-fluid">


                        <div class="col-md-4">


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
                <a @click.prevent="modifierTitre(editTitre)" class="btn btn-primary"
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
                    matricule: "",
                    nom: "",
                    prenom: "",
                    sexe: "",
                    numero_cni: "",
                    numero_passeport: "",
                    date_naissance: "",
                    nom_pere: "",
                    nom_mere: "",
                    date_debut_contrat:"",
                    code:"",
                    type_salarie_id:"",
                    type_contrat_id:"",
                    niveau_etude_id:"",
                    acteur_depense_id:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    salaires:"",
                    type_acte_id:"",
                    grade_id:"",
                    fonction_id:""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.allActeurDepense();
        //    this.getActeur()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"])
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterActeur(this.formData)
                this.formData = {
                    code: "",
                    libelle: ""
                }
                this.getActeur()
                this.getNbrActeurAcrediteTaux();
            },
// afficher
            suprimer(id){
                this.supprimerActeurs(id)
                this.getActeur()
                this.getNbrActeurAcrediteTaux();
            },
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.titres[index];

            },


        }
    };
</script>

