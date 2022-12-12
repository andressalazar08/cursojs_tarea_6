/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const compras=['jabón', "Shampoo", "Arepas"]

compras.push("Aceite de girasol")
console.log(compras);
compras.pop()
console.log(compras);
var peliculas=[
    {titulo:"Avatar",director:"James Cameron",fecha:2007},
    {titulo:"La vida es bella",director:"Paul Newman",fecha:2000},
    {titulo:"Resident Evil",director:"Andrés Salazar",fecha:2021}
]

const peliculasfiltradas=peliculas.filter(objeto=>objeto.fecha>2010);
console.log(peliculasfiltradas);

const directores=peliculas.map(dato=>dato.director)
console.log(directores);

const titulos=peliculas.map(dato=>dato.titulo)
console.log(titulos);

const directores_y_titulos=directores.concat(titulos)
console.log(directores_y_titulos);

const otro_direc_y_titulos= [...directores,...titulos]
console.log(otro_direc_y_titulos);