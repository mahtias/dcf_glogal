<template>
    <div>
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

