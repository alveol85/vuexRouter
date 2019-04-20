<template>
    <div class="space">
        <div class="viewLine">
            <div>
                <img :src="require('@/assets/NavBar/'+navBar.imageOne)" alt="Pedido">
            </div>
            <div>
                <hr :class="[navBar.activeLineOne ? 'lineStepTurnOn' : 'lineStepTurnOff' ]" />
            </div>

            <div>
                <img :src="require('@/assets/NavBar/'+navBar.imageTwo)" alt="Pedido">
            </div>
            <div>
                <hr :class="[navBar.activeLineTwo ? 'lineStepTurnOn' : 'lineStepTurnOff' ]" />
            </div>

            <div>
                <img :src="require('@/assets/NavBar/'+navBar.imageThree)" alt="Pedido">
            </div>
            <div>
                <hr :class="[navBar.activeLineThree ? 'lineStepTurnOn' : 'lineStepTurnOff' ]" />
            </div>

            <div>
                <img :src="require('@/assets/NavBar/'+navBar.imageFour)" alt="Pedido">
            </div>
            <div>
                <hr :class="[navBar.activeLineFour ? 'lineStepTurnOn' : 'lineStepTurnOff' ]" />
            </div>

            <div>
                <img :src="require('@/assets/NavBar/'+navBar.imageFive)" alt="Pedido">
            </div>
            <div>
                <hr :class="[navBar.activeLineFive ? 'lineStepTurnOn' : 'lineStepTurnOff' ]" />
            </div>

            <div>
                <img :src="require('@/assets/NavBar/'+navBar.imageSix)" alt="Pedido">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'NavBar',
    props: {
        msg: String
    },
    computed: {
        navBar() {
            return this.$store.getters.navBar;
        }
    }
}
</script>

<style scoped>
img {
    width: 40px;
    height: 40px;
}
.viewLine div {
    display: inline-block;
}

.lineStepTurnOn  {
    height: 3px;
    width: 40px;
    background-color: black;
    margin-bottom: 40%;
}

.lineStepTurnOff {
    height: 3px;
    width: 40px;
    background-color: grey;
    margin-bottom: 40%;
}

</style>