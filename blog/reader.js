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
            data:[],
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
                $.getJSON( "http://halilbilgin.com.tr/staticness/blog/data.json", function( data ) {
                    console.log(data["posts"]);
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