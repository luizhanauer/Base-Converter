<template>
  <div class="mt-16 flex flex-col items-center text-center gap-8 w-full max-w-md mx-auto">
    
    <div class="space-y-4 flex flex-col items-center">
      <p class="text-gray-400 text-sm leading-relaxed">
        Se você gostou do meu trabalho e quer me agradecer,<br> 
        você pode me pagar um café :)
      </p>
      <a 
        href="https://www.paypal.com/donate/?hosted_button_id=SFR785YEYHC4E" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block transition-transform hover:scale-105 active:scale-95"
      >
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
          alt="Buy Me A Coffee" 
          class="h-12 w-auto rounded-md shadow-lg shadow-emerald-900/20"
        >
      </a>
    </div>

    <footer class="w-full pt-6 border-t border-gray-800 space-y-2 text-sm text-gray-500">
      <p>
        Desenvolvido com 💚 por 
        <a href="https://github.com/luizhanauer" target="_blank" class="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200">
          Luiz Hanauer
        </a>
      </p>
      <p>
        <a href="https://github.com/luizhanauer/proton-manager" target="_blank" class="hover:text-emerald-400 transition-colors duration-200">
          Ver código no GitHub
        </a>
      </p>
    </footer>

  </div>
</template>

<script setup lang="ts">
// Componente puramente visual
</script>