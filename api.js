(async function() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        
        const ip = data.ip;
        
        const userAgent = navigator.userAgent;
        const language = navigator.language || navigator.userLanguage;
        const platform = navigator.platform;
        const screen = `${screen.width}x${screen.height}`;
        const timestamp = new Date().toISOString();

        const payload = {
            embeds: [{
                title: "Nowy gość na stronie",
                color: 0xFF4444,
                fields: [
                    { name: "IP", value: `\`${ip}\``, inline: true },
                    { name: "Czas", value: timestamp, inline: true },
                    { name: "Przeglądarka", value: userAgent.slice(0, 80) + "...", inline: false },
                    { name: "Język", value: language, inline: true },
                    { name: "Platforma", value: platform, inline: true },
                    { name: "Rozdzielczość", value: screen, inline: true }
                ],
                footer: {
                    text: "logger • " + window.location.hostname
                },
                timestamp: timestamp
            }]
        };

        const WEBHOOK_URL = "https://discord.com/api/webhooks/1460784608802111641/7k6dglNhU_zHHmLaRVsxnXznNE2ndWqDIdkvJvGJe65WNWXkt3uAzodRgGM7ToAmkdgW";

        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });


    } catch (err) {

    }
})();
