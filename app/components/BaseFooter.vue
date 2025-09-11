<script lang="ts" setup>

</script>

<template>
    <!-- Footer Desktop -->
    <footer class="bg-blue-donker text-white py-10 hidden xl:block">
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
            <div class="flex flex-col md:flex-row md:justify-between md:items-center text-gray-200">
                <p class="max-w-lg text-md">
                    Bijak Memantau adalah sebuah gerakan independen, dan tidak terafiliasi
                    kandidat atau partai politik tertentu
                </p>
                <p class="text-right">Copyright © 2025 Bijak Memantau</p>
            </div>
        </div>
    </footer>

    <!-- Footer Mobile -->
    <footer class="block lg:hidden bg-gray-50 py-8 px-6">
        <div class="text-center space-y-6">
            <!-- Logo/Title -->
            <div>
                <h3 class="text-sm font-semibold text-gray-800 mb-4">Bijak Memantau</h3>
            </div>

            <!-- Social Media Icons -->
            <div class="flex justify-center items-center space-x-4">
                <!-- Instagram -->

                <a
                    href="#"
                    class="w-8 h-8 bg-blue-light rounded-lg flex items-center justify-center text-white transition-colors"
                >
                    <svg class="w-5 h-5" fill="#131378" viewBox="0 0 24 24">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        />
                    </svg>
                </a>

                <!-- X/Twitter -->

                <a
                    href="#"
                    class="w-8 h-8 bg-blue-light rounded-lg flex items-center justify-center text-white transition-colors"
                >
                    <svg class="w-4 h-4" fill="#131378" viewBox="0 0 24 24">
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                    </svg>
                </a>

                <!-- TikTok -->

                <a
                    href="#"
                    class="w-8 h-8 bg-blue-light rounded-lg flex items-center justify-center text-white transition-colors"
                >
                    <svg class="w-4 h-4" fill="#131378" viewBox="0 0 24 24">
                        <path
                            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                        />
                    </svg>
                </a>
            </div>

            <!-- Description Text -->
            <div class="px-4">
                <p
                    class="text-xs text-gray-600 leading-relaxed"
                >Bijak Memantau adalah gerakan independen dan tidak terafiliasi kandidat atau partai politik tertentu. Baca lebih lanjut tentang kami di sini.</p>
            </div>

            <!-- Copyright -->
            <div class="pt-2 border-t border-gray-200 mx-4">
                <p class="text-xs text-gray-500">Copyright © 2025 Bijak Memantau</p>
            </div>
        </div>
    </footer>
</template>