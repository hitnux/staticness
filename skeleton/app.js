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
            source:"http://halilbilgin.com.tr/staticness/skeleton/data.json", // JSON URL
            data: []
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                const self = this;
                $.getJSON( this.source, function( data ) {
                    self.data = data;
                });
            }
        }
    });
}
function vuecomponents(){
}