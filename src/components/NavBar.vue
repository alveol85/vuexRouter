<template>
    <div class="space">
        <div class="order-type">
            <span class="green-box"></span>
            <h1>PEDIDO VERDE:</h1>
            <p>RESERVAMOS LOS PRODUCTOS PARA TI</p>
        </div>
    
        <div class="bradcumbs">
            <div class="item active">
                <div class="img">
                    <img ng-src="{{'images/pedido.png' | contextpath}}" alt="Pedido">
                </div>
                <span>PEDIDO</span>
            </div>
    
            <div class="line" ></div>
    
            <div class="item" ng-class="{active: vm.$location.path() === '/order-offer' || vm.$location.path() === '/orderdetail' || vm.$location.path() === '/orderstatus' || vm.$location.path() === '/finalizeorderstatus' || vm.$location.path() === '/landing-page'}">
                <div class="img">
                    <img >
                </div>
                <span>SUPERGANGAS</span>
            </div>
    
            <div class="line" ></div>
    
            <div class="item" ng-class="{active: vm.$location.path() === '/orderdetail' || vm.$location.path() === '/orderstatus' || vm.$location.path() === '/finalizeorderstatus' || vm.$location.path() === '/landing-page'}">
                <div class="img">
                    <img >
                </div>
                <span>DETALLE DEL PEDIDO</span>
            </div>
         </div>
    </div>
</template>
