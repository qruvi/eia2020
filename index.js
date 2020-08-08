const getMsg = () => "Hello World";
(
    function () {
        // gmail href
        const letter = document.getElementById("letter");
        const gmailIcon = document.getElementById('gmail-share');
        const body = letter.innerHTML;
        gmailIcon.href =
            `mailto:eia2020-moefcc@gov.in?subject=Seeking%20withdrawal%20of%20the%20Draft%20Environment%20Impact%20Assessment%20Notification%20-2020&body=${encodeURIComponent(body)}`
    }
)()