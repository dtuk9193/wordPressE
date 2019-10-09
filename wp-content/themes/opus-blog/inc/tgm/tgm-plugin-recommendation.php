<?php
/**
 * Recommendation plugins lists
 *
 * @since Opus Blog 1.0.0
 *
 */
if ( ! function_exists( 'opus_blog_recommended_plugins' ) ) :
    /**
     * Recommend plugins.
     *
     * @since 1.0.0
     */
    function opus_blog_recommended_plugins() {
        
        $plugins = array(
            
            array(
                'name'     => esc_html__( 'One Click Demo Import', 'opus-blog' ),
                'slug'     => 'one-click-demo-import',
                'required' => false,
            ),
            
            array(
                'name'     => esc_html__( 'Aki Toolset', 'opus-blog' ),
                'slug'     => 'aki-toolset',
                'required' => false,
            ),
    
            array(
                'name'     => esc_html__( 'Everest Forms', 'opus-blog' ),
                'slug'     => 'everest-forms',
                'required' => false,
            ),
        );
        tgmpa( $plugins );
    }
endif;
add_action( 'tgmpa_register', 'opus_blog_recommended_plugins' );
