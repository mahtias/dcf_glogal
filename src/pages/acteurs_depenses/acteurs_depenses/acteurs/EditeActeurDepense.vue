
<template>
    <div>

        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Modifiction d'acteur de depenses</h5>
                        </div>
                        <div class="widget-content nopadding">
                            <form action="#" method="get" class="form-horizontal" enctype="multipart/form-data">
                                <div class="row-fluid">
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Matricule:</label>
                                                    <div class="controls">
                                                        <input type="text"  v-model="formData.matricule" class="span7" placeholder="Saisir le matricule" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nom" class="span5" placeholder="Saisir le nom" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Prenom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.prenom" class="span8" placeholder="Saisir le prenom" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Sexe:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.sexe" class="span3">
                                                            <option></option>
                                                            <option value="H">Homme</option>
                                                            <option value="F">Femme</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numero CNI:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.numero_cni" class="span8" placeholder="Saisir le numero cni" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numero passeport:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.numero_passeport" class="span8" placeholder="Saisir le numero passeport" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date de naissance:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_naissance" class="span4" placeholder="Saisir la date de naissance" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nom du père:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nom_pere" class="span8" placeholder="Saisir le nom du pere" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nom de la mère:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nom_mere" class="span8" placeholder="Saisir le nom de la mere" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Reference acte:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.code" class="span8" placeholder="Saisir la reference" />
                                                    </div>
                                                </div>
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
                                                        <select v-model="formData.unite_administrative_id">
                                                            <option></option>
                                                            <option v-for="item in uniteAdministratives" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date debut contrat:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_debut_contrat" class="span4" placeholder="" />
                                                    </div>
                                                </div>

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
                                                    <label class="control-label">Salaire:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.salaires" class="span8" placeholder="Saisir le salaire" />
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
                                        </div>
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Exercice budgetaire:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.exercice_budgetaire_id">
                                                            <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.id">
                                                                {{item.annee}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Ligne budgetaires:</label>
                                                    <div class="controls">

                                                        <select v-model="formData.plan_budgetaire_id">
                                                            <option v-for="item in plans_budgetaires" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
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

                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <a @click.prevent="ajouterTitreLocal" class="btn btn-primary"
                                               href="#">Valider</a>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
                    fonction_id:"",
                    plan_budgetaire_id:''
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
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),

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
                console.log(this.formData)
                this.ajouterActeur(this.formData)
                this.getActeur()
                this.formData = {
                    code: "",
                    libelle: ""
                }
                this.$router.push({ name: 'Acteur' })
            },
// afficher
            suprimer(id){
                this.supprimerActeurs(id)
                this.allActeurDepense()
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

