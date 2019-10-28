const structures_activites = state=> state.structures_activites.sort((a,b)=>(a.niveau>b.niveau)? 1:-1)
// const plans_activites = state => state.plans_activites

export{
structures_activites,
// plans_activites

}