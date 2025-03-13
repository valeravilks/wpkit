<?php
/**
 * Plugin Name:       Restrict Core Blocks for Pages
 * Description:       Убирает стандартные блоки (core/*) из редактора для страниц (page), оставляя только кастомные.
 * Version:           1.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Your Name
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       restrict-core-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Защита от прямого доступа
}

function restrict_blocks_for_page( $allowed_blocks, $editor_context ) {
    // Проверяем, редактируется ли именно "Страница" (page)
    if ( isset( $editor_context->post ) && 'page' === get_post_type( $editor_context->post ) ) {
        $all_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

        // Убираем все блоки "core/*", но оставляем кастомные
        $allowed_blocks = [];
        foreach ( $all_blocks as $block_name => $block ) {
            if ( strpos( $block_name, 'core/' ) !== 0 ) {
                $allowed_blocks[] = $block_name;
            }
        }

        return $allowed_blocks;
    }

    return $allowed_blocks; // Для остальных типов записей блоки остаются без изменений
}

add_filter( 'allowed_block_types_all', 'restrict_blocks_for_page', 10, 2 );