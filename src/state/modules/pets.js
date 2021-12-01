// import axios from 'axios'

export const state = {
  pets: [
    {
      "id": 0,
      "name": "Frieda",
      "picture": require("@/assets/dogs/scottish-terrier.jpeg"),
      "age": 3,
      "breed": "Scottish Terrier",
      "location": "Lisco, Alabama"
    },
    {
      "id": 1,
      "name": "Gina",
      "picture": require("@/assets/dogs/scottish-terrier.jpeg"),
      "age": 3,
      "breed": "Scottish Terrier",
      "location": "Tooleville, West Virginia"
    },
    {
      "id": 2,
      "name": "Collins",
      "picture": require("@/assets/dogs/french-bulldog.jpeg"),
      "age": 2,
      "breed": "French Bulldog",
      "location": "Freeburn, Idaho"
    },
    {
      "id": 3,
      "name": "Melissa",
      "picture": require("@/assets/dogs/boxer.jpeg"),
      "age": 2,
      "breed": "Boxer",
      "location": "Camas, Pennsylvania"
    },
    {
      "id": 4,
      "name": "Jeanine",
      "picture": require("@/assets/dogs/french-bulldog.jpeg"),
      "age": 2,
      "breed": "French Bulldog",
      "location": "Gerber, South Dakota"
    },
    {
      "id": 5,
      "name": "Elvia",
      "picture": require("@/assets/dogs/french-bulldog.jpeg"),
      "age": 3,
      "breed": "French Bulldog",
      "location": "Innsbrook, Illinois"
    },
    {
      "id": 6,
      "name": "Latisha",
      "picture": require("@/assets/dogs/golden-retriever.jpeg"),
      "age": 3,
      "breed": "Golden Retriever",
      "location": "Soudan, Louisiana"
    },
    {
      "id": 7,
      "name": "Coleman",
      "picture": require("@/assets/dogs/golden-retriever.jpeg"),
      "age": 3,
      "breed": "Golden Retriever",
      "location": "Jacksonwald, Palau"
    },
    {
      "id": 8,
      "name": "Nichole",
      "picture": require("@/assets/dogs/french-bulldog.jpeg"),
      "age": 2,
      "breed": "French Bulldog",
      "location": "Honolulu, Hawaii"
    },
    {
      "id": 9,
      "name": "Fran",
      "picture": require("@/assets/dogs/boxer.jpeg"),
      "age": 3,
      "breed": "Boxer",
      "location": "Matheny, Utah"
    },
    {
      "id": 10,
      "name": "Leonor",
      "picture": require("@/assets/dogs/boxer.jpeg"),
      "age": 2,
      "breed": "Boxer",
      "location": "Tyhee, Indiana"
    },
    {
      "id": 11,
      "name": "Dean",
      "picture": require("@/assets/dogs/scottish-terrier.jpeg"),
      "age": 3,
      "breed": "Scottish Terrier",
      "location": "Windsor, Montana"
    },
    {
      "id": 12,
      "name": "Stevenson",
      "picture": require("@/assets/dogs/french-bulldog.jpeg"),
      "age": 3,
      "breed": "French Bulldog",
      "location": "Kingstowne, Nevada"
    },
    {
      "id": 13,
      "name": "Kristina",
      "picture": require("@/assets/dogs/golden-retriever.jpeg"),
      "age": 4,
      "breed": "Golden Retriever",
      "location": "Sultana, Massachusetts"
    },
    {
      "id": 14,
      "name": "Ethel",
      "picture": require("@/assets/dogs/golden-retriever.jpeg"),
      "age": 2,
      "breed": "Golden Retriever",
      "location": "Broadlands, Oregon"
    },
    {
      "id": 15,
      "name": "Terry",
      "picture": require("@/assets/dogs/golden-retriever.jpeg"),
      "age": 2,
      "breed": "Golden Retriever",
      "location": "Dawn, Wisconsin"
    }
  ],
  adopters: null
};

export const getters = {
  allPets(state) {
    return state.pets
  },
  allAdopters(state) {
    return state.adopters
  },
};

export const actions = {
  fetchAdopters({commit}, {vm}) {
    var adoptionInstance;

    vm.$AdoptionContract.deployed().then(function(instance) {
      adoptionInstance = instance;

      return adoptionInstance.getAdopters.call();
    }).then(function(adopters) {
      commit('SET_ADOPTERS', adopters)
    }).catch(function(err) {
      console.log(err.message);
    });
  }
};

export const mutations = {
  SET_ADOPTERS: (state, adopters) => (state.adopters = adopters)
};