<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text with JavaScript</title>
</head>
<body>

    <h1>Click the button to change the text below:</h1>
    <p id="text">This text will change.</p>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            document.getElementById('text').textContent = "The text has changed!";
        }
    </script>

</body>
</html>
