export type Guia = { slug: string; titulo: string; corto: string; tipo: "Cálculo" | "Por estancia" | "Consejos"; grupo?: string };
export const guias: Guia[] = [
	{ slug: "cuantos-litros-de-pintura-por-m2", titulo: "¿Cuántos litros de pintura por m²?", corto: "Litros por m²", tipo: "Cálculo" , grupo: "Dudas generales" },
	{ slug: "litros-de-pintura-para-30-m2", titulo: "¿Cuántos litros de pintura para 30 m²?", corto: "Pintura para 30 m²", tipo: "Cálculo" , grupo: "Paredes" },
	{ slug: "litros-de-pintura-para-50-m2", titulo: "¿Cuántos litros de pintura para 50 m²?", corto: "Pintura para 50 m²", tipo: "Cálculo" , grupo: "Paredes" },
	{ slug: "litros-de-pintura-para-100-m2", titulo: "¿Cuántos litros de pintura para 100 m²?", corto: "Pintura para 100 m²", tipo: "Cálculo" , grupo: "Paredes" },
	{ slug: "cuantos-metros-pinta-un-bote-de-pintura", titulo: "¿Cuántos m² pinta un bote de pintura?", corto: "Cuántos m² pinta un bote", tipo: "Cálculo" , grupo: "Dudas generales" },
	{ slug: "cuanta-pintura-para-una-habitacion", titulo: "¿Cuánta pintura para una habitación?", corto: "Una habitación", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "cuanta-pintura-para-un-dormitorio", titulo: "¿Cuánta pintura para un dormitorio?", corto: "Un dormitorio", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "litros-de-pintura-para-un-salon", titulo: "¿Cuánta pintura para un salón?", corto: "Un salón", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "cuanta-pintura-para-un-pasillo", titulo: "¿Cuánta pintura para un pasillo?", corto: "Un pasillo", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "cuanta-pintura-para-una-pared", titulo: "¿Cuánta pintura para una pared?", corto: "Una pared", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "cuanta-pintura-para-un-techo", titulo: "¿Cuánta pintura para el techo?", corto: "El techo", tipo: "Por estancia" , grupo: "Techo" },
	{ slug: "litros-de-pintura-para-un-piso-de-90-m2", titulo: "¿Cuánta pintura para un piso de 90 m²?", corto: "Un piso de 90 m²", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "cuanta-pintura-para-una-fachada", titulo: "¿Cuánta pintura para una fachada?", corto: "Una fachada", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "pintura-para-cocina-y-bano", titulo: "Pintura para cocina y baño", corto: "Cocina y baño", tipo: "Por estancia" , grupo: "Paredes" },
	{ slug: "cuanta-pintura-para-gotele", titulo: "¿Cuánta pintura para gotelé?", corto: "Gotelé", tipo: "Consejos" , grupo: "Paredes" },
	{ slug: "cuantas-manos-de-pintura-dar", titulo: "¿Cuántas manos de pintura dar?", corto: "Cuántas manos dar", tipo: "Consejos" , grupo: "Dudas generales" },
	{ slug: "pintar-sobre-pared-oscura", titulo: "¿Cómo pintar una pared oscura de claro?", corto: "Pared oscura a claro", tipo: "Consejos" , grupo: "Paredes" },
	{ slug: "cuanto-tarda-en-secar-la-pintura", titulo: "¿Cuánto tarda en secar la pintura?", corto: "Tiempo de secado", tipo: "Consejos" , grupo: "Dudas generales" },
	{ slug: "cuanta-pintura-para-el-techo-de-un-salon", titulo: "¿Cuánta pintura necesito para el techo de un salón?", corto: "Techo de un salón", tipo: "Por estancia", grupo: "Techo" },
	{ slug: "como-pintar-un-techo-sin-marcas", titulo: "¿Cómo pintar un techo sin marcas?", corto: "Pintar sin marcas", tipo: "Consejos", grupo: "Techo" },
	{ slug: "pintura-para-techo-con-manchas-de-humedad", titulo: "¿Cómo pintar un techo con manchas de humedad?", corto: "Techo con humedad", tipo: "Consejos", grupo: "Techo" },
];

export const grupos = ["Paredes", "Techo", "Dudas generales"];
