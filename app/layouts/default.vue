<script lang="ts" setup>

</script>

<template>
    <div>
        <BaseNavigation />
        <!-- bg-[#f5f7fb] -->
        <section class="relative bg-[#f5f7fb] overflow-hidden py-10 px-20">
            <!-- Background image as pseudo-element -->
            <div
                class="absolute inset-0 z-0"
                style="background-image: url('/hero.svg'); background-size: cover; background-position: center; opacity: 0.3;"
            ></div>

            <div
                class="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
                <!-- Kiri -->
                <div class="space-y-2 z-10">
                    <div class="flex items-start gap-4">
                        <!-- Angka besar -->
                        <span class="font-Rubik text-[85px] mt-2 font-extrabold text-abu">52%</span>

                        <!-- Teks di samping angka -->
                        <div class="mt-5">
                            <span
                                class="block text-[35px] font-Rubik font-extrabold text-abu"
                            >Warga adalah</span>
                            <span
                                class="font-Mansalva block text-[35px] font-extrabold text-blue-donker"
                            >Orang muda</span>
                        </div>
                    </div>

                    <!-- Subtitle kecil -->
                    <div
                        class="inline-flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-sm text-md font-semibold text-gray-700"
                    >
                        <Icon name="mdi:paw" class="w-5 h-5 text-blue-donker" />Partisipasi kita nentuin kualitas pemerintah
                    </div>
                </div>

                <!-- Kanan -->
                <div>
                    <h3 class="text-lg font-semibold text-abu mb-6">Apa yang bisa kita lakukan?</h3>
                    <!-- Wrapper untuk step -->
                    <div class="relative pl-12 space-y-8">
                        <!-- Vertical dashed line -->
                        <div
                            class="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-blue-200/70"
                        ></div>

                        <!-- Step 1 -->
                        <div class="relative flex items-start">
                            <!-- Number step -->
                            <div
                                class="absolute bottom-6 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white z-10"
                            >
                                <div
                                    class="flex items-center justify-center w-6 h-6 text-[13px] rounded-full bg-blue-donker text-white font-medium"
                                >1</div>
                            </div>

                            <!-- Card -->
                            <div
                                class="ml-8 flex items-center bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition w-full"
                            >
                                <img
                                    src="/a1.avif"
                                    alt="Pantau Janji"
                                    class="w-16 h-16 flex-shrink-0"
                                />
                                <div class="ml-4 flex-1">
                                    <h4 class="font-bold text-blue-donker">Pantau janjinya</h4>
                                    <p
                                        class="text-sm text-gray-500"
                                    >Nge-track misi, proker, quick wins yang dijanjiin Presiden</p>
                                </div>
                                <Icon name="mdi:chevron-right" class="w-6 h-6 text-gray-400" />
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="relative flex items-start">
                            <div
                                class="absolute bottom-6 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white z-10"
                            >
                                <div
                                    class="flex items-center justify-center w-6 h-6 text-[13px] rounded-full bg-blue-donker text-white font-medium"
                                >2</div>
                            </div>
                            <div
                                class="ml-8 flex items-center bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition w-full"
                            >
                                <img
                                    src="/a2.avif"
                                    alt="Pantau Kebijakan"
                                    class="w-16 h-16 flex-shrink-0"
                                />
                                <div class="ml-4 flex-1">
                                    <h4 class="font-bold text-blue-donker">Pantau kebijakannya</h4>
                                    <p
                                        class="text-sm text-gray-500"
                                    >Pelajari dokumennya, lalu beri masukan teknis dan pandanganmu</p>
                                </div>
                                <Icon name="mdi:chevron-right" class="w-6 h-6 text-gray-400" />
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="relative flex items-start">
                            <div
                                class="absolute bottom-6 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white z-10"
                            >
                                <div
                                    class="flex items-center justify-center w-6 h-6 text-[13px] rounded-full bg-blue-donker text-white font-medium"
                                >3</div>
                            </div>
                            <div
                                class="ml-8 flex items-center bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition w-full"
                            >
                                <img
                                    src="/a1.avif"
                                    alt="Pantau Pejabat"
                                    class="w-16 h-16 flex-shrink-0"
                                />
                                <div class="ml-4 flex-1">
                                    <h4 class="font-bold text-blue-donker">Pantau pejabatnya</h4>
                                    <p
                                        class="text-sm text-gray-500"
                                    >Cek siapa yang paling bertanggung jawab untuk masalah kamu</p>
                                </div>
                                <Icon name="mdi:chevron-right" class="w-6 h-6 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <slot />
    </div>
</template>
