<script setup lang="ts">

</script>

<template>
    <header class="py-3 bg-white shadow-sm">
        <nav class="flex items-center justify-between max-w-full mx-auto px-4">
            <!-- Logo (hanya gambar, tanpa teks tambahan) -->
            <NuxtLink to="/" class="flex items-center">
                <NuxtImg
                    width="120"
                    height="40"
                    densities="x1"
                    format="webp"
                    class="h-8 w-auto"
                    src="/logo.svg"
                    alt="Bijak Memantau"
                />
            </NuxtLink>

            <!-- Menu Navigasi (center) -->
            <ul
                class="hidden md:flex font-semibold text-neutral-900/50 flex gap-6 text-gray-600 text-sm font-medium items-center ml-auto"
            >
                <li>
                    <NuxtLink to="/pantau-janji" class="flex items-center gap-1 hover:text-black">
                        <Icon name="material-symbols:search" class="w-5 h-5" />Pantau Janji
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/pantau-ruu" class="flex items-center gap-1 hover:text-black">
                        <Icon name="material-symbols:menu-book" class="w-5 h-5" />Pantau RUU
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/pantau-pejabat" class="flex items-center gap-1 hover:text-black">
                        <Icon name="material-symbols:groups" class="w-5 h-5" />Pantau Pejabat
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/bijak-wiki" class="flex items-center gap-1 hover:text-black">
                        <Icon name="material-symbols:public" class="w-5 h-5" />Bijak Wiki
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tentang" class="flex items-center gap-1 hover:text-black">
                        <Icon name="material-symbols:info" class="w-5 h-5" />Tentang Kami
                    </NuxtLink>
                </li>
            </ul>

            <!-- Tombol Join Discord (right) -->
            <NuxtLink
                to="https://discord.gg/xxx"
                class="hidden md:inline-block ml-6 px-6 py-2 rounded-full text-sm text-white font-semibold bg-gradient-to-r from-blue-donker via-blue-donker to-ungu hover:opacity-90"
            >Join Discord Bijak</NuxtLink>

            <!-- Mobile Menu Button (hamburger) -->
            <NuxtLink class="block md:hidden ml-auto text-gray-700 hover:text-black">
                <Icon name="material-symbols:info" class="w-7 h-7 bg-blue-donker" />
            </NuxtLink>
        </nav>
        <!-- Bottom Nav (mobile only) -->
        <nav
            class="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center py-2 md:hidden z-50"
        >
            <NuxtLink
                to="/"
                class="flex flex-col items-center text-xs text-neutral-900/50 hover:text-black"
            >
                <Icon name="material-symbols:home" class="w-6 h-6" />Home
            </NuxtLink>
            <NuxtLink
                to="/pantau-janji"
                class="flex flex-col items-center text-xs text-neutral-900/50 hover:text-black"
            >
                <Icon name="material-symbols:search" class="w-6 h-6" />Janji
            </NuxtLink>
            <NuxtLink
                to="/pantau-ruu"
                class="flex flex-col items-center text-xs text-neutral-900/50 hover:text-black"
            >
                <Icon name="material-symbols:menu-book" class="w-6 h-6" />RUU
            </NuxtLink>
            <NuxtLink
                to="/pantau-pejabat"
                class="flex flex-col items-center text-xs text-neutral-900/50 hover:text-black"
            >
                <Icon name="material-symbols:groups" class="w-6 h-6" />Pejabat
            </NuxtLink>
            <NuxtLink
                to="/bijak-wiki"
                class="flex flex-col items-center text-xs text-neutral-900/50 hover:text-black"
            >
                <Icon name="material-symbols:public" class="w-6 h-6" />Wiki
            </NuxtLink>
        </nav>
    </header>
</template>
