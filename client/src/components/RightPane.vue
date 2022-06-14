<script lang="ts" setup>
import ModalBox from "./ModalBox.vue";
import { defineComponent } from "vue";
</script>

<script lang="ts">
export default defineComponent({
  emits: ["update-err"],
  data() {
    return {
      showRecTitle: true,
      showRename: false,
      rename: "",
      displayIngDiv: false,
      quantity: "",
      unit: "[No Unit]",
      unitList: [],
      name: "",
      updateRecList: false,
      editIngIdx: -1,
      plusIngChar: "+",
      tar: "Recipe",
    };
  },
  mounted() {
    this.reset();
  },
  methods: {
    isEmpty(data) {
      if (typeof data === "object") {
        if (JSON.stringify(data) === "{}" || JSON.stringify(data) === "[]") {
          return true;
        } else if (!data) {
          return true;
        }
        return false;
      } else if (typeof data === "string") {
        if (!data.trim()) {
          return true;
        }
        return false;
      } else if (typeof data === "undefined") {
        return true;
      } else {
        return false;
      }
    },
    cancelAddIng() {
      this.displayIngDiv = false;
      this.unit = "[No Unit]";
      this.name = "";
      this.quantity = "";
      this.editIngIdx = -1;
      this.plusIngChar = "+";
    },
    editIng(idx) {
      const ing = JSON.parse(
        JSON.stringify(this.$store.state.currentRec.ingredients[idx])
      );
      this.quantity = ing.quantity;
      this.name = ing.name;
      this.unit = ing.unit;
      this.displayIngDiv = true;
      this.editIngIdx = idx;
    },
    applyAddIng() {
      this.$emit("update-err", "");
      if (this.name === "") {
        this.$emit(
          "update-err",
          "Sorry, you can't submit an ingredient that lacks a name."
        );
      } else if (this.editIngIdx === -1) {
        // TODO: sandman: Update rec ajax call
        // let otherRec = JSON.parse(JSON.stringify(this.$store.state.currentRec))
        // otherRec.ingredients.push({ quantity: this.quantity, name: this.name, unit: this.unit });
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
        //   );
        this.quantity = 0;
        this.name = "";
        this.unit = "[No Unit]";
        this.plusIng(true);
      } else {
        var editIngObj = {
          idx: this.editIngIdx,
          ing: {
            quantity: this.quantity,
            name: this.name,
            unit: this.unit,
          },
        };
        this.$store.commit("updateEditIng", editIngObj);
        this.displayIngDiv = false;
        this.unit = "[No Unit]";
        this.name = "";
        this.quantity = "";
        this.editIngIdx = -1;
        // TODO: sandman: Update recipe ajax.
        // $.ajax({
        //   type: 'PUT',
        //   url: `/recipes/${this.$store.state.currentRec.id}`,
        //   data: JSON.stringify(this.$store.state.currentRec),
        //   contentType: 'application/json',
        //   dataType: 'json',
        // }).fail(this.fail)
        //   .done(this.success);
      }
    },
    line(ing) {
      return ing.unit === "[No Unit]"
        ? `${ing.quantity} ${ing.name}`
        : `${ing.quantity} ${ing.unit} of ${ing.name}`;
    },
    cancelRecRename() {
      this.showRename = false;
      this.showRecTitle = true;
    },
    editRecName() {
      this.showRename = true;
      this.showRecTitle = false;
      this.rename = this.$store.state.currentRec.name;
    },
    plusIng(isFromMakeRec) {
      if (isFromMakeRec) {
        console.log("Got to plusIng.");
        this.displayIngDiv = true;
        console.log(this.$refs);
        this.$refs.quantity.focus();
        this.plusIngChar = "-";
      } else if (this.plusIngChar === "+") {
        if (this.$store.state.currentRec !== {}) {
          this.displayIngDiv = true;
          this.$nextTick(() => {
            this.$refs.quantity.focus();
          });
        }
        this.plusIngChar = "-";
      } else {
        this.cancelAddIng();
      }
    },
    delRec() {
      // TODO: sandman: Delete recipe ajax.
      //   $.ajax({
      //     type: 'DELETE',
      //     url: `/recipes/${this.$store.state.currentRec.id}`,
      //     dataType: 'json',
      //   })
      //     .fail(this.fail)
      //     .done(this.reset);
    },
    fail(jqXHR) {
      let message = "";
      if (jqXHR.readyState === 0) {
        message = "Failed to contact server.";
      } else if (Object.prototype.hasOwnProperty.call(jqXHR, "responseJSON")) {
        message = jqXHR.responseJSON.message;
      } else if (Object.prototype.hasOwnProperty.call(jqXHR, "responseText")) {
        message = jqXHR["responseText"];
      } else {
        message = "An unknown error has occured.";
      }
      this.$emit("update-err", message);
    },
    applyRecRename() {
      if (this.rename === this.$store.state.currentRec.name) {
        this.cancelRecRename();
        return;
      }
      this.$emit("update-err", "");
      const otherRec = JSON.parse(JSON.stringify(this.$store.state.currentRec));
      otherRec.name = this.rename;
      // TODO: sandman: recipe rename ajax.
      //   $.post({
      //     url: 'recipes',
      //     data: JSON.stringify(otherRec),
      //     contentType: 'application/json',
      //     dataType: 'json',
      //   }).done(
      //     (data) => {
      //       this.$store.commit('updateCurRec', data);
      //     },
      //   ).fail(
      //     (jqXHR) => {
      //       this.$store.state.showRecTitle = true;
      //       this.showRename = false;
      //       this.fail(jqXHR);
      //     },
      //   );
      this.showRename = false;
      this.showRecTitle = true;
    },
    reset() {
      this.unitList = ["[No Unit]", "cups", "fluid oz"];
      // TODO: sandman: units ajax
      //   $.get('/units').done(
      //     (units) => {
      //       this.unitList = units;
      //     }
      //   ).fail(this.failureOnAjaxOfRecipe);
      this.$store.commit("updateCurRec", {});
      var recipeList = [
        {
          id: 49,
          name: "Bajra Dosa",
          ingredients: [
            {
              name: "bajra",
              unit: "cups",
              quantity: 1.5,
            },
            {
              name: "wheat flour",
              unit: "cups",
              quantity: 0.25,
            },
            {
              name: "onion",
              unit: "[No Unit]",
              quantity: 0.5,
            },
            {
              name: "coriander leaves",
              unit: "tbsp",
              quantity: 1,
            },
            {
              name: "cumin seeds",
              unit: "tsp",
              quantity: 1,
            },
            {
              name: "ginger",
              unit: "tsp",
              quantity: 1,
            },
            {
              name: "salt",
              unit: "[No Unit]",
              quantity: 1,
            },
            {
              name: "oil",
              unit: "[No Unit]",
              quantity: 1,
            },
          ],
        },
        {
          id: 20,
          name: "Besan Ladoo",
          ingredients: [
            {
              name: "besan",
              unit: "cups",
              quantity: 1,
            },
            {
              name: "sugar",
              unit: "cups",
              quantity: 0.5,
            },
            {
              name: "ghee",
              unit: "cups",
              quantity: 0.25,
            },
          ],
        },
      ];
      this.$store.commit("updateRecList", recipeList);
      // TODO: sandman: Get recipes from server ajax.
      //   $.get('/recipes', 'json')
      //     .done(
      //       (recipeList) => {
      //         this.$store.commit('updateRecList', recipeList);
      //       },
      //     ).fail(this.fail);
      this.$emit("update-err", "");
      this.showRecTitle = true;
      this.showRename = false;
      this.rename = "";
      this.displayIngDiv = false;
      this.quantity = "";
      this.unit = "[No Unit]";
      this.unitList = [];
      this.name = "";
      this.updateRecList = false;
      this.editIngIdx = -1;
      this.plusIngChar = "+";
    },
    showIng(idx) {
      if (idx === this.editIngIdx) {
        return false;
      }
      return true;
    },
    success(recipe) {
      this.$store.commit("setCurRec", recipe);
    },
    delIng(idx) {
      this.$store.commit("delIng", idx);
      // TODO: sandman: delete ing ajax.
      //   $.ajax({
      //     type: 'PUT',
      //     url: `/recipes/${this.$store.state.currentRec.id}`,
      //     data: JSON.stringify(this.$store.state.currentRec),
      //     contentType: 'application/json',
      //     dataType: 'json',
      //   }).fail(this.fail)
      //     .done(this.success);
    },
    showRightButtons() {
      return this.$store.state.currentRec !== {};
    },
  },
  components: { ModalBox },
});
</script>

