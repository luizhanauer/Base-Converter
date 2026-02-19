<template>
  <main class="min-h-screen bg-gray-950 py-16 px-4 flex flex-col items-center justify-center sm:justify-start">
    
    <div class="w-full max-w-lg bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/50 border border-gray-800/50 p-8 space-y-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-emerald-500/5 before:to-transparent before:pointer-events-none">
      
      <header class="text-center space-y-2 relative z-10">
        <h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-emerald-400 to-green-500">
          DevBase
        </h1>
        <p class="text-gray-400">Conversor numérico para desenvolvedores</p>
      </header>

      <div class="space-y-6 relative z-10">
        
        <div class="space-y-2">
          <label for="decimal" class="text-xs font-semibold text-emerald-400 uppercase tracking-wider ml-1">Decimal</label>
          <div class="relative group">
            <input 
              id="decimal" 
              type="text" 
              v-model="decimalValue" 
              @input="handleInput('decimal')"
              class="w-full h-14 pl-4 pr-24 bg-gray-950 border border-gray-800 rounded-xl text-white placeholder-gray-600 shadow-sm transition-all duration-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 group-hover:border-gray-700 font-mono"
              placeholder="Ex: 255"
            >
            <div class="absolute inset-y-0 right-2 flex items-center">
              <button 
                @click="copyToClipboard(decimalValue, 'decimal')" 
                :disabled="!decimalValue"
                class="h-10 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:bg-gray-700 text-white rounded-lg text-sm font-bold transition-colors duration-200 shadow-md shadow-emerald-900/30"
              >
                {{ copyStatus === 'decimal' ? 'Copiado!' : 'Copiar' }}
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <label for="hexadecimal" class="text-xs font-semibold text-emerald-400 uppercase tracking-wider ml-1">Hexadecimal</label>
          <div class="relative group">
            <input 
              id="hexadecimal" 
              type="text" 
              v-model="hexValue" 
              @input="handleInput('hexadecimal')"
              class="w-full h-14 pl-4 pr-24 bg-gray-950 border border-gray-800 rounded-xl text-white placeholder-gray-600 shadow-sm transition-all duration-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 group-hover:border-gray-700 font-mono uppercase"
              placeholder="Ex: FF"
            >
            <div class="absolute inset-y-0 right-2 flex items-center">
              <button 
                @click="copyToClipboard(hexValue, 'hexadecimal')" 
                :disabled="!hexValue"
                class="h-10 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:bg-gray-700 text-white rounded-lg text-sm font-bold transition-colors duration-200 shadow-md shadow-emerald-900/30"
              >
                {{ copyStatus === 'hexadecimal' ? 'Copiado!' : 'Copiar' }}
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <label for="binary" class="text-xs font-semibold text-emerald-400 uppercase tracking-wider ml-1">Binário</label>
          <div class="relative group">
            <input 
              id="binary" 
              type="text" 
              v-model="binValue" 
              @input="handleInput('binary')"
              class="w-full h-14 pl-4 pr-24 bg-gray-950 border border-gray-800 rounded-xl text-white placeholder-gray-600 shadow-sm transition-all duration-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 group-hover:border-gray-700 font-mono"
              placeholder="Ex: 11111111"
            >
            <div class="absolute inset-y-0 right-2 flex items-center">
              <button 
                @click="copyToClipboard(binValue, 'binary')" 
                :disabled="!binValue"
                class="h-10 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:bg-gray-700 text-white rounded-lg text-sm font-bold transition-colors duration-200 shadow-md shadow-emerald-900/30"
              >
                {{ copyStatus === 'binary' ? 'Copiado!' : 'Copiar' }}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <SiteFooter />

  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NumericValue } from './domain/NumericValue';
import SiteFooter from './components/SiteFooter.vue';

const decimalValue = ref('');
const hexValue = ref('');
const binValue = ref('');

const copyStatus = ref<string | null>(null);

const clearAll = (): void => {
    decimalValue.value = '';
    hexValue.value = '';
    binValue.value = '';
};

const updateFields = (numericObj: NumericValue, source: 'decimal' | 'hexadecimal' | 'binary'): void => {
    if (source !== 'decimal') decimalValue.value = numericObj.toDecimalString();
    if (source !== 'hexadecimal') hexValue.value = numericObj.toHexadecimalString();
    if (source !== 'binary') binValue.value = numericObj.toBinaryString();
};

const handleInput = (source: 'decimal' | 'hexadecimal' | 'binary'): void => {
    let rawValue = '';

    if (source === 'decimal') rawValue = decimalValue.value;
    if (source === 'hexadecimal') rawValue = hexValue.value;
    if (source === 'binary') rawValue = binValue.value;

    if (!rawValue.trim()) {
        clearAll();
        return;
    }

    try {
        let numericObj: NumericValue;

        if (source === 'decimal') numericObj = NumericValue.fromDecimal(rawValue);
        else if (source === 'hexadecimal') numericObj = NumericValue.fromHexadecimal(rawValue);
        else numericObj = NumericValue.fromBinary(rawValue);

        updateFields(numericObj, source);
    } catch {
        // Ignora formatações temporariamente inválidas durante a digitação
    }
};

const copyToClipboard = async (text: string, identifier: string): Promise<void> => {
    if (!text) return;

    try {
        await navigator.clipboard.writeText(text);
        copyStatus.value = identifier;
        setTimeout(() => {
            if (copyStatus.value === identifier) copyStatus.value = null;
        }, 2000);
    } catch (err) {
        console.error('Falha ao copiar para a área de transferência', err);
    }
};
</script>