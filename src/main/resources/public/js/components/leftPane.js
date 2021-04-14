app.component('Leftpane', {
    emits: ['update-err','show-right-pane'],
    data () {
        return {
            showAddRec: false,
            recName: ''
        };
    },
    mounted () {
        $.get('/recipes', 'json')
            .done(
                (recipeList) => {
                    this.$store.commit('updateRecList', recipeList);
                    this.$store.commit('sortRecList');
                },
            ).fail(this.failureOnAjaxOfRecipe);
    },
    methods: {
        showAddRecDiv () {
            this.showAddRec = true;
            this.$nextTick(() => {
                this.$refs.newRecName.focus();
            });

        },
        clickRec (idx) {
            this.$store.commit('activateRec', idx);
            this.$store.commit('setCurRec', this.$store.state.recipeList[idx]);
        },
        addRec () {
            const rec = {
                name: this.recName,
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
                    this.$store.commit('addRecipe', recipe);
                    this.clickRec(this.findRec(recipe));
                },
            ).fail(
                (jqXHR) => {
                    this.failureOnAjaxOfRecipe(jqXHR);
                },
            );
            this.showAddRec = false;
            this.recName = ''
            this.$emit('show-right-pane');
        },
        failureOnAjaxOfRecipe (jqXHR) {
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
        cancelAddRec () {
            this.showAddRec = false;
            this.recName = '';
        },
        findRec (recipe) {
            for (let i = 0; i < this.$store.state.recipeList.length; i += 1) {
                if (JSON.stringify(this.$store.state.recipeList[i]) === JSON.stringify(recipe)) {
                    return i;
                }
            }
        }
    },
    /* html */
    template: `
    <div>
        <div>
            <h2 class="text text-success">Recipes:</h2>
            <button class="btn btn-dark" data-placement="right" data-toggle="tooltip" id="plus-rec" title="Add recipe"
            @click="showAddRecDiv">+</button>
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
    `
})
