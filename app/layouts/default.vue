<script lang="ts" setup>

const cards = [
    {
        icon: "📢",
        title: "Bersuara di media sosial",
        desc: "Kamu bisa mulai dengan memanfaatkan media sosial sebagai ruang untuk menyuarakan isu-isu yang kamu pedulikan.",
        cta: "Ikut campaign Bijak →",
        link: "#"
    },
    {
        icon: "✊",
        title: "Ikut aksi & protes damai",
        desc: "Kamu bisa mulai dengan turun ke jalan dan ikut serta dalam aksi damai untuk menyuarakan sikapmu terhadap isu.",
        cta: "Cari info terupdate →",
        link: "#"
    },
    {
        icon: "💬",
        title: "Sampaikan aspirasi",
        desc: "Kamu bisa mulai dengan menyampaikan pendapatmu atau bergabung dengan komunitas di Discord.",
        cta: "Join Discord Bijak →",
        link: "#"
    }
]

</script>

<template>
    <div>
        <BaseNavigation />

        <!-- Hero Desktop -->
        <section class="relative bg-[#f5f7fb] overflow-hidden py-10 px-20 hidden md:flex">
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

        <!-- Hero Mobile -->
        <section class="relative bg-blue-donker text-center lg:hidden">
            <!-- Bagian atas background -->
            <div
                class="relative bg-blue-donker h-[150px] px-4 pt-4 flex justify-end items-start overflow-hidden"
            >
                <!-- Background map layer -->
                <div
                    class="absolute inset-0 z-0"
                    style="background-image: url('/hero.svg'); background-size: cover; background-position: center; opacity: 0.3;"
                ></div>

                <!-- Icon info (kanan atas) -->
                <!-- <div
                    class="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-donker"
                >
                    <Icon name="mdi:information-outline" class="w-5 h-5" />
                </div>-->

                <!-- Logo floating (di tengah batas putih & donker) -->
                <img
                    src="/logo.svg"
                    alt="Logo"
                    class="absolute left-1/2 bottom-[25px] bg-white rounded-full px-3 transform -translate-x-1/2 z-20 h-12"
                />
            </div>

            <!-- Box putih -->
            <div class="relative -mt-12 bg-white rounded-t-[50px] px-6 py-4">
                <!-- Angka & Teks -->
                <div class="flex flex-col items-center space-y-2">
                    <div class="flex items-start gap-4">
                        <!-- Angka besar -->
                        <span class="font-Rubik text-[45px] mt-4 font-extrabold text-abu">52%</span>

                        <!-- Teks di samping angka -->
                        <div class="mt-5">
                            <span
                                class="block text-[20px] font-Rubik font-extrabold text-abu"
                            >Warga adalah</span>
                            <span
                                class="font-Mansalva block text-[22px] font-extrabold text-blue-donker"
                            >Orang muda</span>
                        </div>
                    </div>
                </div>

                <!-- Subtitle -->
                <div
                    class="mt-2 inline-flex items-center gap-2 px-4 py-3 bg-[#f5f7fb] rounded-xl text-sm font-semibold text-gray-700"
                >
                    <Icon name="mdi:paw" class="w-5 h-5 text-blue-donker" />Partisipasi kita nentuin kualitas pemerintah
                </div>
            </div>
        </section>

        <!-- Section Category -->
        <section class="max-w-6xl mx-auto px-6 py-8">
            <!-- Judul -->
            <div class="mb-4">
                <h2 class="text-xl font-bold text-abu">Pantau Janji</h2>
                <p class="text-gray-500 text-sm">8 kelompok janji pilihan Bijak Memantau</p>
            </div>

            <!-- Tabs kategori -->
            <div class="flex gap-2 mb-6 overflow-x-auto whitespace-nowrap">
                <button
                    class="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >Pendidikan</button>
                <button
                    class="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >Kesehatan</button>
                <button
                    class="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >Ekonomi</button>
                <button
                    class="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >Infrastruktur</button>
                <button
                    class="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >Penegakan Hukum</button>
                <button
                    class="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >Lingkungan</button>
                <button
                    class="px-4 py-2 rounded-full bg-blue-light text-blue-donker font-bold text-sm"
                >Gender & Inklusi</button>
                <button
                    class="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >Olahraga & Ekonomi Kreatif</button>
            </div>

            <!-- Card list scroll horizontal -->
            <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                <!-- Card 1 -->
                <div
                    class="flex-shrink-0 w-[290px] h-auto relative rounded-xl overflow-hidden flex flex-col"
                >
                    <!-- Background image -->
                    <img
                        src="/c1.avif"
                        alt="bg"
                        class="absolute inset-0 w-full h-full object-cover"
                    />

                    <!-- Overlay biar teks kontras -->
                    <div class="absolute inset-0 bg-black/50"></div>

                    <!-- Konten -->
                    <div class="relative z-10 p-4 flex flex-col flex-1 text-white">
                        <!-- Judul -->
                        <h3
                            class="font-bold line-clamp-2 flex-1"
                        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum.</h3>

                        <!-- Button (selalu di bawah, width sesuai konten) -->
                        <div class="mt-8">
                            <button
                                class="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mt-auto self-start"
                            >Baca sekarang</button>
                        </div>
                    </div>
                </div>
                <!-- Card 2 -->
                <div
                    class="flex-shrink-0 w-[290px] h-auto relative rounded-xl overflow-hidden flex flex-col"
                >
                    <!-- Background image -->
                    <img
                        src="/c2.avif"
                        alt="bg"
                        class="absolute inset-0 w-full h-full object-cover"
                    />

                    <!-- Overlay biar teks kontras -->
                    <div class="absolute inset-0 bg-black/50"></div>

                    <!-- Konten -->
                    <div class="relative z-10 p-4 flex flex-col flex-1 text-white">
                        <!-- Judul -->
                        <h3
                            class="font-bold line-clamp-2 flex-1"
                        >Bangun infrastruktur dan perluas layanan...</h3>

                        <!-- Button (selalu di bawah, width sesuai konten) -->
                        <div class="mt-8">
                            <button
                                class="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mt-auto self-start"
                            >Baca sekarang</button>
                        </div>
                    </div>
                </div>
                <!-- Card 3 -->
                <div
                    class="flex-shrink-0 w-[290px] h-auto relative rounded-xl overflow-hidden flex flex-col"
                >
                    <!-- Background image -->
                    <img
                        src="/c3.avif"
                        alt="bg"
                        class="absolute inset-0 w-full h-full object-cover"
                    />

                    <!-- Overlay biar teks kontras -->
                    <div class="absolute inset-0 bg-black/50"></div>

                    <!-- Konten -->
                    <div class="relative z-10 p-4 flex flex-col flex-1 text-white">
                        <!-- Judul -->
                        <h3
                            class="font-bold line-clamp-2 flex-1"
                        >Bangun infrastruktur dan perluas layanan...</h3>

                        <!-- Button (selalu di bawah, width sesuai konten) -->
                        <div class="mt-8">
                            <button
                                class="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mt-auto self-start"
                            >Baca sekarang</button>
                        </div>
                    </div>
                </div>
                <!-- Card 4 -->
                <div
                    class="flex-shrink-0 w-[290px] h-auto relative rounded-xl overflow-hidden flex flex-col"
                >
                    <!-- Background image -->
                    <img
                        src="/c4.avif"
                        alt="bg"
                        class="absolute inset-0 w-full h-full object-cover"
                    />

                    <!-- Overlay biar teks kontras -->
                    <div class="absolute inset-0 bg-black/50"></div>

                    <!-- Konten -->
                    <div class="relative z-10 p-4 flex flex-col flex-1 text-white">
                        <!-- Judul -->
                        <h3
                            class="font-bold line-clamp-2 flex-1"
                        >Bangun infrastruktur dan perluas layanan...</h3>

                        <!-- Button (selalu di bawah, width sesuai konten) -->
                        <div class="mt-8">
                            <button
                                class="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mt-auto self-start"
                            >Baca sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-6 mb-10 lg:hidden">
            <!-- Kanan -->
            <div>
                <h3 class="text-lg font-semibold text-abu mb-6">Apa yang bisa kita lakukan?</h3>
                <!-- Wrapper untuk step -->
                <div class="relative pl-6 space-y-8">
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
                            <img src="/a1.avif" alt="Pantau Janji" class="w-16 h-16 flex-shrink-0" />
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
        </section>

        <!-- Section Participation Desktop -->
        <section class="max-w-6xl mx-auto px-6 py-4 relative mt-5 hidden md:flex">
            <div
                class="bg-gradient-to-r from-blue-donker to-indigo-700 max-h-[300px] p-8 rounded-[30px] relative overflow-hidden"
            >
                <!-- Heading -->
                <div class="mb-8 text-center md:text-right mr-[270px]">
                    <h2 class="text-white text-xl md:text-1xl font-bold">
                        Gimana caranya mulai
                        <span
                            class="font-Rubik bg-gradient-to-r from-blue-light to-white text-blue-donker font-extrabold px-3 py-2 rounded-xl shadow-[4px_6px_0px_0px_rgba(0,0,0,0.25)] inline-block transform -rotate-3 ml-1.5"
                        >berpartisipasi?</span>
                    </h2>
                </div>

                <!-- Image Card Left (absolute bawah kiri) -->
                <div class="hidden md:block absolute -bottom-[70px] -left-10 z-0">
                    <img src="/c5.avif" alt="Ilustrasi diskusi" class="w-auto h-[300px]" />
                </div>

                <!-- Scrollable Cards (di atas image) -->
                <div class="relative z-10 overflow-x-auto ml-[400px]">
                    <div class="flex gap-4 pb-4 mb-4">
                        <!-- Card Item -->
                        <div
                            v-for="(item, index) in cards"
                            :key="index"
                            class="flex-shrink-0 w-[350px] bg-white rounded-xl shadow-md p-4"
                        >
                            <div class="flex items-center gap-2 mb-3">
                                <span v-html="item.icon" class="text-blue-600 text-md"></span>
                                <h3 class="text-md font-semibold">{{ item.title }}</h3>
                            </div>
                            <p class="text-gray-600 mb-4 text-sm">{{ item.desc }}</p>
                            <a
                                :href="item.link"
                                class="text-blue-donker text-xs font-bold hover:underline"
                            >{{ item.cta }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Participation Mobile -->
        <section class="relative lg:hidden">
            <!-- Gradient Header -->
            <div
                class="mb-4 bg-gradient-to-b from-blue-donker to-indigo-600 rounded-b-[30px] pt-10 pb-32 flex flex-col justify-center items-center text-center relative z-0"
            >
                <h2 class="text-white text-xl font-bold flex flex-col items-center">
                    Gimana caranya mulai
                    <span
                        class="font-Rubik mt-3 bg-gradient-to-r from-blue-light to-white text-blue-donker font-extrabold px-3 py-2 rounded-xl shadow-[4px_6px_0px_0px_rgba(0,0,0,0.25)] inline-block transform -rotate-2 ml-1.5"
                    >berpartisipasi?</span>
                </h2>
            </div>

            <!-- Image overlap (paling atas) -->
            <div class="absolute top-44 left-1/2 -translate-x-1/2 z-20 scale-125">
                <img src="/c6.avif" alt="Ilustrasi diskusi" class="h-auto" />
            </div>

            <!-- Content Cards -->
            <div class="bg-white relative z-10 mt-10 p-6">
                <div class="overflow-x-auto">
                    <div class="flex gap-4 pb-4 mb-4">
                        <!-- Card Item -->
                        <div
                            v-for="(item, index) in cards"
                            :key="index"
                            class="flex-shrink-0 w-[350px] bg-blue-light/50 rounded-xl shadow-md p-4"
                        >
                            <div class="flex items-center gap-2 mb-3">
                                <span v-html="item.icon" class="text-blue-600 text-md"></span>
                                <h3 class="text-md font-semibold">{{ item.title }}</h3>
                            </div>
                            <p class="text-gray-600 mb-4 text-sm">{{ item.desc }}</p>
                            <a
                                :href="item.link"
                                class="text-blue-donker text-xs font-bold hover:underline"
                            >{{ item.cta }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <slot />
    </div>
</template>
