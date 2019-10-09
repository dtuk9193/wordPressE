<?php
/**
 * The template for displaying WooCommerce Posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Opus_Blog
 */
get_header();
?>
<section class="breadcrumbs-wrap">
    <?php do_action('opus_blog_breadcrumb_options_hook'); ?> <!-- Breadcrumb hook -->
</section>
    <div id="primary" class="col-md-8 content-area">
        <div class="content-area">
            <div class="post-wrapper">
                <article id="main">
                    <?php
                    if (have_posts()) :
                        woocommerce_content();
                    endif;
                    ?>
                </article><!-- #main -->
            </div>
        </div><!-- #primary -->
    </div>
<?php
get_sidebar();
get_footer();