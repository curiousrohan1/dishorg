app.component('Makegrocery', {
  emits: ['update-err'],
  data() {
    return {
      showGrocTitle: true,
      showRename: false,
      rename: '',
      displayRecDiv: false,
      quantity: '',
      rec: {},
      unitList: [],
      name: '',
      updateRecList: false,
      editRecIdx: -1,
      plusRecChar: '+',
      showAddGroc: false,
      grocName: '',
      plusGrocChar: '+'
    };
  },
  computed: {
    displayWarn() {
      return this.$store.state.error !== '';
    },
    groceriesExist() {
      console.log(this.$store.state.currentGroc);
      return this.$store.state.groceryList.length !== 0 && !this.isEmpty(this.$store.state.currentGroc);
    }
  },
  mounted() {
    // $.get('/units').done(
    //   (units) => {
    //     this.unitList = units;
    //   }
    // ).fail(this.failureOnAjaxOfRecipe);
    $.get('/recipes', 'json')
      .done(
        (recipeList) => {
          this.$store.commit('updateRecList', recipeList);
          this.$store.commit('sortRecList');
        },
      ).fail(this.failureOnAjaxOfRecipe);
    // Have to add get query here TODO
    /* $.get('/groceries','json').done(
      (groceryList)=>{
        this.$store.commit('updateGrocList',groceryList);
        this.$store.commit('sortGrocList');
      }
    )
    */
  },
  methods: {
    updateErr(message) {
      this.$store.commit('setError', message);
      window.setTimeout(() => {
        this.$store.commit('setError', '');
      }, 3000)
    },
    isEmpty(data) {
      if (typeof (data) === 'object') {
        if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
          return true;
        } else if (!data) {
          return true;
        }
        return false;
      } else if (typeof (data) === 'string') {
        if (!data.trim()) {
          return true;
        }
        return false;
      } else if (typeof (data) === 'undefined') {
        return true;
      } else {
        return false;
      }
    },
    cancelAddRec() {
      this.displayRecDiv = false;
      this.rec = {};
      this.editRecIdx = -1;
      this.plusRecChar = '+';
    },
    editRec(idx) {
      const rec = JSON.parse(JSON.stringify(this.$store.state.currentGroc.recipes[idx]));
      this.rec = rec;
      this.displayRecDiv = true;
      this.editRecIdx = idx;
    },
    applyAddRec() {
      this.$emit('update-err', '');
      if (this.editRecIdx === -1) {
        let otherGroc = JSON.parse(JSON.stringify(this.$store.state.currentGroc))
        otherGroc.recipes.push(this.rec);
        // $.ajax({
        //   type: 'PUT',
        //   url: `/recipes/${otherRec.id}`,
        //   data: JSON.stringify(otherRec),
        //   contentType: 'application/json',
        //   dataType: 'json',
        // }).fail(this.failureOnAjaxOfRecipe)
        //   .done(
        //     (recipe) => {
        //       this.$store.commit('updateCurRec', recipe);
        //     }
        //   ); TODO
        /* $.ajax({
          type:'PUT',
          url:`/groceries/${otherGroc.id}`,
          data:JSON.stringify(otherGroc),
          contentType: 'application/json',
          dataType: 'json',
        }).fail(this.failureOnAjaxOfRecipe)
        .done(
          (grocery) => {
            this.$store.commit('updateCurGroc', grocery);
          }
        );
        */
        this.quantity = 0;
        this.name = '';
        this.rec = '[No Unit]';
      } else {
        var editIngObj = {
          idx: this.editRecIdx,
          ing: {
            quantity: this.quantity,
            name: this.name,
            unit: this.unit
          }
        }
        this.$store.commit('updateEditIng', editIngObj);
        this.displayRecDiv = false;
        this.rec = '[No Unit]';
        this.name = '';
        this.quantity = '';
        this.editRecIdx = -1;
        $.ajax({
          type: 'PUT',
          url: `/recipes/${this.$store.state.currentGroc.id}`,
          data: JSON.stringify(this.$store.state.currentGroc),
          contentType: 'application/json',
          dataType: 'json',
        }).fail(this.fail)
          .done(this.success);
      }
    },
    line(ing) {
      return (ing.unit === '[No Unit]' ? (`${ing.quantity} ${ing.name}`) : (`${ing.quantity} ${ing.unit} of ${ing.name}`));
    },
    cancelGrocRename() {
      this.showRename = false;
      this.showGrocTitle = true;
    },
    editgrocName() {
      this.showRename = true;
      this.showGrocTitle = false;
      this.rename = this.$store.state.currentGroc.name;
    },
    plusRec() {
      if (this.plusRecChar === '+') {
        if (this.$store.state.currentGroc !== {}) {
          this.displayRecDiv = true;
          this.$nextTick(() => {
            this.$refs.quantity.focus();
          });
        }
        this.plusRecChar = '-';
      }
      else {
        this.cancelAddRec();
      }
    },
    delGroc() {
      $.ajax({
        type: 'DELETE',
        url: `/recipes/${this.$store.state.currentGroc.id}`,
        dataType: 'json',
      })
        .fail(this.fail)
        .done(this.reset);
    },
    fail(jqXHR) {
      let message = '';
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else if (Object.prototype.hasOwnProperty.call(jqXHR, 'responseJSON')) {
        message = jqXHR.responseJSON.message;
      } else if (Object.prototype.hasOwnProperty.call(jqXHR, 'responseText')) {
        message = jqXHR['responseText'];
      } else {
        message = "An unknown error has occured."
      }
      this.$emit('update-err', message);
    },
    applyGrocRename() {
      if (this.rename === this.$store.state.currentGroc.name) {
        this.cancelGrocRename();
        return;
      }
      this.$emit('update-err', '');
      const otherRec = JSON.parse(JSON.stringify(this.$store.state.currentGroc));
      otherRec.name = this.rename;
      $.post({
        url: 'recipes',
        data: JSON.stringify(otherRec),
        contentType: 'application/json',
        dataType: 'json',
      }).done(
        (data) => {
          this.$store.commit('updateCurRec', data);
          this.$store.commit('sortRecList');
        },
      ).fail(
        (jqXHR) => {
          this.$store.state.showGrocTitle = true;
          this.showRename = false;
          this.fail(jqXHR);
        },
      );
      this.showRename = false;
      this.showGrocTitle = true;
    },
    reset() {
      this.$store.commit('updateCurRec', {});
      $.get('/recipes', 'json')
        .done(
          (recipeList) => {
            this.$store.commit('updateRecList', recipeList);
            this.$store.commit('sortRecList');
          },
        ).fail(this.fail);

      this.$emit('update-err', '');
    },
    showRec(idx) {
      if (idx === this.editRecIdx) {
        return false;
      }
      return true;
    },
    success(recipe) {
      this.$store.commit('setCurRec', recipe);
    },
    delRec(idx) {
      this.$store.commit('delIng', idx)
      $.ajax({
        type: 'PUT',
        url: `/recipes/${this.$store.state.currentGroc.id}`,
        data: JSON.stringify(this.$store.state.currentGroc),
        contentType: 'application/json',
        dataType: 'json',
      }).fail(this.fail)
        .done(this.success);
    },
    showRightButtons() {
      return this.$store.state.currentGroc !== {};
    },
    showAddGrocDiv() {
      if (this.plusGrocChar === '+') {
        this.showAddGroc = true;
        this.$nextTick(() => {
          this.$refs.newGrocName.focus();
        });
        this.plusGrocChar = '-';
      }
      else {
        this.cancelAddGroc();
      }
    },
    clickGroc(idx) {
      this.$store.commit('activateRec', idx);
      this.$store.commit('setCurRec', this.$store.state.recipeList[idx]);
    },
    addGroc() {
      this.plusGrocChar = '+';
      const rec = {
        name: this.grocName,
        ingredients: [
        ],
        id: this.$store.state.recipeList.length,
        active: false,
      };
      $.post({
        url: 'recipes',
        data: JSON.stringify(rec),
        contentType: 'application/json',
        dataType: 'json',
      }).done(
        (recipe) => {
          this.$store.commit('setCurRec', recipe);
          this.$store.commit('addGrocipe', recipe);
          this.clickGroc(this.findRec(recipe));
        },
      ).fail(
        (jqXHR) => {
          this.failureOnAjaxOfRecipe(jqXHR);
        },
      );
      this.showAddGroc = false;
      this.grocName = ''
    },
    failureOnAjaxOfRecipe(jqXHR) {
      let message = '';
      if (jqXHR.readyState === 0) {
        message = 'Failed to contact server.';
      } else if (Object.prototype.hasOwnProperty.call(jqXHR, 'responseJSON')) {
        message = jqXHR.responseJSON.message;
      } else if (Object.prototype.hasOwnProperty.call(jqXHR, 'responseText')) {
        message = jqXHR['responseText'];
      } else {
        message = "An unknown error has occured."
      }
      this.$emit('update-err', message);
    },
    cancelAddGroc() {
      this.showAddGroc = false;
      this.grocName = '';
      this.plusGrocChar = '+';
    },
    findRec(recipe) {
      for (let i = 0; i < this.$store.state.recipeList.length; i += 1) {
        if (JSON.stringify(this.$store.state.recipeList[i]) === JSON.stringify(recipe)) {
          return i;
        }
      }
    }
  },
  /*html */
  template: `
  <p class="alert alert-danger" id="error-message" role="alert" v-show="displayWarn">
    {{this.$store.state.error}}
</p>
<div class="clearfix">
    <div>
        <div>
            <h2 class="text text-success">Meal Plans:</h2>
            <button class="btn btn-dark clearfix" data-placement="right" data-toggle="tooltip" id="plus-groc"
                title="Add grocery" @click="showAddGrocDiv">{{this.plusGrocChar}}</button>
        </div>
        <hr>
        <div>
            <ul class="list-group" id="grocery-list">
                <button type="button" @click="clickGroc(idx)" class="list-group-item list-group-item-action"
                    :class="{active:groc.active}"
                    v-for="(rec,idx) in this.$store.state.groceryList">{{groc.name}}</button>
            </ul>
            <div id="add-groc-div" v-show="showAddGroc">
                <input ref="newGrocName" placeholder="New grocery list name..." type="text" v-model="this.grocName"
                    v-on:keyup.enter="addGroc">
                <div class="btn-group" role="group">
                    <button class="btn" id="add-groc" @click="addGroc">
                        <img src="images/apply.png">
                    </button>
                    <button class="btn" id="cancel-groc-rec" @click="cancelAddGroc">
                        <img src="images/cancel.jpg">
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div v-show="groceriesExist">
            <strong id="groc-title" v-show="showGrocTitle"
                class='text text-success'>{{this.$store.state.currentGroc.name}}</strong>&nbsp;&nbsp;&nbsp;
            <div id="renamed-grocery-name" v-show="showRename">
                <input id="rename-groc-input" placeholder="New Name..." type="text" v-model="rename"
                    v-on:keyup.enter="applyGrocRename">
                <button @click="applyGrocRename" class="btn" id="apply-groc-rename">
                    <img src="images/apply.png">
                </button>
                <button @click="cancelGrocRename" class="btn" id="cancel-groc-rename">
                    <img src="images/cancel.jpg">
                </button>
            </div>
            <button @click="editgrocName" class="btn btn-outline-dark" id="edit-groc-name" v-show="showGrocTitle">
                <img src="images/edit.png">
            </button>
            <button @click="delGroc" class="btn btn-outline-dark" id="del-groc" v-show="showGrocTitle">
                <img src="images/del.png">
            </button>
            <button @click="plusRec" class="btn btn-dark clearfix" data-placement="left" data-toggle="tooltip"
                id="plus-rec" title="Add ingredient" v-show="this.showRightButtons">{{plusRecChar}}
            </button>
        </div>
        <hr>
        <div id="grocery-details-container">
            <ul id="grocery-details">
                <li class="ingItem" v-for="(rec,idx) in this.$store.state.currentGroc.recipes" v-show="showRec(idx)">
                    <button @click="editRec(idx)" class="edit-recipes btn btn-outline-dark">
                        <img src="images/edit.png">
                    </button>
                    <button class="btn btn-outline-dark" @click="delRec(idx)">
                        <img src="images/del.png" style="width:30px;height:30px;">
                    </button>
                <li class="ingItem" v-for="(ing,idx) in rec.ingredients">{{this.line(ing)}}</li>
                </li>
            </ul>
            <form class=" form-inline" id="make-rec" v-show="displayRecDiv">
                <label class="sr-only" for="rec-dropdown">Recipe</label>
                <select class="form-control mb-2 mr-sm-2 " id="rec-dropdown" v-model="rec">
                    <option v-for="rec in this.$store.state.recipeList">{{rec}}</option>
                </select>
                <div class="btn-group" role="group">
                    <button @click="applyAddRec" class="btn">
                        <img src="images/apply.png">
                    </button>
                    <button @click="cancelAddRec" class="btn">
                        <img src="images/cancel.jpg">
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  `
})