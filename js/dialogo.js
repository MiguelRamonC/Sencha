/*
dialogo.js
Uso control window de ExtJS; en este ejemplo funciona como diálogo
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
    var ventana;
	var nueva = function(btn) { //el parámetro es el objeto que invoca a la función
		if (!ventana) {
			ventana = new Ext.Window({
				animateTarget : btn.el, //Elemento (nodo HTML) del botón, tiene un efecto visual
				html : '<p>Un Pueblo Mágico es una localidad que tiene atributos simbólicos, leyendas, historia, hechos trascendentes, cotidianidad, en fin magia que te emanan en cada una de sus manifestaciones socio-culturales, y que significan hoy día una gran oportunidad para el aprovechamiento turístico.</p>',
				closeAction : 'hide',
				height : 200,
				width : 300,
				modal: true,
				title: 'Información',
				constrain : true //si se limita a su contenedor o no
			});
		}
		ventana.show(); //En este caso, sólo se crea una vez y se oculta/muestra
	};
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Pueblo Mágico',
		style : 'postition:absolute; top:50vh; left:45vw; width:150px;hight:50px',
		handler : nueva
	});
});
