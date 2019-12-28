let simplemde = new SimpleMDE({
    autofocus: true,
    blockStyles: {
        bold: "__",
        italic: "_"
    },
    element: document.getElementById("postArea"),
    forceSync: true,
    indentWithTabs: false,
    insertTexts: {
        horizontalRule: ["", "\n\n-----\n\n"],
        image: ["![](http://", ")"],
        link: ["[", "](http://)"],
        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
    },
    lineWrapping: false,
    parsingConfig: {
        allowAtxHeaderWithoutSpace: true,
        strikethrough: false,
        underscoresBreakWords: true,
    },
    placeholder: "Type here...",
    previewRender: function(plainText) {
        return customMarkdownParser(plainText); // Returns HTML from a custom parser
    },
    previewRender: function(plainText, preview) { // Async method
        setTimeout(function(){
            preview.innerHTML = customMarkdownParser(plainText);
        }, 250);

        return "Loading...";
    },
    promptURLs: true,
    renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
    },
    shortcuts: {
        drawTable: "Cmd-Alt-T"
    },
    showIcons: ["code", "table"],
    spellChecker: true,
    status: false,
    status: ["autosave", "lines", "words", "cursor"], // Optional usage
    status: ["autosave", "lines", "words", "cursor", {
        className: "keystrokes",
        defaultValue: function(el) {
            this.keystrokes = 0;
            el.innerHTML = "0 Keystrokes";
        },
        onUpdate: function(el) {
            el.innerHTML = ++this.keystrokes + " Keystrokes";
        }
    }], // Another optional usage, with a custom status bar item that counts keystrokes
    styleSelectedText: true,
    tabSize: 4,
    toolbar: [{
    name: "bold",
    action: SimpleMDE.toggleBold,
    className: "fa fa-bold",
    title: "Bold",
            },
            "italic",
            "heading",
            "|",
            "quote",
            "unordered-list",
            "ordered-list",
            "code",
            "|",
            "link",
            "image",
            "|",
            "preview",
            "side-by-side",
            "fullscreen"
        ],
    toolbarTips: true,
});



function customMarkdownParser(markdown) {
    let md = window.markdownit();
    let result = md.render(markdown);

    return result;
}