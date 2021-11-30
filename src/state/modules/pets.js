
export const state = {
  aaa: 'bbb'
};

export const getters = {
  allPets(state) {
    return state.aaa
  },
};

export const actions = {
  // fetchCategories ({ commit }) {
  //   const query =`query{
  //                   bigMacroCategories {
  //                       edges {
  //                       node{
  //                         id
  //                         name
  //                         shortName
  //                         macrocategorySet{
  //                           edges{
  //                             node{
  //                               id
  //                               name
  //                               shortName
  //                               categorySet{
  //                                 edges{
  //                                   node{
  //                                     id
  //                                     name
  //                                     shortName
  //                                     description
  //                                   }
  //                                 }
  //                               }
  //                             }
  //                           }
  //                         }
  //                       }
  //                     }
  //                   }
  //                 }`
  //   return new Promise((resolve, reject) => {
  //     apiCallResult('POST', query, null, false, 3, 300, false)
  //     .then(result => resolve(commit('SET_CATEGORIES', result.bigMacroCategories.edges)))
  //     .catch(err => reject(err))
  //   })
  // }
};

export const mutations = {
  // SET_CATEGORIES: (state, categories) => (state.categories = categories)
};