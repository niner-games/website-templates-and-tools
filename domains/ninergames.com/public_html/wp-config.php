<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'niner_wp1' );

/** Database username */
define( 'DB_USER', 'niner_wp1' );

/** Database password */
define( 'DB_PASSWORD', 'Q[7g0ppKPEFkUjhvBc)65[.8' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ewUNaPtwXIJZEkh8SxbPnDt4LB7Vr2KexUuueE91Kj9Jo7ozChmflh4Q8Hlsfqv0');
define('SECURE_AUTH_KEY',  'ePxLNtWl5ft8niXpDvTBaBPLrVipDBJTcf4zghwfDt98EHkFqsuzTKZJzybqNCqc');
define('LOGGED_IN_KEY',    '9LT2w75kNIx1QexMhEtVveAfXCeUkD2KJ10pZRfAOBlhVCoRxZZrtL2iYipFJF2o');
define('NONCE_KEY',        'e1JXOkKZmOjA8rLh1D0HCwtHT2vANm4sNPgt1DIWEifPgKjbiwA2sQn2q1gT2esM');
define('AUTH_SALT',        'SgsexQu1Q1hU73pX52ZSsp3CVMEcdAgWaASUK24rM6WOSdxnhKuGNtoRbaPdBzW9');
define('SECURE_AUTH_SALT', 'XZGTcQT6puPrTrZHmChFUL87RumZYlpCtVpmoeEvsChNboUoWfPIO8lH6hZReZvB');
define('LOGGED_IN_SALT',   'viCPAkeA7Lvzcl0ni70XuCQ08g8cIfhDwuNvJTLN9fmc6NGzkT3hqqybZdzJnsyf');
define('NONCE_SALT',       '4Oh1cSLoFkIiIjj4SFXoMUKavC3frsKkc9tCcqpYluDHn5HMZbcvWP34nDQ50Vhj');

/**
 * Other customizations.
 */
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('DISABLE_WP_CRON', true);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
