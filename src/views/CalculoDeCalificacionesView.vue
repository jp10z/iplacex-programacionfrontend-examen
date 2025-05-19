<script setup>
import { BContainer, BRow, BCol, BFormInput, BButton, BForm, BFormText } from 'bootstrap-vue-next'; 
</script>

<script>
    export default {
        // Defino los valores de cada campo
        data() {
            return {
                nota1: "",
                nota2: "",
                nota3: "",
                asistencia: "",
                promedio: 0.0,
                aprobado: false,
                validacionError: false,
            };
        },
        methods: {
            calcularPromedio(event){
                // Método para validar y calcular el promedio
                event.preventDefault()
                const form = this.$refs.formulario;
                if (!form.checkValidity()) {
                    this.validacionError = true
                    form.reportValidity()
                    return
                }
                // Si la validación pasa
                this.validacionError = false
                const nota1Num = parseFloat(this.nota1)
                const nota2Num = parseFloat(this.nota2)
                const nota3Num = parseFloat(this.nota3)
                const asistenciaNum = parseFloat(this.asistencia)
                this.promedio = (nota1Num + nota2Num + nota3Num) / 3
                this.aprobado = this.promedio >= 40 && asistenciaNum >= 80
            },
        }
    };
</script>

<template>
  <main>
      <BContainer class="mt-2 contenedor">
        <form ref="formulario">
            <BRow class="text-center">
                <BCol>
                    <label for="input-nota1">Nota 1</label>
                    <BFormInput id="input-nota1" v-model="nota1" placeholder="Nota 1" type="number" min="10" max="100" required  />
                </BCol>
            </BRow>
            <BRow class="text-center">
                <BCol>
                    <label for="input-nota2">Nota 2</label>
                    <BFormInput id="input-nota2" v-model="nota2" placeholder="Nota 2" type="number" min="10" max="100" required  />
                </BCol>
            </BRow>
            <BRow class="text-center">
                <BCol>
                    <label for="input-nota3">Nota 3</label>
                    <BFormInput id="input-nota3" v-model="nota3" placeholder="Nota 3" type="number" min="10" max="100" required  />
                </BCol>
            </BRow>
            <BRow class="text-center">
                <BCol>
                    <label for="input-asistencia">Asistencia %</label>
                    <BFormInput id="input-asistencia" v-model="asistencia" placeholder="Asistencia" type="number" min="0" max="100" required  />
                </BCol>
            </BRow>
            <BRow class="text-center">
                <BCol>
                    <BButton type="button" @click="calcularPromedio" variant="primary" class="mt-2">Calcular</BButton>
                </BCol>
            </BRow>
            <BRow v-if="validacionError" class="text-center">
                <BCol>
                    <p class="mensajeError">Por favor, ingrese valores válidos para las notas y la asistencia</p>
                </BCol>
            </BRow>
            <BRow v-if="!validacionError && promedio > 0" class="text-center mt-2">
                <BCol>
                    <p>El promedio es: {{ promedio.toFixed(2) }}</p>
                    <p>Tu estado es: {{ aprobado ? "Aprobado" : "Reprobado" }}</p>
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
