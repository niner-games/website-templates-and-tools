<?php
    $current_host = $_SERVER['REMOTE_ADDR'] ?? '';
    $config = file_exists('config.inc') ? include 'config.inc' : [];
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title><?= $config['long_name'] ?? 'Akademia Śląska -- TEST Server' ?></title>
        
        <link href="styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html"><?= $config['long_name'] ?? 'Akademia Śląska -- TEST Server' ?></a>
                <div id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <?php
                            if (!empty($config['host_urls']) && in_array($current_host, $config['host_urls'])) {
                                if (!empty($config['menu_items']) && is_array($config['menu_items'])) {
                                    foreach ($config['menu_items'] as $button) {
                                        $url = htmlspecialchars($button['url'] ?? '#');
                                        $label = htmlspecialchars($button['label'] ?? 'Button');
                                        echo "<li class=\"nav-item\"><a class=\"btn btn-outline-success btn-xs\" href=\"{$url}\">{$label}</a></li> ";
                                    }
                                }
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">
                        
                            <?= htmlspecialchars($config['short_name'] ?? 'TEST Server') ?>
                        
                        </h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">
                        
                            <?= $config['description'] ?? 'Serwer służy do testowania aplikacji webowych.' ?>
                        
                        </p>
                        <p class="text-white-75 mb-5">
                        
                        <?php
                            if (!empty($config['buttons']) && is_array($config['buttons'])) {
                                foreach ($config['buttons'] as $button) {
                                    $url = htmlspecialchars($button['url'] ?? '#');
                                    $label = htmlspecialchars($button['label'] ?? 'Button');
                                    echo "<a class=\"btn btn-danger btn-lg\" href=\"{$url}\">{$label}</a> ";
                                }
                            }
                        ?>
                        
                        </p>
                        <p class="text-white-75 mb-5 small">
                        
                            <?= $config['footer'] ?? 'Dostęp do serwera możliwy jest na różne sposoby.' ?>
                        
                            <?php
                                if (isset($config['links']) && is_array($config['links'])) {
                                    
                                    foreach ($config['links'] as $index => $link) {
                                        $link = htmlspecialchars($link);
                                        $domain = htmlspecialchars(parse_url($link, PHP_URL_HOST));
                                        $protocol = htmlspecialchars(parse_url($link, PHP_URL_SCHEME));

                                        echo "<a href=\"{$link}\">{$protocol}://<span class=\"fw-bold\">{$domain}</span>/</a>";
                                        
                                        if ($index < count($config['links']) - 1) {
                                            echo " | ";
                                        }
                                    }
                                }
                            ?>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    </body>
</html>
