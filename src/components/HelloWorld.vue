<template>
  <div class="hello">
    <b-container>
      <b-row class="align-items-center justify-content-between">
        <b-card
          v-for="(adopter, index) in adopters"
          v-bind:key="index"
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          :disabled="adopter !== '0x0000000000000000000000000000000000000000'"
        >
          <b-card-text>
            {{adopter}}
          </b-card-text>

          <b-button @click="handleAdopt(index)" variant="primary">Adopt</b-button>
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
