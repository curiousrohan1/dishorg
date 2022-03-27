<script>
export default {
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
      plusRecChar: '+',
      showAddGroc: false,
      grocName: '',
      plusGrocChar: '+',
      tar:"Grocery list"
    };
  },
  computed: {
    displayWarn() {
      return this.$store.state.error !== '';
    },
  },
  mounted() {
    this.reset()
  },
  methods: {
    updateErr(message) {
      this.$store.commit('setError', message);
      window.setTimeout(() => {
        this.$store.commit('setError', '');
      }, 3000)
    },
    isEmpty(data) {
      if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
        return true;
      } else if (!data) {
        return true;
      } else if (Object.prototype.hasOwnProperty.call(data,"name")) {
        return true;
      }
      return false;
    },
    cancelAddRec() {
      this.displayRecDiv = false;
      this.rec = {};
      this.plusRecChar = '+';
    },
    applyAddRec() {
      this.updateErr('');
      let otherGroc = JSON.parse(JSON.stringify(this.$store.state.currentGroc))
      otherGroc.recipes.push({ id: this.rec });
      // $.ajax({
      //   type: 'PUT',
      //   url: `/groceries/${otherGroc.id}`,
      //   data: JSON.stringify(otherGroc),
      //   contentType: 'application/json',
      //   dataType: 'json',
      // }).fail(this.failureOnAjaxOfRecipe)
      //   .done(
      //     (grocery) => {
      //       this.$store.commit('updateCurGroc', grocery);
      //     }
      //   );
      this.$store.commit('updateCurGroc', otherGroc);
      this.rec = {};
    },
    line(ing) {
      return (ing.unit === '[No Unit]' ? (`${ing.name} - ${ing.quantity}`) : (`${ing.name} - ${ing.quantity} ${ing.unit}`));
    },
    cancelGrocRename() {
      this.showRename = false;
      this.showGrocTitle = true;
    },
    editGrocName() {
      this.showRename = true;
      this.showGrocTitle = false;
      this.rename = this.$store.state.currentGroc.name;
    },
    plusRec() {
      if (this.plusRecChar === '+') {
        this.displayRecDiv = true;
        this.plusRecChar = '-';
      }
      else {
        this.cancelAddRec();
      }
      console.log(this.$store.state.currentGroc)
      console.log(this.$store.state.recipeList)
    },
    delGroc() {
      // $.ajax({
      //   type: 'DELETE',
      //   url: `/groceries/${this.$store.state.currentGroc.id}`,
      //   dataType: 'json',
      // })
      //   .fail(this.fail)
      //   .done(this.reset);
      this.$store.commit('setCurGroc', {});
      this.$store.commit('clearIngredients')
      this.reset();
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
        message = "An unknown error has occurred."
      }
      this.updateErr(message);
    },
    applyGrocRename() {
      if (this.rename === this.$store.state.currentGroc.name) {
        this.cancelGrocRename();
        return;
      }
      this.updateErr('');
      const otherGroc = JSON.parse(JSON.stringify(this.$store.state.currentGroc));
      otherGroc.name = this.rename;
      // $.post({
      //   url: 'groceries',
      //   data: JSON.stringify(otherGroc),
      //   contentType: 'application/json',
      //   dataType: 'json',
      // }).done(
      //   (data) => {
      //     this.$store.commit('updateCurGroc', data);
      //   },
      // ).fail(
      //   (jqXHR) => {
      //     this.$store.state.showGrocTitle = true;
      //     this.showRename = false;
      //     this.fail(jqXHR);
      //   },
      // );
      this.$store.commit('updateCurGroc', otherGroc);
      this.showRename = false;
      this.showGrocTitle = true;
    },
    reset() {
      // $.get('/groceries', 'json').done(
      //   (groceryList) => {
      //     this.$store.commit('updateGrocList', groceryList);
      //   }
      // ).fail(this.fail)
      // $.get('/recipes', 'json')
      //   .done(
      //     (recipeList) => {
      //       this.$store.commit('updateRecList', recipeList);
      //     },
      //   ).fail(this.fail);
      this.$store.commit('updateCurGroc', {});
      this.updateErr('');
      this.showGrocTitle = true;
      this.showRename = false;
      this.rename = '';
      this.displayRecDiv = false;
      this.quantity = '';
      this.rec = {};
      this.unitList = [];
      this.name = '';
      this.updateRecList = false;
      this.plusRecChar = '+';
      this.showAddGroc = false;
      this.grocName = '';
      this.plusGrocChar = '+'
    },
    success(grocery) {
      this.$store.commit('setCurGroc', grocery);
    },
    delRec(idx) {
      this.$store.commit('delRec', idx)
      // $.ajax({
      //   type: 'PUT',
      //   url: `/groceries/${this.$store.state.currentGroc.id}`,
      //   data: JSON.stringify(this.$store.state.currentGroc),
      //   contentType: 'application/json',
      //   dataType: 'json',
      // }).fail(this.fail)
      //   .done(this.success);
      this.success();
    },
    showRightButtons() {
      return !this.isEmpty(this.$store.state.currentGroc);
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
      this.$store.commit('activateGroc', idx);
      this.$store.commit('setCurGroc', this.$store.state.groceryList[idx]);
      this.showRename = false;
      this.displayRecDiv = false;
    },
    addGroc() {
      this.plusGrocChar = '+';
      const groc = {
        name: this.grocName,
        recipes: [
        ],
        active: false,
      };
      // $.post({
      //   url: 'groceries',
      //   data: JSON.stringify(groc),
      //   contentType: 'application/json',
      //   dataType: 'json',
      // }).done(
      //   (grocery) => {
      //     this.$store.commit('setCurGroc', grocery);
      //     this.$store.commit('addGroc', grocery);
      //     this.clickGroc(this.findGroc(grocery));
      //   },
      // ).fail(
      //   (jqXHR) => {
      //     this.fail(jqXHR);
      //   },
      // );
      this.$store.commit('setCurGroc', groc);
      this.$store.commit('addGroc', groc);
      this.clickGroc(this.findGroc(groc));
      this.showAddGroc = false;
      this.grocName = '';
    },
    cancelAddGroc() {
      this.showAddGroc = false;
      this.grocName = '';
      this.plusGrocChar = '+';
    },
    findGroc(grocery) {
      for (let i = 0; i < this.$store.state.groceryList.length; i += 1) {
        if (JSON.stringify(this.$store.state.groceryList[i]) === JSON.stringify(grocery)) {
          return i;
        }
      }
    },
    dupGroc() {
      const dupGroc = {
        name: "Copy of " + this.$store.state.currentGroc.name,
        recipes: this.$store.state.currentGroc.recipes,
        active: false,
      };
      // $.post({
      //   url: 'groceries',
      //   data: JSON.stringify(dupGroc),
      //   contentType: 'application/json',
      //   dataType: 'json',
      // }).done(
      //   (grocery) => {
      //     this.$store.commit('setCurGroc', grocery);
      //     this.$store.commit('addGroc', grocery);
      //     this.clickGroc(this.findGroc(grocery));
      //   },
      // ).fail(
      //   (jqXHR) => {
      //     this.fail(jqXHR);
      //   },
      // );
      this.$store.commit('setCurGroc', dupGroc);
      this.$store.commit('addGroc', dupGroc);
      this.clickGroc(this.findGroc(dupGroc));
      this.showAddGroc = false;
      this.grocName = ''
    }
  }
}
</script>
<template>
   <p class = "alert alert-danger" id = "error-message" role = "alert" v-show = "displayWarn">
    {{this.$store.state.error}}
  </p>
  <div class = "clearfix">
      <div id="left-pane">
          <div id="left-titles">
              <h2 class = "text text-success">Meal Plans:</h2>
              <button class = "btn btn-dark clearfix" data-placement = "right" data-toggle = "tooltip" id = "plus-groc"
                  title = "Add grocery" @click = "showAddGrocDiv">{{this.plusGrocChar}}</button>
          </div>
          <hr>
          <div>
              <ul class = "list-group" id = "grocery-list">
                  <button type = "button" @click = "clickGroc(idx)" class = "list-group-item list-group-item-action"
                      :class = "{active:groc.active}"
                      :key = "idx"
                      v-for = "(groc,idx) in this.$store.state.groceryList">{{groc.name}}</button>
              </ul>
              <div id = "add-groc-div" v-show = "showAddGroc">
                  <input ref = "newGrocName" placeholder = "New grocery list name..." type = "text" v-model = "this.grocName"
                      v-on:keyup.enter = "addGroc">
                  <div class = "btn-group" role = "group">
                      <button class = "btn" id = "add-groc" @click = "addGroc">
                          <img src = "src/assets/apply.png">
                      </button>
                      <button class = "btn" id = "cancel-groc-rec" @click = "cancelAddGroc">
                          <img src = "src/assets/cancel.jpg">
                      </button>
                  </div>
              </div>
          </div>
      </div>
      <div id="right-pane">
          <div>
              <strong id = "groc-title" v-show = "showGrocTitle"
                  class = 'text text-success'>{{this.$store.state.currentGroc.name}}</strong>&nbsp; &nbsp; &nbsp; 
              <div id = "renamed-grocery-name" v-show = "showRename">
                  <input id = "rename-groc-input" placeholder = "New Name..." type = "text" v-model = "rename"
                      v-on:keyup.enter = "applyGrocRename">
                  <button @click = "applyGrocRename" class = "btn" id = "apply-groc-rename">
                      <img src = "src/assets/apply.png">
                  </button>
                  <button @click = "cancelGrocRename" class = "btn" id = "cancel-groc-rename">
                      <img src = "src/assets/cancel.jpg">
                  </button>
              </div>
              <button @click = "editGrocName" class = "btn btn-outline-dark" id = "edit-groc-name" v-show = "showGrocTitle">
                  <img src = "src/assets/edit.png">
              </button>
              <Modal :target="this.tar" @cont-del="delGroc" v-show="showGrocTitle" :tarName="this.$store.state.currentGroc.name"></Modal>
              <button @click="dupGroc" class="btn btn-outline-dark" id="dup-groc" v-show="showGrocTitle">
                  <img src="src/assets/dup.png">
              </button>
              <button @click = "plusRec" class = "btn btn-dark clearfix" data-placement = "left" data-toggle = "tooltip"
                  id = "plus-rec" title = "Add Recipe" v-show = "this.showRightButtons">{{plusRecChar}}
              </button>
          </div>
          <hr>
          <div id = "grocery-details-container">
              <ul id = "grocery-details">
                  <li class = "ingItem" :key="idx" v-for = "(rec,idx) in this.$store.state.currentGroc.recipes">
                      <button class = "btn btn-outline-dark" @click = "delRec(idx)">
                          <img src = "src/assets/del.png" style = "width:30px; height:30px; ">
                      </button>
                      {{rec.name}}
                  </li>
              </ul>
              <div id = "make-rec" v-show = "displayRecDiv">
                  <label class = "sr-only" for = "rec-dropdown">Recipe</label>
                  <select class = "form-control mb-2 mr-sm-2 " id = "rec-dropdown" v-model = "rec">
                    <option :key="idx" v-for="(rec,idx) in this.$store.state.recipeList" >{{rec.name}}</option>
                  </select>
                  <div class = "btn-group" role = "group">
                      <button @click = "applyAddRec" class = "btn">
                          <img src = "src/assets/apply.png">
                      </button>
                      <button @click = "cancelAddRec" class = "btn">
                          <img src = "src/assets/cancel.jpg">
                      </button>
                  </div>
              </div>
          </div>
          <hr>
          <ul v-show="this.$store.state.consolidatedIngredients.length>0">
            <li :key="ing.quantity" v-for="ing in this.$store.state.consolidatedIngredients">{{this.line(ing)}}</li>
          </ul>
      </div>
  </div>
</template>

<style>
@import '@/assets/style.css';
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
