<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/main.css">

    <?php foreach ($stylesheets as $sheet): ?>
        <link rel="stylesheet" href="/styles/<?= $sheet ?>">
    <?php endforeach ?>

    <?php foreach ($scripts as $script): ?>
        <script type="module" src="/js/<?= $script ?>"></script>
    <?php endforeach ?>

    <title><?= $page_title ?></title>
</head>

<body>
    <a href="/"><?= url_path_matches("/") ? "" : '🏠 Home' ?></a>
    <div class="container">