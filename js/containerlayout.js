/*
containerlayout.js
Manejo de contenedores y distribuciones (layout) con Sencha ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.application({
    name: 'HolaMundo1',
    launch : function() {
		var hijo1 = {   //creo un nodo del dom
				frame: true,
				height: '10em',
				html: '<div id=\"tabs-1\"><img id=\"img_tolte\"  src=\"img\/toltecas.jpg\" ><p>Los primeros pobladores del valle de Ahuilizapan es muy probable que fueran de origen totonaca, y en el año 1051 fue la probable llegada toltecas, que ya poblaban Anáhuac en el año 648 y que, aniquilados por el hambre, la peste y las guerras, emigraron al sur, pasando por este valle.</p>  <p>				  En el año 1200 la zona sufrió una invasión de los Tlaxcaltecas. Los especialistas suelen incluir este valle dentro del complejo cultural olmeca. Quizás una de las referencias cronológicas más remotas que se poseen de esta región es la que nos brindan los anales de Tlatelolco: \"En el año 10 Tecpatl (1424), entonces perecieron los Ahuilizapaneca\", cita que probablemente se refiere a la incursión conquistadora que diversas naciones de la cuenca de México, entre ellas los tenochcas, bajo la jefatura de los tepanecas de Azcapotzalco, llevaron a cabo hacia las tierras tropicales del estado de Veracruz. Para protegerse de los Aztecas, los tlaxcaltecas fundaron las poblaciones de Tequila, Maltrata y Texmalaca que usaron como fortines teniendo como centro al valle de Ahuilizapan.</p><p>En 1455, el valle de Ahuilizapan queda totalmente bajo el dominio de los aztecas; dos años después se produce una rebelión de los Señoríos de Ahuilizapan contra dicho dominio, por lo que Moctezuma Ilhuicamina manda un ejército a reconquistar la cuenca del Papaloapan y su costa. En 1469, Ahuilizapan es sometida nuevamente por los aztecas al mando de Axayacatl, quien les impuso duro castigo: el año 1475 Ahuilizapan pagaba tributo a los aztecas, suministrando mantas, tejidos, algodón y semillas al ejército azteca. Se cree que en recuerdo de la conquista de Moctezuma Ilhuicamina, se esculpió el monolito que se encuentra actualmente dentro del panteón Juan de la Luz Enríquez el cual es conocido como \"La Piedra del Gigante\".Los aztecas dieron el nombre genérico de Ahauializapan a todo el valle que estaba compuesto por varias poblaciones como eran Ostoticpac (hoy Nogales), Izhuatlán (hoy Orizaba), Tlilapan, Tequila, Tezmalaca y Maltrata, y fueron los españoles quienes llamaron Orizaba al lugar donde se asentaron y es actualmente la ciudad.</p></div>',
				title: 'Comienzo',
				collapsible: true,
				collapsed: false
			};
		var hijo2 = {
				frame: true,
				height: '10em',
				width: '100%',
				html: '<div id=\"tabs-2\"><img id=\"img_tolte\"   src=\"img/conquista.webp\"><p>La provincia de Ahuilizapan fue de las primeras en atraer a los invasores españoles, que buscaban obtener inmensas riquezas. Orizaba, como pasó a llamarse, ya era una ciudad importante en el momento de la conquista española. Hernán Cortés en su tercera carta de relación al Rey de España daba el nombre de Aulicaba a la provincia y no solamente al pueblo de aquel entonces, pero posteriormente se llamó Orizaba al pueblo que para los indios era Izhuatlán, situado al noroeste de la actual ciudad. Después de la conquista de Tenochtitlán Hernán Cortés llegó por primera vez a Orizaba quedando admirado de la belleza del lugar, los ricos manantiales y el clima benigno, permaneció dos días en su expedición a Veracruz para combatir a Pánfilo de Narváez en el mes de mayo de 1520. El 15 de mayo de 1524 llegaron a Abrizaba, doce peregrinos, misioneros franciscanos que venían a catequizar a los indios. En octubre de 1524, Cortés visita Orizaba por segunda vez acompañado por sus capitanes, sus criados, el último tlatoani azteca Cuauhtémoc, los caciques Tetlepanquetzal y Coanacoch en calidad de prisioneros, así como por doña Marina \"La Malinche\" y algunos clérigos. En el lugar que hoy conocemos como Huiloapan en la estancia de un tal Ojeda \"el tuerto\" se celebró la boda de la Malinche con el capitán Juan de Jaramillo oficiando en la ceremonia Fray Juan de Tecto. Más tarde, después de haber asesinado a Cuauhtémoc y los otros dos caciques el 15 de julio de 1526, Hernán Cortés pasa nuevamente por Orizaba encomendando el entonces Valle de Ahauializapan a Juan de Coronel, soldado de Pánfilo de Narváez, convirtiéndose así en el primer encomendero del valle extendiéndose sus posesiones hasta Ostoticpac (hoy Nogales). En 1532 la segunda audiencia hizo el deslinde de asentamientos nominando a Orizagua y Ostoticpac en cabeceras dependientes del pueblo de Tequila.</p></div>',
				title: 'Conquista',
				collapsible: true,
				collapsed: true
			};
			var hijo3 = {
				frame: true,
				height: '10em',
				width: '100%',
				html: '    <div id=\"tabs-3\"><img id=\"img_tolte\"   src=\"img/moja.jpg\"><p>Durante el período colonial, Orizaba se convirtió en una ciudad importante. Al ser Orizagua un paso obligado para los viajeros, los dueños de convoyes Juan Ramón Velasco, Mejía, Prado y Maldonado construyen el primer camino entre la Angostura y los Llanos de Escamela fundando la primera Calle Real por donde pasaron los convoyes de todos los Virreyes de la Nueva España. (Actualmente la Oriente 6). Para el año 1535 Orizagua estaba formada por unas cuantas casas de madera levantadas por los españoles que se establecieron para formar casas, ventas y mesones para dar alojamiento a los viajeros además de las chozas de los indios de Izhuatlán, creciendo pronto, pues los convoyes descansaban tres o cuatro días por lo pesado del camino. Tanta importancia fue adquiriendo el valle, que el mismo primer Virrey Don Antonio de Mendoza en detrimento del \"tuerto\" Ojeda tomó posesión de la tierra comprendida entre Acultzingo y Nogales y estableció un molino o trapiche de caña de azúcar en el lugar que desde entonces se llamó "El ingenio" (El ingenio de los Nogales de San Juan Bautista). Más tarde fueron desalojados los primeros encomenderos adueñándose de grandes extensiones el Marqués del Valle de la Colina, estableciéndose entre ellos un largo litigio que continúo entre los herederos. En 1569 fue construida con horcones y paja bajo la dirección de los frailes de Chocaman la primera Iglesia llamada "El calvario". El barrio de indios estaba separado del de españoles, para 1553 los nativos designaron sus autoridades, en tanto que los españoles dependían de la jurisdicción de Tequila hasta 1579 en que debido al mayor tráfico que se registraba, la autoridad que radicaba en Tequila fue trasladada a Orizaba siendo su primer corregidor Payo Patiño. En 1590 Antonelli el supervisor de la construcción del fuerte de San Juan de Ulúa trazó el mapa de un camino nuevo, a un lado de Cotaxtla que pasaba además por Córdoba, San Andrés y Nopaluca, por la ruta de Orizaba que era la ruta de los mensajeros de Moctezuma con la consecuente mejoría, pues para 1600 se funda la casa del Ayuntamiento para los indígenas, y para 1618 Pedro Mejía y Sebastián Maldonado a instancias de los dueños de carros y caballerías que hacían el viaje de México a Veracruz hicieron las gestiones necesarias para fundar un hospital del que fueron encargados los juaninos, iniciada la obra en 1619 fue hecha lentamente porque hubo que edificarla a base de limosnas.Los carreteros impusieron una claúsula a los Juaninos exigiendo que diariamente los frailes recorrieran dos leguas a la redonda del hospital para recoger caminantes enfermos. Dos hechos se ponen en relación con esto, Don Antonio de Erauso (la Monja Alférez) o Alonso Díaz Ramírez de Guzmán o Catalina de Erausto y Galaviaga recorría el camino con una recua de mulas cargando ropa y así dedicada a la arrería se enfermó en Cuitaxtla del "mal de la muerte"  expirando en 1650 y fue sepultada en San Juan de Dios, iglesia anexa al hospital y convento de los juaninos.</p></div>',
				title: 'Época colonial',
				collapsible: true,
				collapsed: true
			};
			var hijo4 = {
				frame: true,
				height: '10em',
				width: '100%',
				html: '    <div id=\"tabs-4\"><img id=\"img_tolte\"  src=\"img/castillo.jpg\" ><p>La historia moderna de Orizaba comienza en 1995, cuando por primera vez un partido diferente al PRI gana las elecciones municipales en este caso, el Dr. Tomás Trueba Gracián fue el primer alcalde de un partido de oposición como militante del PAN, comenzando la era de la democracia en las elecciones municipales. Por varios años, el PAN dominó en las elecciones federales y municipales llegando a considerar a la región como "el corredor azul". En su momento, Tomás Trueba fue considerado como el mejor alcalde del país.2​ Nuevamente en 1997 gracias sobre todo al buen gobierno de Trueba, el PAN volvió a ganar arrasando a los demás partidos de la mano de otro médico, el Dr. Ángel Escudero Estadelman. El gobierno de Escudero se preocupó por embellecer y modernizar el centro histórico principalmente el parque Apolinar Castillo y el Mercado Melchor Ocampo, sin embargo, el alcalde fue tachado de tajante y de malos tratos en los conflictos territoriales con la entonces alcaldesa de Ixhuatlancillo Angelina Rosales Mencías por lo que su reputación era pésima. Estos y otros problemas como la estrategia del candidato, hicieron que el PAN no pudiera repetir por tercera ocasión la alcaldía y en las elecciones del año 2000, el PRI recuperó la alcaldía teniendo como candidato a Martín Cabrera Zavaleta quien se preocupó por rescatar y embellecer el Río Orizaba y la introducción de nuevos centros de trabajo al sur de la ciudad. Sin embargo, los logros alcanzados por su gobierno se vieron empañados por actos irresponsables del alcalde al ser encontrado no pocas veces en diferentes lugares dentro o fuera de la ciudad abusando de las bebidas alcohólicas.3​ Dichos actos fueron justificados por el alcalde durante su último informe de gobierno diciendo que finalmente es un hombre con debilidades y que lo disculparan sus conciudadanos.4​ Cabrera Zavaleta fue el único alcalde de la era moderna en Orizaba que gobernó por más de 4 años para ajustar el calendario electoral a la elección estatal de gobernador. Su último año fue el más desastroso por lo que la ciudadanía volvió a elegir en 2004 a un candidato del PAN nuevamente un médico, el Dr. Emilio Estadelman López quien se convirtió en un gobierno gris, debido a la lejanía de su gobierno con la gran promoción del color rojo y de los lemas del gobernador Fidel Herrera Beltrán, pareciendo que el municipio de Orizaba se encontraba aislado del panorama político.</p></div>',
				title: 'Siglo XXIa',
				collapsible: true,
				collapsed: true
			};
		Ext.create('Ext.Panel', {  //creo el panel 
			renderTo: Ext.getBody(),  // acomoda en el body
			width: '100em',
			height: '200em',
			title: 'Historia de Orizaba',
			autoscroll: true,
			items: [     //adjunto los hijos
				hijo1, hijo2, hijo3, hijo4
			]
		});
	}
});

