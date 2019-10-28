<template>
    <div>
        <div class="container-fluid">
            <div class="">
                <div class="form-actions">
                    <button type="button" class="btn btn-info span4"><h4>{{delais_mise_disposition_act}} jours</h4> Délai disposition l’acte de nomination</button>
                    <button type="button" class="btn btn-info"><h4>{{temp_moyen_fin_activite_interruption}}</h4> Temps moyen fin des activités et l'interruption</button>
                    <button type="button" class="btn btn-info"><h4>{{jour_conge_disponible_acteur}}</h4>   Les jours de congés disponibles</button>
                </div>
            </div>
            <div class="widget-box">
                <div class="widget-title bg_lg"><span class="icon"><i class="icon-list"></i></span>
                    <h5 class="span5">{{detail_acteurs.nom}} {{detail_acteurs.prenom}}</h5>
                </div>
                <div class="widget-content">
                    <div class="row-fluid">
                        <div class="span12">
                           <div align="right">
                               <a href="#affeter" data-toggle="modal" class="btn btn-success" v-if="salaire_actuel_acteur.date_fin_contrat"><i class="icon-plus-sign"></i></a>
                               <a href="#interompe" data-toggle="modal" class="btn btn-warning" v-if="!salaire_actuel_acteur.date_interuption"><i class="icon-minus-sign"></i></a>
                               <a href="#fin_contrat" data-toggle="modal" class="btn btn-danger" v-if="!salaire_actuel_acteur.date_fin_contrat">
                                   <i class=" icon-remove"></i></a>
                           </div>

                            <div class="widget-box">
                                <div class="widget-title">
                                    <ul class="nav nav-tabs">
                                        <li class=""><a data-toggle="tab" href="#tab1">Information</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab2">L’acte de nomination et du spécimen</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab3">Toutes les rémunérations</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab4">Tous les conges</a></li>
                                    </ul>
                                </div>
                                <div class="widget-content tab-content">
                                    <div id="tab1" class="tab-pane active">
                                        <div class="span8">
                                        <div class="widget-content nopadding">
                                                <table class="table ">
                                                    <tbody>
                                                    <tr>
                                                        <td>Structure actuel</td>
                                                        <td>UA Micro</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Salaires actuel</td>
                                                        <td><a href="#" class="btn btn-success btn-mini" v-if="salaire_actuel_acteur.salaire">{{salaire_actuel_acteur.salaire[0].montant}} FCFA</a>
                                                            </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Matricule</td>
                                                        <td>{{detail_acteurs.matricule}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sexe</td>
                                                        <td>{{detail_acteurs.sexe}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Numero CNI</td>
                                                        <td>{{detail_acteurs.numero_cni}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Numero Passeport</td>
                                                        <td>{{detail_acteurs.numero_passeport}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom du père</td>
                                                        <td>{{detail_acteurs.nom_pere}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom mère</td>
                                                        <td>{{detail_acteurs.nom_mere}}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="tab2" class="tab-pane">

                                        <div class="span12 widget-box">
                                            <div class="span8"></div>
                                            <div class="span4" align="right" v-if="!salaire_actuel_acteur.date_arrivee_act_nomination"><a href="#myModal" data-toggle="modal" class="btn btn-success" >Ajouter act de nomination</a></div>

                                            <table class="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>Ref act</th>
                                                    <th>Ua</th>
                                                    <th>Date debut</th>
                                                    <th>Date fin</th>
                                                    <th>Date arrive</th>
                                                    <th>Delais disposition(Jours)</th>
                                                    <th>Act</th>
                                                    <th>Signature</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="item in load_act_personnel_acteur" :key="item.id">
                                                    <td>{{item.code}}</td>
                                                    <td>Unite admin micro</td>
                                                    <td>{{item.date_debut_contrat}}</td>
                                                    <td>{{item.date_fin_contrat}}</td>
                                                    <td>{{item.date_arrivee_act_nomination}}</td>
                                                    <td>{{item.delai_diposition}} </td>
                                                    <td>
                                                        <a v-if="item.fichier_act_nomination" :href="item.fichier_act_nomination" class="btn btn-default" target="_blank">
                                                            <span class=""><i class="icon-book"></i></span>
                                                        </a>
                                                        <code v-else>Nom disponible</code>
                                                    </td>
                                                    <td> <a v-if="item.speciment_signature" :href="item.speciment_signature" class="btn btn-default" target="_blank">
                                                        <span class=""><i class="icon-picture"></i></span>
                                                    </a>
                                                        <code v-else>Nom disponible</code></td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="">
                                            <div id="myModal" class="modal hide" aria-hidden="true" style="display: none;">
                                                <div class="modal-header">
                                                    <button data-dismiss="modal" class="close" type="button">×</button>
                                                    <h3>Ajouter act de nomination</h3>
                                                </div>
                                                <div class="modal-body">
                                                    <form action="#" method="post" class="form-horizontal" @submit.prevent="addActNomination" enctype="multipart/form-data">
                                                        <div class="control-group">
                                                            <label class="control-label">Date arrive acte :</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" v-model="date_arrivee_act_nomination" placeholder="">
                                                            </div>
                                                        </div>
                                                        <div class="control-group">
                                                            <label class="control-label">Acte nomination :</label>
                                                            <div class="controls">
                                                                <input  type="file" @change="OnchangeFichier"  class="span11" placeholder="Last name">
                                                                <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                                                            </div>
                                                        </div>
                                                        <div class="control-group">
                                                            <label class="control-label">Specimen signature</label>
                                                            <div class="controls">
                                                                <input type="file" @change="OnchangeImage"  class="span11 form-control" placeholder="Enter specimen">
                                                                <code v-if="info_img">Le fichier doit etre une image (.png,.jpg,jpeg,gif)</code>
                                                            </div>
                                                        </div>
                                                        <div class="form-actions">
                                                            <button type="submit" class="btn btn-success">Enregistre</button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="tab3" class="tab-pane">
                                        <div class="widget-content nopadding span8">
                                            <table class="table ">
                                                <thead>
                                                <tr>
                                                    <th>Periode</th>
                                                    <th>Unite administrative</th>
                                                    <th>Salaires</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="item in all_salaires_acteurs" :key="item.id">
                                                    <td>
                                                        {{item.date_debut_contrat}} /  {{item.date_fin_contrat}}
                                                    </td>
                                                    <td>Unite micro service</td>
                                                    <td>{{item.salaire[0].montant}} FCFA</td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div id="tab4" class="tab-pane">

                                        <div class="widget-box span6">
                                            <div class="widget-content nopadding">

                                                <table class="table table-bordered" >
                                                    <thead>
                                                    <tr>
                                                        <th>Type conges</th>
                                                        <th>Code</th>
                                                        <th>Ua</th>
                                                        <th>Date debut</th>
                                                        <th>Date fin</th>
                                                        <th>Annee</th>
                                                        <th>Delais disponible</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="item in conge_acteur_depense" :key="item.id" >
                                                        <td>{{item.type_conge || "Pas de conge" }}</td>
                                                        <td>{{item.code || "Pas de conges"}}</td>
                                                        <td>{{item.ua || "Pas de conges"}}</td>
                                                        <td>{{item.date_debut || "Pas de conges"}}</td>
                                                        <td>{{item.date_fin || "Pas de conges"}}</td>
                                                        <td>{{item.annee || "Pas de conges"}}</td>
                                                        <td>{{item.delais || "Pas de conges"}}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="span6">
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                                    <h5>Ajouter de conge</h5>
                                                </div>
                                                <div class="widget-content nopadding">
                                                    <form action="#" method="post" @submit.prevent="ajouterConge" enctype="multipart/form-data" class="form-horizontal">
                                                        <div class="control-group">
                                                            <label class="control-label">Code conge :</label>
                                                            <div class="controls">
                                                                <input type="text" v-model="conges.code" class="span11" placeholder="Entre le code congé">
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
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="conges.date_debut">
                                                            </div>
                                                        </div>

                                                        <div class="control-group">
                                                            <label class="control-label">Date fin</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="conges.date_fin">
                                                            </div>
                                                        </div>

                                                        <div class="form-actions">
                                                            <button type="submit" class="btn btn-success">Enregistre</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>


        <div id="affeter" class="modal  hide" style="width: 70%;  -webkit-transform: translate(-25%, -5%);">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Affectation dans un nouveau Unite administrative</h3>
            </div>
            <div class="modal-body" >
                <form class="form-horizontal" @submit.prevent="affecteActeurDepense" enctype="multipart/form-data">
                    <div class="widget-box">

                        <div class="row-fluid">
                            <div class="span6">
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
                                        <input type="date" v-model="formData.date_debut_contrat" class="span" placeholder="" />
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Reference acte:</label>
                                    <div class="controls">
                                        <input type="text" v-model="formData.code" class="span" placeholder="Saisir la reference" />
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
                            </div>
                            <div class="span6">


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
                            <div class="span6">
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
                                <div class="control-group">
                                    <label class="control-label">Salaire:</label>
                                    <div class="controls">
                                        <input type="text" v-model="formData.salaires" class="span" placeholder="Saisi le salaire" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-success">Affecter acteurs</button>
                    </div>
                </form>
            </div>

        </div>
        <div id="fin_contrat" class="modal hide">
            <form @submit.prevent="finContrat" enctype="multipart/form-data">
                <div class="modal-header">
                    <button data-dismiss="modal" class="close" type="button">×</button>
                    <h3>Fin de contrat</h3>
                </div>
                <div class="modal-body">
                    <input type="date" class="span5" placeholder="entre la date" v-model="fin_contra.date_fin_contrat">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-success">Fin contrat</button>
                </div>
            </form>

        </div>
        <div id="interompe" class="modal hide">
            <div class="modal-header">

                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Interruption dans le systeme</h3>
            </div>
            <div class="modal-body">
                <form @submit.prevent="interrumContrat" enctype="multipart/form-data">
                <div class="control-group">
                    <label class="control-label">Entre la date interruption  :</label>
                    <div class="controls">
                        <input type="date" class="span5" placeholder="entre la date" v-model="interruption_systeme.date_interuption">
                    </div>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-success">Fin contrat</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "../../../vuex/modules/guei/personnel_ua/url/api_personnel_ua/api"
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
                acteur_id:"",
                fin_contra:{
                    date_fin_contrat:"",
                    id:""
                },
                interruption_systeme:{
                    date_interuption:"",
                    id:""
                },
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",
                date_arrivee_act_nomination:"",
                info_img:false,
                info_pdf:false,
                liste:[],
                formData : {
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
                conges:{
                    code: "",
                    type_conge: "",
                    date_debut: "",
                    date_fin: "",
                    acte_personnel_id: "",
                },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                temp_moyen_testFI:""

            };
        },

        created() {
            this.acteur_id=this.$route.params.id;
            this.DetailActeur(this.$route.params.id);
            this.getSalaireActuelActeur(this.$route.params.id)
            this.getAllSallairesActeurs(this.$route.params.id)
            this.getLoadActeurDepense(this.$route.params.id)
            this.loadCongeActeur(this.$route.params.id)
            this.tempMoyenFinActiviteInterruption(this.$route.params.id)
            this.delaiMiseDispositionAct(this.$route.params.id)
            this.jourCongeDisponible(this.$route.params.id)
            this.tempMoyenTest(this.$route.params.id)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades",
                "niveau_etudes","nbr_acteur_actredite_taux","detail_acteurs","salaire_actuel_acteur","all_salaires_acteurs","acte_personnels",
                "load_act_personnel_acteur","conge_acteur_depense","temp_moyen_fin_activite_interruption","delais_mise_disposition_act","jour_conge_disponible_acteur"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ["DetailActeur","getSalaireActuelActeur","getAllSallairesActeurs","modifierActeurDepense",
                "getLoadActeurDepense","loadCongeActeur","ajouterConges","modifierActeurDepenses","ajouterActeDepense",
                "tempMoyenFinActiviteInterruption","delaiMiseDispositionAct","jourCongeDisponible"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            finContrat(){
                this.fin_contra.id=this.salaire_actuel_acteur.id;
                this.modifierActeurDepenses(this.fin_contra)
                this.fin_contra={
                    date_fin_contrat:"",
                        id:""
                }
                this.getAllSallairesActeurs(this.acteur_id)
                this.tempMoyenFinActiviteInterruption(this.acteur_id)

            }
            ,
            interrumContrat(){
                this.interruption_systeme.id=this.salaire_actuel_acteur.id;
                this.modifierActeurDepenses(this.interruption_systeme)
                this.interruption_systeme={
                    date_interuption:"",
                        id:""
                }
                this.getAllSallairesActeurs(this.acteur_id)
                this.tempMoyenTest(this.acteur_id)


            }
            ,
        affecteActeurDepense(){
                this.formData.acteur_depense_id=this.salaire_actuel_acteur.acteur_depense_id;
            this.ajouterActeDepense(this.formData)
            this.formData = {
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
            }
            this.getAllSallairesActeurs(this.acteur_id)
            this.tempMoyenFinActiviteInterruption(this.acteur_id)

    },
            // fonction pour vider l'input  salaire_actuel_acteur
            addActNomination () {
                const formData = new FormData();
                formData.append('specimen', this.selectedImage, this.selectedImage.name);
                formData.append('file', this.selectedFile, this.selectedFile.name);
                formData.append('date_arrivee_act_nomination', this.date_arrivee_act_nomination);
                formData.append('id', this.salaire_actuel_acteur.id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierActeurDepense(formData,config)

                this.delaiMiseDispositionAct(this.acteur_id)

            },
            ajouterConge () {

                this.conges.acte_personnel_id=this.salaire_actuel_acteur.id;
                console.log(this.conges.acte_personnel_id)
                this.ajouterConges(this.conges)
                this.conges={
                       code :"",
                        type_conge: "",
                        date_debut: "",
                        date_fin: "",
                }
            },

            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.titres[index];

            },
            OnchangeImage(e) {
                const files = e.target.files;
                this.selectedImage = event.target.files[0];
                Array.from(files).forEach(file => this.addImage(file));
            },
            addImage(file) {
                if (!file.type.match("image.*")) {
                    this.info_img=true;
                    console.log(`${file.name} le fichier doit etre une image`);
                    return;
                }
                this.info_img=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                if (!file.type.match("application/pdf")) {
                    this.info_pdf=true;
                    console.log(`${file.name} le fichier doit etre un PDF`);
                    return;
                }
                this.info_pdf=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            /**
             * Juste pour le test
             * @param id
             */
            tempMoyenTest(id) {
                axios.get('/temps_moyen_fin_activite_and_interuption/'+id).then(response => {
                  this.temp_moyen_testFI=response.data;
                  console.log("Juste test "+this.temp_moyen_testFI)
                }).catch(error => console.log(error))

            }
        }
    };
</script>

