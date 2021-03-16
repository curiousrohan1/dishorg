app.component('Leftpane', {
    emits: ['update-err'],
    data () {
        return {
            recipeList: [

            ],
            showAddRec: false,
            recName: ''
        };
    },
    mounted () {
        $.get('/recipes', 'json')
            .done(
                (recipeList) => {
                    this.recipeList = recipeList;
                },
            ).fail(this.failureOnAjaxOfRecipe);
    },
    methods: {
        showAddRecDiv () {
            this.showAddRec = true;
        },
        /**
         * @param {string | number} idx
         */
        clickRec (idx) {
            const rec = this.recipeList[idx];
            for (let i = 0; i < this.recipeList.length; i += 1) {
                this.recipeList[i].active = false;
            }
            rec.active = true;
            this.$store.commit('setCurRec', rec);
        },
        addRec () {
            const rec = {
                name: this.recName,
                ingredients: [
                ],
                id: this.recipeList.length,
                active: false,
            };
            $.post({
                url: 'recipes',
                data: JSON.stringify(rec),
                contentType: 'application/json',
                dataType: 'json',
            }).done(
                (recipe) => {
                    // document.getElementById('success').play();
                    this.$store.commit('setCurRec', recipe);
                    let i = 0;
                    // while (i < this.recipeList.length) {
                    //     if (this.recipeList[i].name <= recipe.name) {
                    //         i += 1;
                    //     }
                    //     else {
                    //         break;
                    //     }
                    // }
                    while (i < this.recipeList.length && this.recipeList[i].name < recipe.name) {
                        i += 1;
                    }
                    this.recipeList.splice(i, 0, recipe);
                    this.clickRec(i);
                },
            ).fail(
                (jqXHR) => {
                    this.failureOnAjaxOfRecipe(jqXHR);
                },
            );
            this.showAddRec = false;
            this.recName = ''
        },
        /**
         * @param {{ [x: string]: string; readyState: number; hasOwnProperty: (arg0: string) => any; responseJSON: { message: string; }; }} jqXHR
         */
        failureOnAjaxOfRecipe (jqXHR) {
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
        cancelAddRec () {
            // document.getElementById('fail').play();
            this.showAddRec = false;
            this.recName = '';
        }
        // successOnAjaxOfRecipe (recipe) {
        //     // document.getElementById('success').play();
        //     console.log('success!');
        //     this.$store.commit('setCurRec', recipe);

        //     if (mountedApp.updateRecList) {
        //         let i = 0;
        //         while (i < this.recipeList.length) {
        //             if (this.recipeList[i] !== mountedApp.curRec) {
        //                 this.recipeList.splice(i, 1);
        //                 this.recipeList.splice(i, 0, mountedApp.curRec);
        //                 mountedApp.updateRecList = false;
        //                 break;
        //             }
        //             i += 1;
        //         }
        //     }
        //     mountedApp.curRec.ingredients.forEach((ingredient, idx) => {
        //         const line = this.line(ingredient);
        //         //        /// /
        //         //        //        $('#recipe-details').append(`<li id="ing-edit${idx}">${getIngDiv(idx)}</li>`);
        //         //
        //         //        //        $(`#ing-edit${idx}`).hide();
        //     });
        //     //            $('button.edit-recipes').prop('disabled', false);
        //     //            $('li > div > form > button.cancel').click(function () {
        //     //              $('button.edit-recipes').prop('disabled', false);
        //     //              ingCancel($(this).data('idx'));
        //     //            });
        //     //            $('li > div > form > button.apply').click(function () {
        //     //              ingApply($(this).data('idx'));
        //     //            });
        //     //            $('button.openModal').click(function () {
        //     //              currentIdx = $(this).data('idx');
        //     //            });
        //     //            $('input.inputIngInfo').keypress(function (event) {
        //     //              const idx = $(this).data('idx');
        //     //              if ($(`#quantity${idx}`).val() !== ''
        //     //                && $(`#name${idx}`).val() !== ''
        //     //                && event.keyCode === 13) {
        //     //                $(`#add-ing${idx}`).click();
        //     //              }
        //     //            });
        //     //            $('*').click(() => {
        //     //              $('#error-message').hide();
        //     //            });
        //     //            $('input.inputIngInfo').focus(() => {
        //     //              $('#error-message').hide();
        //     //            });
        //     console.log('all done! with the success!');
        // },
    },
    /* html */
    template: `
    <div>
        <div>
            <strong class="text-primary">
                <h2>Recipes:</h2>
            </strong>
            <button class="btn text-primary" data-placement="right" data-toggle="tooltip" id="plus-rec" title="Add recipe"
                @click="showAddRecDiv">+</button>
        </div>
        <hr>
        <div>
            <!--    <div data-offset="0" data-spy="scroll" data-target="#recipe-list">-->
            <ul class="list-group" id="recipe-list">
                <button type="button" @click="clickRec(idx)" class="list-group-item list-group-item-action"
                    :class="{active:rec.active}" v-for="(rec,idx) in recipeList">{{rec.name}}</button>
            </ul>
            <div id="add-rec-div" v-show="showAddRec">
                <input id="new-recipe-name" placeholder="New Recipe name..." type="text" v-model="this.recName">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button class="btn" id="add-rec" @click="addRec"><img src="images/apply.png"></button>
                    <button class="btn" id="cancel-add-rec" @click="cancelAddRec"><img src="images/cancel.jpg"></button>
                </div>
            </div>
        </div>
    </div>
    `
})