<template>
    <div>
        <div>
            <strong id="rec-title" v-show="showRecTitle" class='text text-success'>{{this.$store.state.currentRec.name}}</strong>&nbsp;&nbsp;&nbsp;
            <div id="renamed-recipe-name" v-show="showRename">
                <input id="rename-rec-input" placeholder="New Name..." type="text" v-model="rename" v-on:keyup.enter="applyRecRename">
                <button @click="applyRecRename" class="btn" id="apply-rec-rename">
                    <img src="@/assets/apply.png">
                </button>
            <button @click="cancelRecRename" class="btn" id="cancel-rec-rename">
                <img src="@/assets/cancel.jpg">
            </button>
            </div>
            <button @click="editRecName" class="btn btn-outline-dark" id="edit-rec-name" v-show="showRecTitle">
                <img src="@/assets/edit.png">
            </button>
            <ModalBox :target="this.tar" :tarName="this.$store.state.currentRec.name" @cont-del="delRec" v-show="showRecTitle"></ModalBox>
            <!-- <p>hejjo</p> -->
            <button @click="plusIng(false)" class="btn btn-dark clearfix" data-placement="left" data-toggle="tooltip"
                    id="plus-ing" title="Add ingredient" v-show="this.showRightButtons">{{plusIngChar}}
            </button>
        </div>
        <hr>
        <div id="recipe-details-container">
            <ul id="recipe-details">
                <li :key="idx" class="ingItem" v-for="(ing,idx) in this.$store.state.currentRec.ingredients" v-show="showIng(idx)">
                    <button @click="editIng(idx)" class="edit-recipes btn btn-outline-dark">
                        <img src="@/assets/edit.png">
                    </button>
                    <button class="btn btn-outline-dark" @click="delIng(idx)">
                        <img src="@/assets/del.png" style="width:30px;height:30px;">
                    </button>
                    {{this.line(ing)}}
                </li>
            </ul>
            <div class="form-inline" id="make-ing" v-show="displayIngDiv">
                <label class="sr-only" for="quantity">Quantity</label>
                <input class="form-control mb-2 mr-sm-2 inputIngInfo" ref="quantity" placeholder="Quantity" type="text"
                        v-model="quantity" v-on:keyup.enter="applyAddIng"/>
                <label class="sr-only" for="unit-dropdown">Unit</label>
                <select class="form-control mb-2 mr-sm-2 " id="unit-dropdown" v-model="unit">
                    <option :key="unit" v-for="unit in unitList">{{unit}}</option>
                </select>
                <label class="sr-only" for="name">Name</label>
                <input class="form-control mb-2 mr-sm-2 inputIngInfo" id="name" placeholder="The Food's Name"
                        type="text" v-model="name" v-on:keyup.enter="applyAddIng"/>
                <div class="btn-group" role="group">
                    <button @click="applyAddIng" class="btn">
                        <img src="@/assets/apply.png">
                    </button>
                    <button @click="cancelAddIng" class="btn">
                        <img src="@/assets/cancel.jpg">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>