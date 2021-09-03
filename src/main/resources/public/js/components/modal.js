app.component('Modal', {
        props: { 'target': String,'tarName':String },
        emits:['cont-del'],
        data() {
            return {
                showModal: false
            }
        },
        methods: {
            hideModal(cont) {
                this.showModal = false;
                if (cont) {
                    this.continueDel();
                }
            },
            continueDel() {
                this.$emit('cont-del');
            }
        },
        template: `
        <button id="show-modal" @click="showModal = true" class="btn btn-outline-dark"><img src="images/del.png"></button>
        <div class="modal-mask" v-if="showModal">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <h5 class="modal-title">Are you sure?</h5>
                <button class="close btn">
                    <span aria-hidden="true" @click="hideModal(false)">&times</span>
                </button>
              </div>

              <div class="modal-body">
                <p>
                  {{this.target}} deletion cannot be undone. Please confirm that you want
                    to delete <strong>{{this.tarName}}</strong>.
                </p>
              </div>

              <div class="modal-footer">
                <button class="btn btn-secondary modal-default-button" @click="hideModal(false)">
                    Cancel Deletion
                </button>
                <button class="btn btn-primary delIng modal-default-button" @click="hideModal(true)">
                    Confirm Deletion
                </button>
              </div>
            </div>
          </div>
        </div>
        `,
    })
