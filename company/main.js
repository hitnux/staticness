/**/
$( document ).ready(function() {
    vue();
});
/* */

function vue(){
    vuecomponents();
    new Vue({
        el: '#app',
        data:{
            menu:[],
            carousel: [],
            slice: 150,
            showModal: false,
            current: 0
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                const self = this;
                $.getJSON( "http://halilbilgin.com.tr/staticness/company/data.json", function( data ) {
                    self.menu = data["menu"];
                    self.carousel = data["carousel"];
                });
            },
            readmore(id){
                this.current =id;
                this.showModal= true;
            }
        }
    });
}
function vuecomponents(){
    Vue.component("modal", {
        template: '#modal',
    });  
}