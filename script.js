function openSurprise() {
            document.getElementById('page1').style.display = 'none';
            document.getElementById('page2').style.display = 'block';
            document.body.style.background = "linear-gradient(to bottom, #ff9a9e, #fad0c4)";
            startFlowerRain();
        }

        function startFlowerRain() {
            const flowers = ['🌸', '🌷', '🌹', '🌺', '✨'];
            setInterval(() => {
                const f = document.createElement('div');
                f.className = 'floating-flower';
                f.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
                f.style.left = Math.random() * 100 + 'vw';
                f.style.fontSize = (Math.random() * 20 + 20) + 'px';
                f.style.animationDuration = (Math.random() * 2 + 3) + 's';
                document.body.appendChild(f);
                setTimeout(() => f.remove(), 5000);
            }, 300);
        }
