export type Faq = { q: string; a: string };
export const faqs: Record<string, Faq[]> = {
	"cuantos-litros-de-pintura-por-m2": [
		{ q: "¿Cuántos m² pinta un litro de pintura?", a: "En una pared lisa ya pintada, un litro de pintura plástica cubre entre 10 y 14 m². En superficies porosas o de gotelé rinde bastante menos, entre 5 y 8 m²." },
		{ q: "¿Hay que añadir margen al calcular los litros?", a: "Sí. Lo habitual es sumar un 10 % para esquinas, retoques y pérdidas; es mejor que sobre un poco a quedarse corto a mitad de pared." },
		{ q: "¿Dónde veo el rendimiento exacto de mi pintura?", a: "En el envase o en la ficha técnica del fabricante. Es el dato definitivo, porque cambia entre productos." },
	],
	"cuanta-pintura-para-una-habitacion": [
		{ q: "¿Cuánta pintura necesito para una habitación de 12 m²?", a: "Para una habitación de tamaño medio, unos 8 litros si pintas paredes y techo con dos capas." },
		{ q: "¿Cuántos botes tengo que comprar?", a: "Para unos 8 litros sirven dos botes de 4 L, o uno de 5 L y otro de 4 L. Compra todo a la vez para que el tono sea igual." },
		{ q: "¿Descuento las puertas y las ventanas?", a: "Sí. Una puerta estándar ronda 1,6 m² y una ventana mediana 1,5 m². En la calculadora usa «+ Puerta» y «+ Ventana» en cada pared." },
	],
	"cuanta-pintura-para-gotele": [
		{ q: "¿Cuántos m² pinta un litro sobre gotelé?", a: "Entre 5 y 7 m² por litro, casi la mitad que en una pared lisa ya pintada." },
		{ q: "¿Cuánta pintura necesito para 30 m² de gotelé?", a: "Con 6 m²/L y dos capas, unos 11 litros contando un 10 % de margen." },
		{ q: "¿Qué rodillo se usa para pintar gotelé?", a: "Uno de pelo largo, para que la pintura llegue a los huecos del relieve." },
	],
	"cuantas-manos-de-pintura-dar": [
		{ q: "¿Cuántas manos de pintura hay que dar?", a: "Lo habitual son dos. Una sola suele dejar zonas poco cubiertas o con distinto brillo." },
		{ q: "¿Cuándo hacen falta tres manos?", a: "Al pasar de un color muy oscuro o saturado a uno claro sin imprimación, o si se ven transparencias tras la segunda mano." },
		{ q: "¿Cuánto hay que esperar entre una mano y otra?", a: "En pinturas plásticas suele ser de 2 a 4 horas, pero hay que seguir lo que indique el envase." },
	],
	"cuanta-pintura-para-un-techo": [
		{ q: "¿Cuánta pintura necesito para un techo de 20 m²?", a: "Unos 3,7 litros a dos capas con un rendimiento de 12 m²/L, así que te llega con un bote de 4 L." },
		{ q: "¿Se pinta antes el techo o las paredes?", a: "Primero el techo: las salpicaduras se tapan después al pintar las paredes." },
		{ q: "¿Una capa o dos en el techo?", a: "Lo normal son dos capas para que no queden marcas de rodillo." },
	],
	"cuantos-metros-pinta-un-bote-de-pintura": [
		{ q: "¿Cuántos m² pinta un bote de 15 litros?", a: "Con un rendimiento de 12 m²/L, unos 180 m² con una capa o unos 90 m² con dos capas." },
		{ q: "¿Cuántos m² se pintan con 4 litros?", a: "Unos 48 m² con una capa o 24 m² con dos capas, que es lo que da para una habitación pequeña." },
		{ q: "¿Y si la pared es de gotelé?", a: "Las cifras se reducen a la mitad: un bote de 15 L cubriría unos 90 m² con una capa y unos 45 m² con dos." },
	],
	"cuanta-pintura-para-una-fachada": [
		{ q: "¿Cuánto rinde un litro de pintura en una fachada?", a: "Como orientación, entre 5 y 8 m² por litro, porque son superficies rugosas y absorbentes." },
		{ q: "¿Cuánta pintura necesito para una fachada de 8 × 6 m?", a: "Con unos 42 m² pintables y 6 m²/L a dos capas, unos 15,4 litros." },
		{ q: "¿Cuándo es mejor pintar una fachada?", a: "Con tiempo seco, sin sol directo y sin riesgo de lluvia en las horas siguientes." },
	],
	"pintar-sobre-pared-oscura": [
		{ q: "¿Cuántas manos hacen falta para pintar de claro una pared oscura?", a: "Con pintura normal, tres o más. Con una buena imprimación cubriente, a menudo bastan dos de acabado." },
		{ q: "¿Es mejor usar imprimación?", a: "Sí, suele ser la opción que más tiempo y pintura ahorra. Muchos fabricantes recomiendan tintarla con un tono parecido al color final." },
		{ q: "¿Qué colores cuestan más de tapar?", a: "Los saturados: rojos intensos, azules marinos y negros." },
	],
	"cuanto-tarda-en-secar-la-pintura": [
		{ q: "¿Cuánto tarda en secar la pintura plástica de interior?", a: "Se seca al tacto en aproximadamente una hora, se puede dar la siguiente mano a las 2-4 horas y tarda varios días en curar del todo." },
		{ q: "¿Qué hace que la pintura tarde más en secar?", a: "La humedad alta, la poca ventilación, el frío (por debajo de unos 10 °C) y las capas gruesas." },
		{ q: "¿Cuándo puedo limpiar la pared recién pintada?", a: "Evita fregarla durante los primeros días, hasta que la pintura esté bien curada." },
	],
	"pintura-para-cocina-y-bano": [
		{ q: "¿Qué pintura se usa en un baño o una cocina?", a: "Una pintura lavable con protección antimoho o antihumedad; en cocinas, además, resistente a la grasa y al vapor." },
		{ q: "¿Se puede pintar sobre una pared húmeda?", a: "No. Hay que dejarla secar por completo; si no, atrapas la humedad bajo la pintura." },
		{ q: "¿Cómo calculo la pintura si hay azulejos?", a: "Resta la superficie alicatada: solo pintas la zona sin azulejos." },
	],
	"litros-de-pintura-para-30-m2": [
		{ q: "¿Cuántos litros de pintura necesito para 30 m²?", a: "Unos 7 litros a dos capas en una pared normal (10 m²/L), contando un 10 % de margen." },
		{ q: "¿Y si es gotelé?", a: "Con 7 m²/L y dos capas, unos 9,5 litros." },
		{ q: "¿Qué bote me conviene?", a: "Un bote de 10 L, o uno de 5 L más otro de 4 L si quieres afinar el gasto." },
	],
	"litros-de-pintura-para-50-m2": [
		{ q: "¿Cuántos litros de pintura necesito para 50 m²?", a: "Unos 9 litros a dos capas en pared lisa ya pintada (12 m²/L) y unos 11 litros en una pared normal (10 m²/L)." },
		{ q: "¿Cuánta pintura para 50 m² de gotelé?", a: "Unos 15,7 litros a dos capas, casi el doble que en pared lisa." },
		{ q: "¿Qué botes compro?", a: "Dos botes de 5 L, o uno de 15 L si tu pared es más porosa." },
	],
	"litros-de-pintura-para-100-m2": [
		{ q: "¿Cuántos litros de pintura necesito para 100 m²?", a: "Unos 18 litros a dos capas en pared lisa ya pintada (12 m²/L) y unos 22 litros en pared normal (10 m²/L)." },
		{ q: "¿Compensa comprar botes grandes?", a: "Sí: el litro sale bastante más barato en botes de 15 o 20 L que en botes de 4 L." },
		{ q: "¿Descuento puertas y ventanas?", a: "Sí, los 100 m² deben ser de superficie pintable. En la calculadora usa «+ Puerta» y «+ Ventana» en cada pared." },
	],
	"litros-de-pintura-para-un-salon": [
		{ q: "¿Cuánta pintura necesito para un salón de 5 × 4 m?", a: "Unos 9 litros para las paredes (40,4 m² a pintar) y 4,5 litros para el techo, a dos capas." },
		{ q: "¿Puedo usar la misma pintura en paredes y techo?", a: "Sí, y así compras un solo bote grande. Aun así, la pintura específica de techos suele salpicar menos." },
		{ q: "¿Qué botes compro?", a: "Un bote de 15 L, o uno de 10 L más uno de 4 L, comprados a la vez para que el tono sea idéntico." },
	],
	"litros-de-pintura-para-un-piso-de-90-m2": [
		{ q: "¿Cuánta pintura necesito para un piso de 90 m²?", a: "Aproximadamente 48,5 litros para las paredes y 20 litros para los techos, a dos capas en pared lisa." },
		{ q: "¿Cómo se estima la superficie de paredes de un piso?", a: "Como referencia, unas 2,5 veces la superficie útil una vez descontadas puertas y ventanas." },
		{ q: "¿Cómo ahorro pintura y dinero?", a: "Compra botes grandes de 15 o 20 L, usa pintura de calidad que cubra mejor y no des una tercera capa si no hace falta." },
	],
	"cuanta-pintura-para-un-dormitorio": [
		{ q: "¿Cuánta pintura necesito para un dormitorio de 3 × 4 m?", a: "Unos 7,5 litros para las paredes y 3 litros para el techo, a dos capas." },
		{ q: "¿Qué bote compro para un dormitorio?", a: "Uno de 10 L, o uno de 5 L más otro de 4 L. Para el techo basta un bote de 4 L." },
		{ q: "¿Qué colores van bien en un dormitorio?", a: "Los claros y mates dan sensación de amplitud y disimulan imperfecciones." },
	],
	"cuanta-pintura-para-un-pasillo": [
		{ q: "¿Cuánta pintura necesito para un pasillo de 1 × 5 m?", a: "Unos 6 litros a dos capas, contando tres puertas, porque un pasillo tiene mucha pared." },
		{ q: "¿Qué pintura conviene en un pasillo?", a: "Una lavable, porque se roza y se mancha más que otras estancias." },
		{ q: "¿Qué herramienta uso en un pasillo estrecho?", a: "Un rodillo pequeño y una brocha para las zonas junto a puertas y marcos." },
	],
	"cuanta-pintura-para-una-pared": [
		{ q: "¿Cuánta pintura necesito para una pared de 4 × 2,5 m?", a: "Unos 2,5 litros a dos capas con una pintura que rinda 10 m²/L." },
		{ q: "¿Qué bote compro para una sola pared?", a: "Uno de 1 o 2 litros suele bastar para una pared aislada, por ejemplo una de acento." },
		{ q: "¿Descuento la puerta o la ventana de la pared?", a: "Sí, resta su superficie: una puerta ronda 1,6 m² y una ventana 1,5 m²." },
	],
	"cuanta-pintura-para-el-techo-de-un-salon": [
		{ q: "¿Cuánta pintura necesito para el techo de un salón de 5 × 4 m?", a: "Unos 4,5 litros a dos capas, con un rendimiento de 10 m²/L." },
		{ q: "¿Rinde más la pintura específica para techos?", a: "Suele rendir algo más, porque es más espesa y no gotea." },
		{ q: "¿Puedo dar una sola capa en el techo?", a: "Si el techo ya es blanco y está en buen estado, una capa puede bastar." },
	],
	"como-pintar-un-techo-sin-marcas": [
		{ q: "¿Por qué se me marca el techo al pintarlo?", a: "Casi siempre por parar a mitad y retomar cuando la pintura ya está seca, o por cargar demasiada pintura de golpe." },
		{ q: "¿Qué rodillo conviene para un techo liso?", a: "Uno de pelo medio-corto, de 10 a 12 mm, mejor con pértiga." },
		{ q: "¿Cuándo doy la segunda capa?", a: "Cuando esté seca al tacto, normalmente a las 4-6 horas según el envase, y en sentido perpendicular a la primera." },
	],
	"pintura-para-techo-con-manchas-de-humedad": [
		{ q: "¿Puedo pintar directamente sobre una mancha de humedad?", a: "No. Hay que arreglar la causa, dejar secar, limpiar el moho y sellar la mancha antes de pintar; si no, reaparece." },
		{ q: "¿Qué imprimación uso para sellar la mancha?", a: "Una imprimación selladora antimanchas o bloqueadora, y después pintura antimoho o específica para techos a dos capas." },
		{ q: "¿Cuándo debo llamar a un profesional?", a: "Si las manchas vuelven, o si el techo está blando o se desprende, porque puede haber una filtración o un problema de estructura." },
	],
	"cuantos-litros-trae-un-galon-de-pintura": [
		{ q: "¿Cuántos litros tiene un galón de pintura?", a: "Un galón estadounidense son 3,785 litros y uno británico, 4,546 litros." },
		{ q: "¿Cuántos m² pinta un galón?", a: "Con un rendimiento de 10 m²/L, unos 38 m² a una capa o unos 19 m² a dos capas." },
		{ q: "¿Cómo paso de galones a litros?", a: "Multiplica los galones por 3,785. Para pasar de litros a galones, divide entre 3,785." },
	],
	"cuantos-litros-de-pintura-necesito": [
		{ q: "¿Cuántos litros de pintura necesito para 50 m²?", a: "Unos 11 litros a dos capas en una pared normal (10 m²/L), con un 10 % de margen." },
		{ q: "¿Y para 100 m²?", a: "Unos 22 litros a dos capas con el mismo rendimiento." },
		{ q: "¿Qué fórmula uso para calcularlo?", a: "litros = (superficie ÷ rendimiento) × capas × 1,10. La superficie es la de pared que vas a pintar, sin puertas ni ventanas." },
	],
	"litros-de-pintura-para-20-m2": [
		{ q: "¿Cuántos litros de pintura necesito para 20 m²?", a: "Unos 4,5 litros a dos capas en una pared normal (10 m²/L), con un 10 % de margen." },
		{ q: "¿Y si la pared es de gotelé?", a: "Con 7 m²/L y dos capas, unos 6,5 litros." },
		{ q: "¿Qué bote compro?", a: "Un bote de 5 L es lo más cómodo para 20 m² a dos capas." },
	],
	"litros-de-pintura-para-60-m2": [
		{ q: "¿Cuántos litros de pintura necesito para 60 m²?", a: "Unos 11 litros a dos capas en pared lisa ya pintada (12 m²/L) y unos 13,5 litros en una pared normal (10 m²/L)." },
		{ q: "¿Cuánta pintura para 60 m² de gotelé?", a: "Unos 19 litros a dos capas, con 7 m²/L." },
		{ q: "¿Qué botes compro para 60 m²?", a: "Un bote de 15 L suele bastar, o uno de 10 L más otro de 4 L; con gotelé, uno de 20 L." },
	],
	"litros-de-pintura-para-80-m2": [
		{ q: "¿Cuántos litros de pintura necesito para 80 m²?", a: "Unos 15 litros a dos capas en pared lisa ya pintada (12 m²/L) y unos 18 litros en una pared normal (10 m²/L)." },
		{ q: "¿Cuánta pintura para 80 m² de gotelé?", a: "Unos 25,5 litros a dos capas, con 7 m²/L." },
		{ q: "¿Qué botes compro para 80 m²?", a: "Uno de 15 L más otro de 4 L, o uno de 20 L si quieres margen para retoques." },
	],
	"litros-de-pintura-para-120-m2": [
		{ q: "¿Cuántos litros de pintura necesito para 120 m²?", a: "Unos 22 litros a dos capas en pared lisa ya pintada (12 m²/L) y unos 26,5 litros en una pared normal (10 m²/L)." },
		{ q: "¿Cuánta pintura para 120 m² de gotelé?", a: "Unos 38 litros a dos capas, con 7 m²/L." },
		{ q: "¿Qué botes compro para 120 m²?", a: "Uno de 20 L más otro de 10 L, o dos de 15 L." },
	],
	"litros-de-pintura-para-un-piso-de-60-m2": [
		{ q: "¿Cuánta pintura necesito para un piso de 60 m²?", a: "Aproximadamente 32,5 litros para las paredes y 13,5 litros para los techos, a dos capas en pared lisa." },
		{ q: "¿Cómo se estima la superficie de paredes de un piso?", a: "Como referencia, unas 2,45 veces la superficie útil una vez descontadas puertas y ventanas." },
		{ q: "¿Cuántos botes tengo que comprar?", a: "Para las paredes, un bote de 20 L más uno de 15 L, o dos de 15 L; y uno de 15 L para los techos si usas otra pintura." },
	],
	"rendimiento-de-la-pintura-plastica-por-litro": [
		{ q: "¿Cuántos m² rinde un litro de pintura plástica?", a: "Entre 10 y 14 m² por litro en una pared lisa ya pintada, y entre 5 y 7 m² en gotelé o superficies porosas." },
		{ q: "¿Dónde veo el rendimiento exacto de mi pintura?", a: "En la etiqueta del bote o en la ficha técnica del fabricante. Es el dato definitivo." },
		{ q: "¿El rendimiento es por capa?", a: "Sí. El rendimiento indicado es por cada capa de pintura; para dos capas, necesitas el doble." },
	],
	"pintura-plastica-acrilica-y-vinilica-diferencias": [
		{ q: "¿La pintura plástica es al agua?", a: "Sí. En España, «pintura plástica» es el nombre habitual de la pintura al agua para paredes y techos." },
		{ q: "¿Qué diferencia hay entre pintura vinílica y acrílica?", a: "En general, la vinílica es más económica y de uso interior, y la acrílica es más resistente y lavable y se usa también en exterior." },
		{ q: "¿Qué pintura uso en cocina y baño?", a: "Una lavable con protección antimoho o antihumedad." },
	],
	"cuanto-cuesta-pintar-un-piso": [
		{ q: "¿Cuánto cuesta pintar un piso de 90 m²?", a: "Con pintor, entre 870 y 1.150 € aproximadamente con pintura blanca, según las estimaciones de Habitissimo y Cronoshare de 2026." },
		{ q: "¿Cuánto cobra un pintor por m²?", a: "Entre 10 y 14 € por m² pintado, con mano de obra y material incluidos, según esas mismas guías." },
		{ q: "¿Cómo calculo el gasto si pinto yo?", a: "Multiplica los litros que necesitas por el precio por litro del bote que elijas, y suma los útiles (rodillos, cinta y plásticos)." },
	],
};
