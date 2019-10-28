import TypeActePersonnel from "../../pages/acteurs_depenses/type_acte_personnel/TypeActPersonnel.vue"
import Fonction from "../../pages/acteurs_depenses/fonction/Fonction.vue"
import Classe from "../../pages/acteurs_depenses/classes/Classes.vue"
import NiveauEtude from "../../pages/acteurs_depenses/niveau_etude/NiveauEtude.vue"
import TypeContrat from "../../pages/acteurs_depenses/type_contrat/TypeContrat.vue"
import TypeSalarie from "../../pages/acteurs_depenses/type_salarie/TypeSalarie.vue"
import Echelons from "../../pages/acteurs_depenses/echelons/Echelons.vue"
import Grades from "../../pages/acteurs_depenses/grades/Grades.vue"
import Acteur from "../../pages/acteurs_depenses/acteurs/Acteurs.vue"
import ActeurDetail from "../../pages/acteurs_depenses/acteurs/DetailActeurDepense.vue"
import TableauBordActeurDepense from "../../pages/acteurs_depenses/TableauBord.vue"
import Conge from "../../pages/acteurs_depenses/conges/Conge.vue"
const ActeurDepenseRoutes = [
    {
        path:"/type-acte-personnel",
        name:"TypeActePersonnels",
        component:TypeActePersonnel
    },
    {
        path:"/fonction",
        name:"Fonction",
        component:Fonction
    },
    {
        path:"/classes",
        name:"Classe",
        component:Classe
    },
    {
        path:"/niveau-etude",
        name:"NiveauEtude",
        component:NiveauEtude
    },
    {
        path:"/type-contrat",
        name:"TypeContrat",
        component:TypeContrat
    },
    {
        path:"/type-salarie",
        name:"TypeSalarie",
        component:TypeSalarie
    },
    {
        path:"/grades",
        name:"Grades",
        component:Grades
    },
    {
        path:"/echelons",
        name:"Echelons",
        component:Echelons
    },
    {
        path:"/acteur-depenses",
        name:"Acteur",
        component:Acteur
    },
    {
        path: '/detail-acteur/:id',
        name: 'ActeurDetail',
        component: ActeurDetail,
    },
    {
        path: '/tableau-bord-acteur-depense',
        name: 'TableauBordActeurDepense',
        component: TableauBordActeurDepense,
    },
    {
        path: '/suivie-conges',
        name: 'Conge',
        component: Conge,
    },
]

export default ActeurDepenseRoutes;