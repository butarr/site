# Sass Style Guide
For a complete reference visit:
https://github.com/sasstools/sass-lint/tree/develop/docs/rules

## Errors
- no-misspelled-properties
  - Allowed: `justify-content: center;`
  - Not Allowed: `jutify-content: center;`

- no-invalid-hex
  - Allowed: `$border-color: #000`
  - Not Allowed: `$invalid-letters-long: #abcdefg;`

- no-url-domains
  - Allowed: `background-image: url('/img/bar.png');`
  - Not Allowed: `background-image: url('http://img/bar.png');`

- no-transition-all
  - Allowed: `background-image: url('transition: all 2s;');`
  - Not Allowed: `background-image: url('transition: left 2s;');`

- no-qualifying-elements
  - Allowed:
```
.class
#id
[type='attribute']
```
  - Not Allowed:
```
div.class
ul#id
input[type='attribute']
```

- no-duplicate-properties
 - Allowed:
```
.class {
  margin: 2px;
}

```
  - Not Allowed:
```
.class {
  margin: 2px;
  margin: 3px;
}
```

- no-color-literals
  - Allowed: `color: $variable;`
  - Not Allowed: `color: #000;`

## Warnings
- no-empty-rulesets
  - Allowed:
```
.class {
  content
}

```
  - Not Allowed:
```
.class {

}
```
- no-mergeable-selectors
  - Allowed:
```
selector {
  property: value;
  other-property: value;
}
```
  - Not Allowed:
```
same-selector {
  property: value;
}

same-selector {
  other-property: value;
}
```

- declarations-before-nesting
  - Allowed:
```
selector {
  property: value;
  other-property: value;

  other-selector {
    content;
  }
}
```
  - Not Allowed:
```
selector {
  other-selector {
    content;
  }

  property: value;
  other-property: value;
}
```

- empty-args
  - Allowed: `function;`
  - Not Allowed: `function();`

- space-after-colon
  - Allowed: `property: value;`
  - Not Allowed: `property:value;`

- space-before-colon
  - Allowed: `property: value;`
  - Not Allowed: `property :value;`

- space-after-comma
  - Allowed: `box-shadow: 5px, 4px;`
  - Not Allowed: `box-shadow: 5px,4px;`

- space-between-parens
  - Allowed: `function(parameter)`
  - Not Allowed: `function( parameter )`

- space-around-operator
  - Allowed: `font: 1rem / 1;`
  - Not Allowed: `font: 1rem/1;`

- space-before-brace
  - Allowed: `selector {}`
  - Not Allowed: `selector{}`

- brace-style

  - Allowed:
```
selector {
    content
}
```
  - Not Allowed:
```
selector
{
    content
}
```

- empty-line-between-blocks
  - Allowed:
```  
selector {
  content
}

selector {
  content
}
```

  - Not Allowed
```
selector {
  content
}
selector {
  content
}
```

- leading-zero
  - Allowed: `.75;`
  - Not Allowed: `0.75`

- no-trailing-zero
  - Allowed: `.15;`
  - Not Allowed: `.150`
  
- border-zero
  - Allowed: `border: 0;`
  - Not Allowed: `border: none;`

- zero-unit
  - Allowed: `border: 0;`
  - Not Allowed: `border: 0px;`

- shorthand-values
  - Allowed: `padding: 5px 20px 10px;`
  - Not Allowed: `padding: 5px 20px 10px 20px;`

- single-line-per-selector
  - Allowed:
```
selector,
other-selector {
  content
}
```
  - Not Allowed:
```
selector, other-selector {
  content
}
```
- one-declaration-per-line
  - Allowed:
```
.class {
  property: value;
  other-property: value;
}
```
  - Not Allowed:
```
  .class {
    property: value; other-property: value;
  }
```

- mixin-name-format
- variable-name-format
- id-name-format
- class-name-format
  - Allowed: `lower-case-with-hyphen`
  - Not Allowed: `camelCase_with_underline`

- quotes
  - Allowed: `content: ' ';`
  - Not Allowed: `content: " ";`

- pseudo-element
  - Allowed: `.pseudo-element::before;` `.pseudo-class:hover;`
  - Not Allowed: `.pseudo-element:before;` `.pseudo-class::hover;`

- mixins-before-declarations
  - Allowed: 
```
.class {
  @include font;
  display: block;
}
```
  - Not Allowed:
```
.class {
  display: block;
  @include font;
}
```

- clean-import-paths
  - Allowed: `@import 'foo';`
  - Not Allowed: `@import 'foo.scss';`

- indentation: two spaces

- no-trailing-whitespace
