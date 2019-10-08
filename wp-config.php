<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpressE' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1A`t4O`g}!-}Hc6d% #QQ<yax9vrZmjv4!$Y{r.f0]yN7]bmoqwEoXr$-hMWB^3W' );
define( 'SECURE_AUTH_KEY',  '?Nq2-Gw`d/2)a(F9O9_c3fh8d:aC( rV!o@_T{v$,2R!`K?88C^p9,o,2M%2C@U0' );
define( 'LOGGED_IN_KEY',    'K3!HD.kJ?#<t8!xx7LQzVy56.O,~wrAHntU8G$NhIC wM6>.V*!tB%7ITL{#fnRJ' );
define( 'NONCE_KEY',        'vnhEa0[ZMf~~[rs@GLDX0&#|i][:0.,C{]A^&o9neKjd!zpn8X))XQEz1gX]8D7G' );
define( 'AUTH_SALT',        'XoPioYO6 TQ QU$B|amLh@y8h@b_~n~X}5-&$|G8k(/J0>^i;yW,#5EEQTYpWbAr' );
define( 'SECURE_AUTH_SALT', '0L%?&8ga)Fir1Z0sL%z2:Y88Yu=XWO9mP&<5}OFAPK&-n29,8-AS;4MuH!fum1O%' );
define( 'LOGGED_IN_SALT',   'Wi/Rcc}&,,i,c{0:!u)gsmO;bzG4IHv;(TKznq6G8Z+T,{h:*s~}2bCoy91m1(}z' );
define( 'NONCE_SALT',       ';Jc;i?|<Ft|`ujObc=_|w4:^4/%z*uptp8nWy6TX!)2y(/(#X^6EJC3[%nuW>l0s' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
