<template>
   <NavbarView />
   <CardView v-bind:data="data" @LikeCount="increseLike" @ViewCard="modalOpen" />
   <ModalView :data="data" :isModal="isModal" :num="selectedNum" @closeModal="isModal = false" />
</template>

<script>
import mdata from './assets/mdata';
import NavbarView from './components/NavbarView.vue';
import ModalView from './components/ModalView.vue';
import CardView from './components/CardView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
      };
   },
   methods: {
      increseLike(i) {
         console.log(i);
         this.data[i].like += 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
         console.log('view', num);
      },
      closeM() {
         this.isModal = false;
      },
   },
   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
      CardView: CardView,
   },
};
</script>

<style lang="scss">
$radius: 5px;
</style>
