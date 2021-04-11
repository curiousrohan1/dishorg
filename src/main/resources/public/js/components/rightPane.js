app.component('Rightpane', {
    emits: ['update-err'],
    data () {
        return {
            showRecTitle: true,
            showRename: false,
            rename: '',
            displayIngDiv: false,
            quantity: '',
            unit: '[No Unit]',
            unitList: [],
            name: '',
            showContainer: true,
            updateRecList: false,
            editIngIdx: -1
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
            this.displayIngDiv = false;
            this.unit = '[No Unit]';
            this.name = '';
            this.quantity = '';
            this.editIngIdx = -1;
        },
        editIng (idx) {
            const ing = JSON.parse(JSON.stringify(this.$store.state.currentRec.ingredients[idx]));
            this.quantity = ing.quantity;
            this.name = ing.name;
            this.unit = ing.unit;
            this.displayIngDiv = true;
            this.editIngIdx = idx;
        },
        applyAddIng () {
            this.$emit('update-err', '');
            if (this.editIngIdx === -1) {
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
                this.unit = '[No Unit]';
            } else {
                var editIngObj = {
                    idx: this.editIngIdx,
                    ing: {
                        quantity: this.quantity,
                        name: this.name,
                        unit: this.unit
                    }
                }
                this.$store.commit('updateEditIng', editIngObj);
                this.displayIngDiv = false;
                this.unit = '[No Unit]';
                this.name = '';
                this.quantity = '';
                this.editIngIdx = -1;
                $.ajax({
                    type: 'PUT',
                    url: `/recipes/${this.$store.state.currentRec.id}`,
                    data: JSON.stringify(this.$store.state.currentRec),
                    contentType: 'application/json',
                    dataType: 'json',
                }).fail(this.fail)
                    .done(this.success);
            }
        },
        line (ing) {
            return (ing.unit === '[No Unit]' ? (`${ing.quantity} ${ing.name}`) : (`${ing.quantity} ${ing.unit} of ${ing.name}`));
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
            if (this.$store.state.currentRec !== {}) {
                this.displayIngDiv = true;
                this.$nextTick(() => {
                    this.$refs.quantity.focus();
                });
            }
            console.log(this.showRightButtons)
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
            let message = '';
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
                    this.$store.commit('sortRecList');
                },
            ).fail(
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
        showIng (idx) {
            if (idx === this.editIngIdx) {
                return false;
            }
            return true;
        },
        success (recipe) {
            this.$store.commit('setCurRec', recipe);
        },
        delIng (idx) {
            this.$store.commit('delIng', idx)
            $.ajax({
                type: 'PUT',
                url: `/recipes/${this.$store.state.currentRec.id}`,
                data: JSON.stringify(this.$store.state.currentRec),
                contentType: 'application/json',
                dataType: 'json',
            }).fail(this.fail)
                .done(this.success);
        },
        showRightButtons () {
            console.log(this.$store.state.currentRec);
            return this.$store.state.currentRec !== {};
        }
    },
    /* html */
    template: `
    <div>
        <div>
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
            <button @click="editRecName" class="btn btn-outline-dark" id="edit-rec-name" v-show="this.showRightButtons">
                <img src="images/edit.png">
            </button>
            <button @click="delRec" class="btn btn-outline-dark" id="del-rec" v-show="this.showRightButtons">
                <img src="images/del.png">
            </button>
            <button @click="plusIng" class="btn btn-dark" data-placement="left" data-toggle="tooltip"
                    id="plus-ing" title="Add ingredient" v-show="this.showRightButtons">+
            </button>
        </div>
        <hr>
        <div id="recipe-details-container" v-show="showContainer">
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
    `,
    computed: {

    }
})
