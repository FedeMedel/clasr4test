module.exports = {

    sumar(y, z){

        if(isNaN(y) || isNaN(z)) {

            throw new Error("ambos argumentos deben ser numericos");
        }
        return y + z
    }

}




