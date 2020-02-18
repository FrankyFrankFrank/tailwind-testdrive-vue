<template>
  <div class="flex items-center justify-center md:justify-end h-screen bg-yellow-400">
    <form class="flex items-start md:mx-64">
      <div class="border-red-500 border-2 pt-32 w-64 bg-yellow-400 transform skew-y-6 shadow">
        <h1 class="text-xs text-red-500 font-black uppercase p-1">Please Log In</h1>
        <input
          class="w-full px-1 py-5 uppercase tracking-widest text-lg bg-yellow-400 placeholder-yellow-500 focus:bg-red-500 text-red-500 focus:text-yellow-400 transition-colors border-b-2 border-red-500 duration-500"
          placeholder="Name"
          type="text"
        />
        <input
          class="w-full px-1 py-5 uppercase tracking-widest text-lg bg-yellow-400 placeholder-yellow-500 focus:bg-red-500 text-red-500 focus:text-yellow-400 border-b-2 border-red-500"
          type="password"
          placeholder="Password"
        />
        <input
          type="submit"
          class="cursor-pointer w-full px-1 py-5 bg-red-500 uppercase text-center text-yellow-400 font-bold"
        />
        <p class="p-4 text-center text-xs text-red-500 uppercase leading-tight">By clicking submit you agree to the terms of service.<br />Spooky stuff.</p>
      </div>
      <div class="pr-3 pl-2 py-1 bg-red-500 hover:bg-yellow-400 uppercase text-center text-yellow-400 hover:text-red-500 border-r-2 border-t-2 border-b-2 border-transparent hover:border-red-500 font-bold transform -skew-y-6 translate-y-8 rounded-r-lg cursor-pointer">
        ?
      </div>
    </form>
  </div>
</template>

