const titles = app.component('Titles', {
    props: {},
    emits: { 'show-add-rec-div': null, 'cancel-rec-rename': null },
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
            this.$emit('cancel-rec-rename')
        }
    },
    template:
        /*html*/
        `
    <div>
      <div style="position:relative;width:49%;float:left;padding-left:1rem;"><strong>Recipes:</strong><button class="btn" data-placement="right" data-toggle="tooltip" id="plus-rec"
                style="float:right;width:3rem;height:3rem;" title="Add recipe" v-on:click="showAddRecDiv">+</button></div><div><strong id="rec-title"></strong><div id="renamed-recipe-name" v-show="showRename"><input id="rename-rec-input" placeholder="New Name..." type="text">
            <button class="btn" id="apply-rec-rename"><img src="images/apply.png" style="width:30px;height:30px;">
            </button>
            <button class="btn" id="cancel-rec-rename" v-on:click = "cancelRecRename"><img src="images/cancel.jpg" style="width:30px;height:30px;">
            </button>
        </div>
        <button class="btn" id="edit-rec-name"><img src="images/edit.jpg" style="width:30px;height:30px;">
        </button>
        <button class="btn" id="del-rec"><img src="images/del.png" style="width:30px;height:30px;"></button>
        <button class="btn" data-placement="left" data-toggle="tooltip" id="plus-ing"
                style="float:right;width:3rem;height:3rem;" title="Add ingredient">+
        </button>
    </div>
  </div>`,
});