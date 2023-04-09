<template>
  <div class="w-full h-full bg-white px-[60px] pt-[40px] text-[#291B25] pb-10 flex flex-col justify-between">
    <img src="/bg.png" class="absolute right-0 bottom-0 w-[700px]" />
    <div class="relative flex flex-row items-center">
      <!-- TODO: faire une frame autour -->
      <img src="/logo.png" class="h-[270px]" />
      <div class="ml-[80px] flex flex-col items-start">
        <div class="px-3 py-2 rounded-md bg-red-100 text-red-700">
          Catégorie
        </div>
        <h1 class="mt-4 text-[72px] font-bold">
          Le Classement des Associations
        </h1>
      </div>
    </div>
    <div class="relative flex flex-row justify-between text-xl">
      <div class="flex flex-row">
        <Icon name="ph:buildings-light" class="w-7 h-7" />
        <span class="ml-3">Aneo Consulting</span>
      </div>
      <div class="flex flex-row">
        <Icon name="ph:money-light" class="w-7 h-7" />
        <span class="ml-3">Budget</span>
      </div>    
      <div class="flex flex-row">
        <Icon name="ph:users-three-light" class="w-7 h-7" />
        <span class="ml-3">Membres</span>
      </div>
    </div>
    <p class="relative text-2xl">
      <!-- TODO: cut text which are too long -->
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl aliquet, nec lacinia nisl aliquet. Sed euismod nunc in nisl aliquet, nec lacinia nisl aliquet.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl aliquet, nec lacinia nisl aliquet. Sed euismod nunc in nisl aliquet, nec lacinia nisl aliquet.
    </p>
    <div class="relative flex flex-row items-center text-[#ff6944] text-[28px]" style="justify-content: space-around;">  
      <div class="flex flex-row items-center">
        <Icon name="mdi:linkedin" class="w-10 h-10"/>
        <span class="ml-3">linkedIn</span>
      </div>
      <div class="flex flex-row items-center">
        <Icon name="mdi:instagram" class="w-10 h-10"/>
        <span class="ml-3">Instagram</span>
      </div>
    </div>
  </div>
</template>
