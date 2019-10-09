<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Opus_Blog
 */

get_header();
?>
    <section class="archive-heading">
        <?php
        the_archive_title('<h1 class="archive-title">', '</h1>');
        the_archive_description('<div class="archive-description">', '</div>');
        ?>
    </section>
    <section class="breadcrumbs-wrap">
        <?php do_action('opus_blog_breadcrumb_options_hook'); ?> <!-- Breadcrumb hook -->
    </section>
    <div id="primary" class="col-md-8 content-area">
        <main id="main" class="site-main">
            <?php if (have_posts()) : ?>
                
                <?php
                
                /* Masonry Start Section */
                do_action('opus_blog_masonry_start_hook');
                
                /* Start the Loop */
                while (have_posts()) :
                    the_post();
                    
                    /*
                     * Include the Post-Type-specific template for the content.
                     * If you want to override this in a child theme, then include a file
                     * called content-___.php (where ___ is the Post Type name) and that will be used instead.
                     */
                    get_template_part('template-parts/content', get_post_format());
                
                endwhile;
                
                /* Masonry end Section */
                do_action('opus_blog_masonry_end_hook');
                
                /**
                 * opus_blog_action_navigation hook
                 * @since Opus Blog 1.0.0
                 *
                 * @hooked opus_blog_action_navigation -  10
                 */
                do_action('opus_blog_action_navigation');
            
            else :
                
                get_template_part('template-parts/content', 'none');
            
            endif;
            ?>

        </main><!-- #main -->
    </div><!-- #primary -->

<?php
get_sidebar();
get_footer();
