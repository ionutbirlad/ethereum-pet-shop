// const AppEth = {
//   web3Provider: null,
//   contracts: {},

//   init: function() {
//     // Load pets.
//     $.getJSON('../pets.json', function(data) {
//       var petsRow = $('#petsRow');
//       var petTemplate = $('#petTemplate');

//       for (i = 0; i < data.length; i ++) {
//         petTemplate.find('.panel-title').text(data[i].name);
//         petTemplate.find('img').attr('src', data[i].picture);
//         petTemplate.find('.pet-breed').text(data[i].breed);
//         petTemplate.find('.pet-age').text(data[i].age);
//         petTemplate.find('.pet-location').text(data[i].location);
//         petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

//         petsRow.append(petTemplate.html());
//       }
//     });

//     return AppEth.initWeb3();
//   },

//   initWeb3: function() {
//     // Is there an injected web3 instance ?
//     if (typeof web3 !== 'undefined') {
//       AppEth.web3Provider = web3.currentProvider;
//     }
//     else {
//       //// If no injected web3 instance is detected, fall back to Ganache
//       AppEth.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
//     }
//     web3 = new Web3(AppEth.web3Provider);
//     return AppEth.initContract();
//   },

//   initContract: function() {
//     $.getJSON('Adoption.json', function(data) {
//       // Get the necessary contract artifact file and instantiate it with truffle-contract
//       var AdoptionArtifact = data;
//       AppEth.contracts.Adoption = TruffleContract(AdoptionArtifact);
    
//       // Set the provider for our contract
//       AppEth.contracts.Adoption.setProvider(AppEth.web3Provider);
    
//       // Use our contract to retrieve and mark the adopted pets
//       return AppEth.markAdopted();
//     });

//     return AppEth.bindEvents();
//   },

//   bindEvents: function() {
//     $(document).on('click', '.btn-adopt', AppEth.handleAdopt);
//   },

//   markAdopted: function(adopters, account) {
//     var adoptionInstance;

//     AppEth.contracts.Adoption.deployed().then(function(instance) {
//       adoptionInstance = instance;

//       return adoptionInstance.getAdopters.call();
//     }).then(function(adopters) {
//       for (i = 0; i < adopters.length; i++) {
//         if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
//           $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
//         }
//       }
//     }).catch(function(err) {
//       console.log(err.message);
//     });
//   },

//   handleAdopt: function(event) {
//     event.preventDefault();
//     var petId = parseInt($(event.target).data('id'));
//     var adoptionInstance;

//     web3.eth.getAccounts(function(error, accounts) {
//       if (error) {
//         console.log(error);
//       }

//       var account = accounts[0];

//       AppEth.contracts.Adoption.deployed().then(function(instance) {
//         adoptionInstance = instance;

//         // Execute adopt as a transaction by sending account
//         return adoptionInstance.adopt(petId, {from: account});
//       }).then(function(result) {
//         return AppEth.markAdopted();
//       }).catch(function(err) {
//         console.log(err.message);
//       });
//     });
//   }
// };

// $(function() {
//   $(window).load(function() {
//     AppEth.init();
//   });
// });

// module.exports = AppEth;