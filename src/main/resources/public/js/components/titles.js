const titles = app.component('Titles', {
    props: { 'abled': Boolean },
    emits: { 'show-add-rec-div': null, 'plus-ing': null },
    data() {
        return {
            showRename: false,
        };
    },
    methods: {
        showAddRecDiv() {
            this.$emit('show-add-rec-div');
        },
        cancelRecRename() {
            this.showRename = false;
        },
        editRecName() {
            this.showRename = true;
        },
        plusIng() {
            this.$emit('plus-ing');
        }
    },
    template:
        /*html*/
        `
    <div>
        <div style="position:relative;width:49%;float:left;padding-left:1rem;">
            <strong class="text-primary" style="display: inline-block;"><h2>Recipes:</h2></strong>
            <button class="btn text-primary" data-placement="right" data-toggle="tooltip" id="plus-rec"
                style="float:right;width:3rem;height:3rem;display: inline-block;" title="Add recipe" v-on:click="showAddRecDiv">+</button>
        </div>
        <div>
            <strong id="rec-title"></strong>
            <div id="renamed-recipe-name" v-show="showRename">
                <input id="rename-rec-input" placeholder="New Name..." type="text">
                <button class="btn" id="apply-rec-rename"><img src="images/apply.png" style="width:30px;height:30px;"></button>
                <button class="btn" id="cancel-rec-rename" v-on:click = "cancelRecRename"><img src="images/cancel.jpg" style="width:30px;height:30px;"></button>
            </div>
            <button class="btn" id="edit-rec-name" v-on:click="editRecName" disabled="this.abled" v-show="!showRename" style="cursor: not-allowed;background-color: #d8d8d8;"><img src="images/edit.jpg" style="width:30px;height:30px;"></button>
            <button class="btn" id="del-rec" style="cursor: not-allowed; background-color: #d8d8d8;" disabled="this.abled"><img src="images/del.png"  v-show="!showRename" style="width:30px;height:30px;"></button>
            <button class="btn text-primary" data-placement="left" data-toggle="tooltip" id="plus-ing"
                style="float:right;width:3rem;height:3rem;" title="Add ingredient" v-on:click="plusIng">+</button>
    </div>
  </div>`,
});