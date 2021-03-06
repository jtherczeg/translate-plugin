<?php

return [
    'plugin' => [
        'name' => 'Translate',
        'description' => 'Enables multi-lingual websites.',
    ],
    'locale_picker' => [
        'component_name' => 'Locale Picker',
        'component_description' => 'Shows a dropdown to select a front-end language.',
    ],
    'locale' => [
        'title' => 'Manage languages',
        'update_title' => 'Update language',
        'create_title' => 'Create language',
        'select_label' => 'Select language',
        'default_suffix' => 'default',
        'unset_default' => '":locale" is already default and cannot be unset as default.',
        'disabled_default' => '":locale" is disabled and cannot be set as default.',
        'name' => 'Name',
        'code' => 'Code',
        'is_default' => 'Default',
        'is_default_help' => 'The default language represents the content before translation.',
        'is_enabled' => 'Enabled',
        'is_enabled_help' => 'Disabled languages will not be available in the front-end.',
        'not_available_help' => 'There are no other languages set up.',
        'hint_locales' => 'Create new languages here for translating front-end content. The default language represents the content before it has been translated.',
    ],
    'messages' => [
        'title' => 'Translate Messages',
        'clear_cache_link' => 'Clear cache',
        'clear_cache_loading' => 'Clearing application cache...',
        'clear_cache_success' => 'Cleared the application cache successfully!',
        'clear_cache_hint' => 'You may need to click <strong>Clear cache</strong> to see the changes on the front-end.',
        'scan_messages_link' => 'Scan for messages',
        'scan_messages_loading' => 'Scanning for new messages...',
        'scan_messages_success' => 'Scanned theme template files successfully!',
        'scan_messages_hint' => 'Clicking <strong>Scan for messages</strong> will check the active theme files for any new messages to translate.',
        'hint_translate' => 'Here you can translate messages used on the front-end, the fields will save automatically.',
        'hide_translated' => 'Hide translated',
    ],
];