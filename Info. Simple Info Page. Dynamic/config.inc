<?php
    return [
        'host_urls' => [
            '10.0.2.34',
            '127.0.0.1',
            '::1',
            '93.179.198.180',
            '46.148.14.55',
        ],
        'long_name' => 'Niner Games DEV Server',
        'menu_items' => [
            ['url' => '/wtp/wtp.php', 'label' => 'WTP'],
            ['url' => '/phpmyadmin', 'label' => 'phpMyAdmin'],
            ['url' => '/adminer/adminer.php', 'label' => 'Adminer'],
        ],
        'short_name' => 'DEV Server',
        'description' => 'Serwer <strong>developerski</strong> służy do budowania aplikacji webowych tworzonych dla różnych klientów. Bazy danych to <em>kompletny śmietnik</em>, ale wprowadzane zmiany <strong>są zachowywane</strong> pomiędzy sesjami. Poza tym &mdash; rzeźnia i spalona ziemia. Nic tu nie jest pewne; tylko śmierć i podatki!',
        'buttons' => [
            //['url' => 'planner.html', 'label' => 'asPlan'],
        ],
        'footer' => 'Dostęp do serwera możliwy jest na dwa sposoby: ',
        'links' => [
            'http://localhost/',
            'http://127.0.0.1/',
        ],
    ];
?>