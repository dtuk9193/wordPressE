<?php
/**
 * Template Name: Middle Sidebar
 * Template Post Type: post
 *
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Opus_Blog
 */
get_header();
?>
    <section class="breadcrumbs-wrap">
        <?php do_action('opus_blog_breadcrumb_options_hook'); ?> <!-- Breadcrumb hook -->
    </section>
    <div id="primary" class="col-md-8 content-area">
        <main id="main" class="site-main">
            <?php
            
            while (have_posts()) :
                the_post();
                
                get_template_part('template-parts/content', 'single');
                
                /**
                 * opus_blog_related_posts hook
                 * @since Opus Blog 1.0.0
                 *
                 * @hooked opus_blog_related_posts -  10
                 */
                do_action('opus_blog_related_posts', get_the_ID());
                
                // If comments are open or we have at least one comment, load up the comment template.
                
                if (comments_open() || get_comments_number()) :
                    comments_template();
                endif;
            
            endwhile; // End of the loop.
            ?>
        </main><!-- #main -->
    </div><!-- #primary -->

<?php
get_footer();