<template>
  <div class="hello">
    <b-container>
      <b-row class="align-items-center justify-content-between">
        <b-card
          v-for="pet in pets"
          v-bind:key="pet.id"
          :title="pet.name"
          :img-src="pet.picture"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-list-group flush class="mb-3">
            <b-list-group-item>{{pet.age}}</b-list-group-item>
            <b-list-group-item>{{pet.breed}}</b-list-group-item>
            <b-list-group-item>{{pet.location}}</b-list-group-item>
          </b-list-group>

          <b-button
            @click="handleAdopt(pet.id)"
            :disabled="adopters[pet.id] !== '0x0000000000000000000000000000000000000000'"
            variant="primary"
          >
            {{adopters[pet.id] !== '0x0000000000000000000000000000000000000000' ? 'Adopted' : 'Adopt'}}
          </b-button>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  beforeMount() {
    this.$store.dispatch('pets/fetchAdopters', { vm: this })
  },
  mounted() {
    try {
      // Request account access
      this.$web3Provider.request({ method: "eth_requestAccounts" });
    } catch (error) {
      // User denied account access...
      console.error("User denied account access")
    }
    // const web3 = new Web3(this.$web3Provider);
  },
  methods: {
    handleAdopt(petId) {
      let pet = parseInt(petId);
      let adoptionInstance;
      this.$web3Provider.request({ method: 'eth_requestAccounts' })
      .then(a => {
        var account = a[0];
        this.$AdoptionContract.deployed().then(function(instance) {
          adoptionInstance = instance;
          // Execute adopt as a transaction by sending account
          return adoptionInstance.adopt(pet, {from: account});
        }).then(() => {
          return this.$store.dispatch('pets/fetchAdopters', { vm: this });
        }).catch(function(err) {
          console.log(err.message);
        });
      }).catch(e => console.error(e))
    }
  },
  computed: {
    adopters() {
      return this.$store.getters['pets/allAdopters']
    },
    pets() {
      return this.$store.getters['pets/allPets']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
