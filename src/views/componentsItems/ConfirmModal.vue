<template>
    <div v-if="isModalConfirm === 'cardItem_2'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
            <div class="group_row modal_button" @click="openAboutModal('shop')">자세히 보기</div>
            <a href='https://github.com/myk0907/project_shop' target='_blank'>
                <div class="group_row modal_button">
                <img class="svg-icon" src="../../assets/svg/github-logo-vector.svg">
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // cardNum: {
        //     type: String,
        // },
        // ModalContents: {
        //     type: String,
        // },
    },
    data (){
        return{
            isModalConfirm: null,
            // cardNum: 'cardItem_2',
            // BtnLink: 'https://github.com/myk0907/final-project_jejuMap',
            // ModalContents: 'shop'
        }
    },
    methods: {
    },
};
</script>