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
            source:"http://halilbilgin.com.tr/staticness/blog/data.json", // JSON URL
            slice: 150, // Short description number of letters
            data:[],
            showModal: false,
            current: 0
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                const self = this;
                $.getJSON( this.source, function( data ) {
                    self.data = data["posts"];
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