<script setup lang="ts">
// contoh dummy data kategori
const categories = [
    { id: "all", name: "Semua Janji", count: 19, icon: "📑" },
    { id: "ekonomi", name: "Ekonomi", icon: "💰" },
    { id: "infrastruktur", name: "Infrastruktur", icon: "🏠" },
    { id: "pendidikan", name: "Pendidikan", icon: "🎓" },
    { id: "hukum", name: "Penegakan Hukum", icon: "⚖️" },
    { id: "lingkungan", name: "Lingkungan", icon: "🌱" },
    { id: "kesehatan", name: "Kesehatan", icon: "➕" },
    { id: "gender", name: "Gender & Inklusi", icon: "👥" },
    { id: "seni", name: "Seni & Olahraga", icon: "🎭" },
]

// contoh dummy data card janji
const promises = [
    {
        id: 1,
        category: "Lingkungan",
        title: "Wujudkan swasembada dan tingkatkan kualitas air",
        bg: "bg-blue-700",
        img: "/p1.avif",
    },
    {
        id: 2,
        category: "Pendidikan",
        title: "Perbaiki kualitas SDM lewat pendidikan",
        bg: "bg-cyan-500",
        img: "/p2.avif",
    },
    {
        id: 3,
        category: "Pendidikan",
        title: "Permudah akses masuk perguruan tinggi",
        bg: "bg-blue-700",
        img: "/p3.avif",
    },
    {
        id: 4,
        category: "Pendidikan",
        title: "Bangun sekolah unggul",
        bg: "bg-blue-400",
        img: "/p4.avif",
    },
    {
        id: 5,
        category: "Kesehatan",
        title: "Seluruh rakyat dijamin layanan kesehatan",
        bg: "bg-blue-600",
        img: "/p5.avif",
    },
    {
        id: 6,
        category: "Kesehatan",
        title: "Seluruh rakyat dijamin layanan kesehatan",
        bg: "bg-blue-600",
        img: "/p6.avif",
    },
    {
        id: 7,
        category: "Kesehatan",
        title: "Seluruh rakyat dijamin layanan kesehatan",
        bg: "bg-blue-600",
        img: "/p7.avif",
    },
    {
        id: 8,
        category: "Kesehatan",
        title: "Seluruh rakyat dijamin layanan kesehatan",
        bg: "bg-blue-600",
        img: "/p8.avif",
    },
    {
        id: 9,
        category: "Kesehatan",
        title: "Seluruh rakyat dijamin layanan kesehatan",
        bg: "bg-blue-600",
        img: "/p9.avif",
    },
    {
        id: 10,
        category: "Kesehatan",
        title: "Seluruh rakyat dijamin layanan kesehatan",
        bg: "bg-blue-600",
        img: "/p10.avif",
    },
]

// helper untuk pecah tiap 3 kata
function formatTitle(title: string) {
    return title
        .split(" ")
        .map((word, i) => ((i + 1) % 3 === 0 ? word + "\n" : word))
        .join(" ");
}
</script>

<template>
    <section class="flex min-h-screen mb-8 hidden md:flex">
        <!-- Sidebar -->
        <aside class="w-[280px] flex justify-start p-6 space-y-4 sticky top-0 h-screen">
            <nav class="space-y-4">
                <button
                    v-for="cat in categories"
                    :key="cat.id"
                    class="flex items-center justify-between w-full px-3 py-2 rounded-lg text-left hover:bg-blue-100 transition"
                >
                    <div class="flex items-center gap-2">
                        <span>{{ cat.icon }}</span>
                        <span>{{ cat.name }}</span>
                    </div>
                    <span
                        v-if="cat.count"
                        class="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                    >{{ cat.count }}</span>
                </button>
            </nav>
        </aside>

        <!-- Content -->
        <main class="flex-1 p-6 overflow-y-auto">
            <h1
                class="text-xl font-bold mb-2 text-abu"
            >Banyak hal dijanjikan Presiden buat rakyat selama kampanye.</h1>
            <p class="text-gray-600 mb-6">Gimana progresnya? Kita pantau bareng!</p>

            <!-- Cards grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    v-for="promise in promises"
                    :key="promise.id"
                    class="relative rounded-xl p-6 text-white flex flex-col justify-between h-[220px] overflow-hidden shadow-md"
                >
                    <!-- background image full -->
                    <img :src="promise.img" alt class="absolute inset-0 w-full h-full object-cover" />

                    <!-- overlay biar teks tetap jelas -->
                    <div class="absolute inset-0 bg-black/40"></div>

                    <!-- content -->
                    <div class="relative flex flex-col h-full justify-between">
                        <!-- label kategori -->
                        <span
                            class="text-xs font-medium bg-transparent border border-white px-3 py-1 rounded-full inline-block mb-4 w-fit"
                        >{{ promise.category }}</span>

                        <!-- judul -->
                        <h3
                            class="text-md -mt-6 font-semibold mb-4 whitespace-pre-line leading-snug"
                        >{{ formatTitle(promise.title) }}</h3>
                        <!-- tombol -->
                        <button
                            class="bg-white text-blue-donker font-semibold text-sm px-4 py-2 rounded-full w-fit"
                        >Baca sekarang</button>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>
