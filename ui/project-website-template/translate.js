function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,de,ja,ko',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
    }, 'google_translate_element');
}
