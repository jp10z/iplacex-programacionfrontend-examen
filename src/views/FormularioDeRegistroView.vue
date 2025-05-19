<script setup>
import { BContainer, BRow, BCol, BFormInput, BButton, BForm, BFormText } from 'bootstrap-vue-next'; 
</script>

<script>
    export default {
        // Defino los valores de cada campo
        data() {
            return {
                nombre: "",
                correo: "",
                contrasenia: "",
                contraseniaRepetir: "",
                nombreValidacionError: "",
                correoValidacionError: "",
                contraseniaValidacionError: "",
                contraseniaRepetirValidacionError: "",
            };
        },
        methods: {
            enviarFormulario(event){
                // método para validar y simular el envio de formulario
                let validacionOk = true
                // reiniciar los mensajes de error
                this.nombreValidacionError = ""
                this.correoValidacionError = ""
                this.contraseniaValidacionError = ""
                this.contraseniaRepetirValidacionError = ""


                event.preventDefault()
                if (this.nombre.trim() === ""){
                    validacionOk = false
                    this.nombreValidacionError = "El campo nombre es requerido"
                }
                if (this.correo.trim() === ""){
                    validacionOk = false
                    this.correoValidacionError = "El campo correo es requerido"
                }
                else if ( !/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/.test(this.correo)){
                    validacionOk = false
                    this.correoValidacionError = "El correo no es válido"
                }
                if (this.contrasenia.trim() === ""){
                    validacionOk = false
                    this.contraseniaValidacionError = "El campo contraseña es requerido"
                }
                if (this.contraseniaRepetir.trim() === ""){
                    validacionOk = false
                    this.contraseniaRepetirValidacionError = "El campo repetir contraseña es requerido"
                }
                if (this.contraseniaRepetir && this.contrasenia !== this.contraseniaRepetir) {
                    validacionOk = false
                    this.contraseniaRepetirValidacionError = "Las contraseñas no coinciden"
                }
                if (!validacionOk) {
                    return;
                }
                alert("El registro se ha realizado correctamente")
            }
        }
    };
</script>

<template>
  <main>
      <BContainer class="mt-2 contenedor">
        <form @submit="enviarFormulario" ref="formulario">
            <BRow class="text-center">
                <BCol>
                    <label for="input-nombre">Nombre</label>
                    <BFormInput id="input-nombre" v-model="nombre" />
                    <p v-if="nombreValidacionError" class="mensajeError">{{nombreValidacionError}}</p>
                </BCol>
            </BRow>
            <BRow class="text-center">
                <BCol>
                    <label for="input-correo">Correo</label>
                    <BFormInput id="input-correo" v-model="correo" />
                    <p v-if="correoValidacionError" class="mensajeError">{{correoValidacionError}}</p>
                </BCol>
            </BRow>
            <BRow class="text-center">
                <BCol>
                    <label for="input-contrasenia">Contraseña</label>
                    <BFormInput id="input-contrasenia" v-model="contrasenia" type="password" />
                    <p v-if="contraseniaValidacionError" class="mensajeError">{{contraseniaValidacionError}}</p>
                </BCol>
            </BRow>
            <BRow class="text-center">
                <BCol>
                    <label for="input-contrasenia-repetir">Repetir contraseña</label>
                    <BFormInput id="input-contrasenia-repetir" v-model="contraseniaRepetir" type="password" />
                    <p v-if="contraseniaRepetirValidacionError" class="mensajeError">{{contraseniaRepetirValidacionError}}</p>
                </BCol>
            </BRow>
            <BRow>
                <BCol>
                    <BButton type="submit" variant="success" class="mt-3">Enviar</BButton>
                </BCol>
            </BRow>
        </form>
      </BContainer>
  </main>
</template>
<style scoped>
    label {
        margin-top: 8px;
        margin-bottom: 4px;
    }
    .contenedor {
        max-width: 600px;
    }
    .mensajeError {
        color: red;
    }
</style>
