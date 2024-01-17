        // Respons JSON dari backend
        var responseJson = [
            {
                "response_type": "greeting",
                "user_input": ["hello", "hi", "hey", "oi", "halo", "hallo", "olaa", "hai", "hei"],
                "bot_response": "Halo Sobat Sawala! Ada yang bisa dibantu?",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "cara", "login", "register", "bertanya", "melihat", "pertanyaan", "menjadi", "sobat", "sawala", "bergabung"],
                "bot_response": "Anda bisa memulai dengan Tekan nav MyAccount, lalu pilih register, isi form registrasi, lalu submit. Jika registrasi berhasil, Anda akan diarahkan ke halaman login. Isi username dan password, kemudian submit. Voila! Anda sudah menjadi sahabat Sawala.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["ada", "sawala", "saja", "apa", "isi"],
                "bot_response": "Sobat Salawa, tentunya kamu akan menemukan diskusi antar mahasiswa, ada berita terupdate seputar kuliah, info event yang akan diselenggarakan, dan yang pasti semuanya tentang kehidupan perkuliahan.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["aturan", "apa", "saja", "seperti", "peraturan", "bagaimana", "untuk", "di", "sobat", "sawala", "bentuk"],
                "bot_response": "Kamu bisa membaca ketentuannya di halaman Landing Page pada Aturan menjadi Sobat Sawala!",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "mengajukan", "cara", "bertanya", "setelah", "di", "halaman", "memiliki", "akun", "sobat", "sawala", "login", "melakukan", "bergabung", "setelah", "pertanyaan"],
                "bot_response": "Hal yang perlu kamu lakukan adalah menekan ikon tulis pertanyaan yang berada di samping ikon homepage. Pertanyaan yang kamu ajukan akan bersifat publik!",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "cara", "melihat", "informasi", "apa", "fungsi", "berita", "update", "sawala", "terbaru", "info"],
                "bot_response": "Kamu bisa melihat informasi terbaru yang dibagikan oleh Admin Sawala pada halaman informasi Sobat Sawala disamping ikon tulis pertanyaan",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["apa", "bagaimana", "cara", "yang", "harus", "dilakukan", "kehilangan", "melihat", "melaporkan", "siapa", "kepada", "aku", "saya", "barang", "pribadi"],
                "bot_response": "Apabila kamu mengalami permasalahan tersebut, kamu bisa melaporkan permasalahan tersebut pada Pos Satpam dan jangan lupa sertakan informasi mengenai barang tersebut seperti jenis atau nama barang dan tempat serta lokasi terakhir barang tersebut berada",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["apa", "saja", "cara", "bagaimana", "mendaftar", "magang", "bagaimana", "mendapat", "mencari", "update", "informasi", "seputar", "ada", "info", "terbaru", "cara", "konversi"],
                "bot_response": "Ada 2 cara untuk mendapatkan informasi mengenai magang. Yang pertama kamu bisa mendapatkan informasi tersebut melalui pihak CDC ULBI atau kamu bisa mendaftar melalui website resmi Kampus Merdeka",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "apa", "informasi", "info", "yang", "cara", "update", "terbaru", "apabila", "jika", "mendaftar", "melalui", "aku", "saya", "CDC", "CDC ULBI"],
                "bot_response": "Kamu bisa menghubungi pihak CDC ULBI untuk mendapatkan informasi yang kamu perlukan dengan cara datang langsung ke ruangan CDC yang berada di Gedung Rektorat lantai 1, atau kamu bisa menghubungi pihak CDC dengan cara DM melalui sosial media Instagram @cdc.ulbi",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "apa", "informasi", "info", "yang", "cara", "update", "terbaru", "apabila", "jika", "mendaftar", "melalui", "aku", "saya", "Kampus Merdeka", "kampus", "merdeka"],
                "bot_response": "Kamu bisa menghubungi pihak CDC ULBI untuk mendapatkan informasi yang kamu perlukan dengan cara mengunjungi website resmi dari mitra perusahaan tersebut, dan jangan lupa untuk mengecek informasi terbaru mengenai pendaftaran magangmu melalui email pribadi.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "cara", "mendapatkan", "surat", "transkrip", "menghubungi", "apa", "harus", "dilakukan", "untuk", "mendaftar", "ktm", "kartu tanda mahasiswa", "transkrip", "toefl", "toeic", "administrasi"],
                "bot_response": "Untuk informasi tersebut, kamu bisa langsung mendatangi pusat BAAK ULBI atau menghubungi sosial media Instagram @baakulbi. Namun untuk KTM, kamu bisa menghubungi Iteung dan memasukkan keyword permintaan KTM yang akan dikirimkan langsung pada email pribadimu.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "cara", "mendapatkan", "surat", "pembayaran", "menghubungi", "apa", "harus", "dilakukan", "untuk", "mendaftar", "history", "riwayat", "spp", "dpp", "pelunasan", "cicilan", "uang", "melihat"],
                "bot_response": "Untuk informasi tersebut, kamu bisa langsung mendatangi pusat BAUK ULBI atau menghubungi sosial media Instagram @baak_ulbi. Atau kamu bisa menghubungi Iteung untuk mendapatkan informasi tersebut.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["apa", "saja", "bagaimana", "informasi", "info", "seputar", "event", "acara", "mendatang", "sedang", "berlangsung", "kampus", "ULBI"],
                "bot_response": "Untuk informasi tersebut, kamu bisa mencari dan mendapatkannya di forum diskusi. Atau kamu bisa mulai bertanya di Forum Diskusi.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["apa", "saja", "bagaimana", "cara", "informasi", "info", "rekruitmen", "pendaftaran", "melihat", "mendapatkan", "mendapat", "organisasi", "ukm", "update", "terbaru"],
                "bot_response": "Untuk informasi tersebut, kamu bisa mencari dan mendapatkannya di forum diskusi. Atau kamu bisa mulai bertanya di Forum Diskusi.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["apa", "bagaimana", "informasi", "info", "lomba", "pertandingan", "melihat", "mendapatkan", "update", "terbaru", "mengenai", "seputar"],
                "bot_response": "Untuk informasi tersebut, kamu bisa mencari dan mendapatkannya di forum diskusi. Atau kamu bisa mulai bertanya di Forum Diskusi.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "cara", "mendapatkan", "mencari", "info", "informasi", "seputar", "prodi", "jurusan", "apa", "saja", "yang", "ada", "ULBI"],
                "bot_response": "Untuk informasi tersebut, kamu bisa mengakses website resmi ULBI yaitu https://www.ulbi.ac.id/ dan mengakses halaman fakultas serta mulai melihat prodi atau jurusan yang kamu cari.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["bagaimana", "cara", "mendapatkan", "mencari", "info", "informasi", "seputar", "dosen", "jurusan", "apa", "saja", "yang", "ada", "ULBI", "siapa", "sesuai"],
                "bot_response": "Untuk informasi tersebut, kamu bisa mengakses website resmi ULBI yaitu https://www.ulbi.ac.id/ dan mengakses halaman dosen serta mulai melihat informasi mengenai dosen yang kamu cari.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["apa", "aku", "saya", "bisa", "menanyakan", "bertanya", "informasi", "info", "hot", "rahasia", "terjadi", "pernah", "saat", "ini", "ULBI", "mendapatkan", "mendapat", "mencari", "tahu"],
                "bot_response": "Tentu saja bisa! Rahasiamu aman disini.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["apa", "aku", "saya", "bisa", "boleh", "melaporkan", "menceritakan", "pengalaman", "momen", "moment", "pribadi", "di", "sini", "curhat", "bercerita", "berkeluh", "kesah"],
                "bot_response": "Tentu bisa dan boleh loh! Tenang saja, rahasiamu aman disini.",
                "required_words": []
            },
            {
                "response_type": "question",
                "user_input": ["cara", "bagaimana", "mendapatkan", "konversi", "magang", "studi independen", "pertukaran mahasiswa", "iisma", "kampus mengajar", "informasi", "info", "seputar", "tentang"],
                "bot_response": "Kamu bisa mendapatkan informasi tersebut di Forum Diskusi atau kamu bisa mulai bertanya dan tunggu respon jawaban dari informasi yang kamu butuhkan",
                "required_words": []
            },
            {
                "response_type": "greeting",
                "user_input": ["baik", "sudah", "cukup", "terimakasih", "terima kasih", "informasinya", "info", "informasinya", "infonya", "dadah", "bye bye", "banyak"],
                "bot_response": "Terima kasih kembali, selamat bergabung menjadi Sobat Sawala!",
                "required_words": []
            },
            // ... (masukin data respons lainnya)
        ];

        // Kode backend Python untuk memproses respons
        function getBotResponse(userMessage) {
            var splitMessage = userMessage.toLowerCase().match(/\b(\w+)\b/g);

            var scoreList = responseJson.map(response => {
                var responseScore = 0;
                var requiredScore = 0;
                var requiredWords = response.required_words;

                if (requiredWords.length > 0) {
                    splitMessage.forEach(word => {
                        if (requiredWords.includes(word)) {
                            requiredScore += 1;
                        }
                    });
                }

                if (requiredScore === requiredWords.length) {
                    splitMessage.forEach(word => {
                        if (response.user_input.includes(word)) {
                            responseScore += 1;
                        }
                    });
                }

                return responseScore;
            });

            var bestResponse = Math.max(...scoreList);
            var responseIndex = scoreList.indexOf(bestResponse);

            return (bestResponse !== 0) ? responseJson[responseIndex].bot_response : getRandomResponse();
        }

        // Fungsi untuk mendapatkan respons acak
        function getRandomResponse() {
            var randomList = [
                "Aduh, aku kurang tau. Tanya pertanyaan lain dong.",
                "Maaf aku gak paham kamu nanya apa, coba pertanyaan lain.",
                "Boleh jelasin gak maksudnya apa?",
                "Aku gabisa jawab, maaf ya.",
                "Duh, kamu ngomong apa sih.",
                "Kamu nanya apa sih, bikin bingung tau!",
                "Hm, aku gak tau. Coba tanya sekali lagi."
            ];

            var randomItem = Math.floor(Math.random() * randomList.length);
            return randomList[randomItem];
        }

        // Fungsi untuk mengirim pesan dan mendapatkan respons
        function sendMessage() {
            var userMessage = document.getElementById('user-message').value;
            var chatMessages = document.getElementById('chat-messages');

            // Menampilkan pesan dari pengguna
            chatMessages.innerHTML += '<div class="message user-message">' + userMessage + '</div>';

            // Mendapatkan respons dari chatbot
            var botResponse = getBotResponse(userMessage);

            // Menampilkan pesan dari chatbot
            chatMessages.innerHTML += '<div class="message bot-message">' + botResponse + '</div>';

            // Menggulir ke bagian bawah kontainer chat
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Mengosongkan input setelah mengirim pesan
            document.getElementById('user-message').value = '';
        }

        // Fungsi untuk menampilkan atau menyembunyikan chat
        function toggleChat() {
            var chatContainer = document.getElementById('chat-container');
            var inputContainer = document.querySelector('.input-container');

            if (chatContainer.style.display === 'none') {
                // Jika chatbot sedang tertutup, buka chatbot
                chatContainer.style.display = 'block';
                chatContainer.style.transform = 'scale(1)';
            } else {
                // Jika chatbot sedang terbuka, tutup chatbot
                chatContainer.style.transform = 'scale(0)';
                setTimeout(() => {
                    chatContainer.style.display = 'none';
                }, 300); // Sesuaikan dengan durasi transisi pada CSS
            }
        }
         // Event listener untuk mendeteksi tombol "Enter" ditekan
         document.getElementById('user-message').addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Mencegah baris baru diinput saat menekan "Enter"
                sendMessage();
            }
        });
        