<template>
    <div>
        <div class="container-fluid">
            <div class="">
                <div class="form-actions">
                    <button type="button" class="btn btn-info"><h4>{{totalActeurDepense}}</h4> Total acteur depense </button>
                    <button type="button" class="btn btn-info"><h4>{{totalActeurEnctivite}}</h4> Total acteur en activité</button>
                    <button type="button" class="btn btn-info"><h4>{{totalActeurAccredite}}</h4> Total acteur accredité </button>
                    <button type="button" class="btn btn-info"><h4>{{totalActeurNonAccredite}}</h4> Total acteur non accredité</button>
                    <button type="button" class="btn btn-info" v-if="tauxActeurAccredite!='NaN'"><h4>{{tauxActeurAccredite || '0' }} %</h4> Taux acteurs acredité</button>
                    <button type="button" class="btn btn-info" v-else><h4>0 %</h4> Taux acteurs acredité</button>
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


            };
        },

        created() {

        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions",
                "grades","niveau_etudes","nbr_acteur_actredite_taux","all_acteur_depense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"])
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),

        }
    };
</script>

