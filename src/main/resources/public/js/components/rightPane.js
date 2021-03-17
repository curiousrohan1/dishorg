app.component('Rightpane', {
    emits: ['update-err'],
    data () {
        return {
            showRecTitle: true,
            showRename: false,
            rename: '',
            displayIngDiv: false,
            quantity: 0,
            unit: '',
            unitList: [],
            name: '',
            showContainer: true,
            updateRecList: false
        };
    },
    mounted () {
        $.get('/units').done(
            (units) => {
                this.unitList = units;
            }
        ).fail(this.failureOnAjaxOfRecipe);
    },
    methods: {
        cancelAddIng () {
            // document.getElementById('fail').play();
            this.displayIngDiv = false;
            this.unit = 'Unit';
            this.name = '';
            this.quantity = '';
        },
        editIng (idx) {
            const ing = this.$store.state.currentRec.ingredients[idx];
            console.log(ing)
            // Populate the ingredient's input fields with the current values from mountedApp.curRec and then show
            // the input fields; also hide the "line".
            //      $(`#quantity${idx}`).val(ing.quantity);
            //      $(`#unit-dropdown${idx}`).val(ing.unit);
            //      $(`#name${idx}`).val(ing.name);
            //      $('button.edit-recipes').prop('disabled', true);
            //      $(`#ing-edit${idx}`).show();
            //      $(`#ing-line-container${idx}`).hide();
        },
        applyAddIng () {
            this.$emit('update-err', '');
            let otherRec = JSON.parse(JSON.stringify(this.$store.state.currentRec))
            otherRec.ingredients.push({ quantity: this.quantity, name: this.name, unit: this.unit });
            $.ajax({
                type: 'PUT',
                url: `/recipes/${otherRec.id}`,
                data: JSON.stringify(otherRec),
                contentType: 'application/json',
                dataType: 'json',
            }).fail(this.failureOnAjaxOfRecipe)
                .done(
                    (recipe) => {
                        this.$store.commit('updateCurRec', recipe);
                    }
                );
            this.quantity = 0;
            this.name = '';
            this.unit = ''
            //      axios.put(`/recipes/${mountedApp.curRec.id}`, mountedApp.curRec)
            //        .then(this.successOnAjaxOfRecipe)
            //        .catch((error) => {
            //          console.log(error);
            //        });
        },
        line (ing) {
            return (ing.unit === 'Unit' || ing.unit === '[No Unit]' ? (`${ing.quantity} ${ing.name}`) : (`${ing.quantity} ${ing.unit} of ${ing.name}`));
        },
        applyAddIngI () {
            console.log('applying add-ing...');
        },
        cancelRecRename () {
            this.showRename = false;
            this.showRecTitle = true;
        },
        editRecName () {
            this.showRename = true;
            this.showRecTitle = false;
            this.rename = this.$store.state.currentRec.name;
        },
        plusIng () {
            this.displayIngDiv = true;
        },
        delRec () {
            $.ajax({
                type: 'DELETE',
                url: `/recipes/${this.$store.state.currentRec.id}`,
                dataType: 'json',
            })
                .fail(this.fail)
                .done(this.reset);
        },
        fail (jqXHR) {
            //      document.getElementById('fail').play();
            let message = '';
            console.log(jqXHR);
            if (jqXHR.readyState === 0) {
                message = 'Failed to contact server.';
            } else if (jqXHR.hasOwnProperty('responseJSON')) {
                message = jqXHR.responseJSON.message;
            } else if (jqXHR.hasOwnProperty('responseText')) {
                message = jqXHR['responseText'];
            } else {
                message = "An unknown error has occured."
            }
            this.$emit('update-err', message);
        },
        applyRecRename () {
            if (this.rename === this.$store.state.currentRec.name) {
                this.cancelRecRename();
                return;
            }
            this.$emit('update-err', '');
            const otherRec = JSON.parse(JSON.stringify(this.$store.state.currentRec));
            otherRec.name = this.rename;
            $.post({
                url: 'recipes',
                data: JSON.stringify(otherRec),
                contentType: 'application/json',
                dataType: 'json',
            }).done(
                (data) => {
                    this.$store.commit('updateCurRec', data);
                },
            )
                .fail(
                    (jqXHR) => {
                        this.$store.state.showRecTitle = true;
                        this.showRename = false;
                        this.fail(jqXHR);
                    },
                );
            this.showRename = false;
            this.showRecTitle = true;
        },
        reset () {
            this.showContainer = false;
            // On page load, gets the recipe list, and appends as buttons to a ul in left pane.
            $.get('/recipes', 'json')
                .done(
                    (recipeList) => {
                        console.log('Got here, and ' + recipeList + ' is the recipe list.')
                        this.$store.commit('updateRecList', recipeList);
                    },
                ).fail(this.fail);

            this.$emit('update-err', '');
        }
    },
    /* html */
    template: `
      <div>
          <div>
              <strong id="rec-title" v-show="showRecTitle">{{this.$store.state.currentRec.name}}</strong>&nbsp;&nbsp;&nbsp;
              <div id="renamed-recipe-name" v-show="showRename">
                  <input id="rename-rec-input" placeholder="New Name..." type="text" v-model="rename">
                  <button @click="applyRecRename" class="btn" id="apply-rec-rename"><img src="images/apply.png"></button>
                  <button @click="cancelRecRename" class="btn" id="cancel-rec-rename"><img src="images/cancel.jpg"></button>
              </div>
              <button @click="editRecName" class="btn disabled" id="edit-rec-name" v-show="!showRename"><img
                      src="images/edit.jpg"></button>
              <button @click="delRec" class="btn disabled" id="del-rec" v-show="!showRename"><img src="images/del.png">
              </button>
              <button @click="plusIng" class="btn text-primary" data-placement="left" data-toggle="tooltip"
                      id="plus-ing" title="Add ingredient">+
              </button>
          </div>
          <hr>
          <div id="recipe-details-container" v-show="showContainer">
              <ul id="recipe-details">
                  <li class="ingItem" v-for="(ing,idx) in this.$store.state.currentRec.ingredients">
                      <button @click="editIng(idx)" class="edit-recipes btn">
                          <img src="images/edit.jpg">
                      </button>
                      <button class="btn openModal" data-target="#cont-del-modal" data-toggle="modal" type="button">
                          <img src="images/del.png" style="width:30px;height:30px;">
                      </button>
                      {{this.line(ing)}}
                  </li>
              </ul>
              <form class="form-inline" id="make-ing" v-show="displayIngDiv">
                  <label class="sr-only" for="quantity">Quantity</label>
                  <input class="form-control mb-2 mr-sm-2 inputIngInfo" id="quantity" placeholder="Quantity" type="text"
                         v-model="quantity"/>
                  <label class="sr-only" for="unit-dropdown">Unit</label>
                  <select class="form-control mb-2 mr-sm-2 " id="unit-dropdown" v-model="unit">
                      <option selected>Unit</option>
                      <option v-for="unit in unitList">{{unit}}</option>
                  </select>
                  <label class="sr-only" for="name">Name</label>
                  <input class="form-control mb-2 mr-sm-2 inputIngInfo" id="name" placeholder="The Food's Name"
                         type="text" v-model="name"/>
                  <div class="btn-group" role="group">
                      <button @click="applyAddIng" class="btn"><img src="images/apply.png"></button>
                      <button @click="cancelAddIng" class="btn"><img src="images/cancel.jpg"></button>
                  </div>
              </form>
          </div>
      </div>
    `
})