<script lang="ts" setup>

</script>

<template>
    <!-- Footer Desktop -->
    <footer class="bg-blue-donker text-white py-10">
        <div class="max-w-6xl mx-auto space-y-10 py-6">
            <!-- Logo + Menu -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Logo -->
                <div>
                    <h2 class="text-3xl font-extrabold leading-tight flex items-center gap-2">
                        <img src="/logo-white.avif" alt="logo" class="w-64 h-full inline-block" />
                    </h2>
                </div>
            </div>

            <div class="grid grid-cols-2">
                <!-- Explore -->
                <div>
                    <h3 class="font-semibold mb-3">Explore</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <a href="#" class="hover:underline">Pantau Isu</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Pantau Kebijakan</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Bijak Wiki</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Tentang Kami</a>
                        </li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h3 class="font-semibold mb-3">Contact us</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <a
                                href="mailto:contact@bijakdemokrasi.id"
                                class="hover:underline"
                            >contact@bijakdemokrasi.id</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Instagram</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">X/Twitter</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">TikTok</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-white/30"></div>

            <!-- Bottom Info -->
            <div
                class="flex flex-col md:flex-row md:justify-between md:items-center text-gray-200"
            >
                <p class="max-w-lg text-md">
                    Bijak Memantau adalah sebuah gerakan independen, dan tidak terafiliasi
                    kandidat atau partai politik tertentu
                </p>
                <p class="text-right">Copyright © 2025 Bijak Memantau</p>
            </div>
        </div>
    </footer>
</template>