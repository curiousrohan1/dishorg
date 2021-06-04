app.component('Makegrocery', {
  /*html*/
  template: `
    <div>
            <div>
                <h2 class="text text-success">Recipes:</h2>
                <button class="btn btn-dark clearfix" data-placement="right" data-toggle="tooltip" id="plus-rec" title="Add recipe"
                @click="showAddRecDiv">{{this.plusRecChar}}</button>
            </div>
            <hr>
            <div>
                <ul class="list-group" id="recipe-list">
                    <button type="button" @click="clickRec(idx)" class="list-group-item list-group-item-action"
                        :class="{active:rec.active}" v-for="(rec,idx) in this.$store.state.recipeList">{{rec.name}}</button>
                </ul>
                <div id="add-rec-div" v-show="showAddRec">
                    <input ref="newRecName" placeholder="New Recipe name..." type="text" v-model="this.recName" v-on:keyup.enter="addRec">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button class="btn" id="add-rec" @click="addRec">
                            <img src="images/apply.png">
                        </button>
                        <button class="btn" id="cancel-add-rec" @click="cancelAddRec">
                            <img src="images/cancel.jpg">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
                <div v-show="recipesExist">
                    <strong id="rec-title" v-show="showRecTitle" class='text text-success'>{{this.$store.state.currentRec.name}}</strong>&nbsp;&nbsp;&nbsp;
                    <div id="renamed-recipe-name" v-show="showRename">
                        <input id="rename-rec-input" placeholder="New Name..." type="text" v-model="rename" v-on:keyup.enter="applyRecRename">
                        <button @click="applyRecRename" class="btn" id="apply-rec-rename">
                            <img src="images/apply.png">
                        </button>
                    <button @click="cancelRecRename" class="btn" id="cancel-rec-rename">
                        <img src="images/cancel.jpg">
                    </button>
                    </div>
                    <button @click="editRecName" class="btn btn-outline-dark" id="edit-rec-name" v-show="showRecTitle">
                        <img src="images/edit.png">
                    </button>
                    <button @click="delRec" class="btn btn-outline-dark" id="del-rec" v-show="showRecTitle">
                        <img src="images/del.png">
                    </button>
                    <button @click="plusIng" class="btn btn-dark clearfix" data-placement="left" data-toggle="tooltip"
                            id="plus-ing" title="Add ingredient" v-show="this.showRightButtons">{{plusIngChar}}
                    </button>
                </div>
                <hr>
                <div id="recipe-details-container">
                    <ul id="recipe-details">
                        <li class="ingItem" v-for="(ing,idx) in this.$store.state.currentRec.ingredients" v-show="showIng(idx)">
                            <button @click="editIng(idx)" class="edit-recipes btn btn-outline-dark">
                                <img src="images/edit.png">
                            </button>
                            <button class="btn btn-outline-dark" @click="delIng(idx)">
                                <img src="images/del.png" style="width:30px;height:30px;">
                            </button>
                            {{this.line(ing)}}
                        </li>
                    </ul>
                    <form class="form-inline" id="make-ing" v-show="displayIngDiv">
                        <label class="sr-only" for="quantity">Quantity</label>
                        <input class="form-control mb-2 mr-sm-2 inputIngInfo" ref="quantity" placeholder="Quantity" type="text"
                                v-model="quantity" v-on:keyup.enter="applyAddIng"/>
                        <label class="sr-only" for="unit-dropdown">Unit</label>
                        <select class="form-control mb-2 mr-sm-2 " id="unit-dropdown" v-model="unit">
                            <option v-for="unit in unitList">{{unit}}</option>
                        </select>
                        <label class="sr-only" for="name">Name</label>
                        <input class="form-control mb-2 mr-sm-2 inputIngInfo" id="name" placeholder="The Food's Name"
                                type="text" v-model="name" v-on:keyup.enter="applyAddIng"/>
                        <div class="btn-group" role="group">
                            <button @click="applyAddIng" class="btn">
                                <img src="images/apply.png">
                            </button>
                            <button @click="cancelAddIng" class="btn">
                                <img src="images/cancel.jpg">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    `
})