/**
 * Crea un type llamado ConexionBD que contenga url (string) y puerto (número)
 * Crea otro type llamado Credenciales con usuario (string) y password (string)
 * Usa el operador de intersección (&) para crear un nuevo type llamado ConfiguracionServidor 
 *  que combine ambas estructuras, y declara una variable con él.
 */

type ConexionBD = {
    url: string;
    puerto: number;
}

type Credenciales = {
    usuario: string;
    password: string;
}

type ConfiguracionServidor = ConexionBD & Credenciales;

const config: ConfiguracionServidor = {
    url: "Localhost",
    puerto:5432,
    usuario:"adrian",
    password: "123456"
}