### 00_script_in_html.html
I learned that importing a JavaScript file into an HTML document requires a `<script>` tag. Using `type="module"` allows you to use `import` and `export` features, making large projects easier to organize and maintain.

### 01_base_syntax.js
Nalaman ko po here kung paano mag-output ng data sa terminal gamit ang `console.log()` function. Na-realize ko rin na napaka-strict ni JavaScript pagdating sa identifier naming rules at case sensitivity. Dahil dito, natutunan kong maging mas maingat sa pag-declare ng variables para iwas syntax errors.

### 02_variables.js
Natutunan ko sa part na 'to ang pagkakaiba ng iba't ibang data types tulad ng string, number, at boolean. Na-realize ko rin ang malaking kaibahan ng loose equality (`==`) kumpara sa strict equality (`===`) sa comparisons. Mas safe po ata palang gamitin ang `===` para maiwasan ang mga unexpected type coercion.

### 03_functions.js
Here po, I learned that functions allow us to package reusable logic cleanly into single blocks of code. Pumasok sa isip ko kung paano magkaiba ang traditional function declarations at modern arrow functions. Natutunan ko rin po na magandang practice na simulan sa verb ang function names para malinaw ang actions nito.

### 04_objects.js
Ang natutunan ko po here is kung paano mag-ipon or like imbak ang objects ng related data gamit ang key-value pairs. Ngayon po medyo naiintindihan ko na rin if paano ginagamit ang `this` keyword sa loob ng methods para ma-access ang sariling properties ng object. Bukod doon, na-try ko ring magdagdag ng bagong properties sa object pagkatapos itong ma-create.

### 05_arrays.js
Na-realize ko po na super helpful ng arrays para sa paghawak ng ordered lists ng data. Natuto akong mag-add and magremove ng items gamit ang `.push()` at `.shift()` methods. Naging malinaw rin sa akin kung paano mag-iterate sa array gamit ang `for...of` loop at `.map()`.

### 06_control_structures.js
Dito po is naging magandang exercise 'to para matutunan ang pag-control ng program flow gamit ang `if...else` statements,tsaka yung sa `for` loop kumpara sa `while` loop din. Kailangan lang po talagang mag-ingat sa condition ng `while` loop para hindi magkaroon ng infinite loop. (for me po medyo madali lang 'tong part)

### 07_dom.html
Now I know po na through DOM, pwede palang baguhin ng JavaScript ang nilalaman ng isang HTML element live sa browser. Na-try ko kung paano humingi ng user input gamit ang `prompt()` para palitan ang text sa screen. Na-try ko rin po ang paggamit ng `setTimeout()`.

### 08_essential_features.js
I realized that modern features like `.map()`, destructuring, and the spread operator make code writing much faster. Sobrang na-appreciate ko po kung paano madaling ma-extract ang properties galing sa objects nang hindi paulit-ulit ang code. Nakatulong din po ata here ang spread operator for mabilisang pag-copy at pag-merge ng arrays.

### 09_tricky_parts.js
Nalaman ko po here ang pagkakaiba ng `undefined` at `null` pagdating sa pag-check ng empty values. Natutunan ko rin na ang arrow functions ay may iba ring behavior sa `this` binding compare sa regular functions.

### 10_let_const.js
Ang main take-away ko  po here is yung malaking pagkakaiba sa scope at reassignment rules ng `let`, `const`, at `var`. Natutunan ko na `const` ang dapat na default choice at `let` naman kapag magbabago ang value.

### 11_arrow_functions.js
Mas naging clear po for me na ang arrow functions ay mas may short way for writing functions. Natutunan ko rin na kapag single expression lang ang laman nito, pwede na nating iwanan ang `return` keyword dahil sa implicit return. Nakatulong 'to para maging mas clean at mas madaling basahin ang code.

### 12_destructuring.js
Na-realize ko po dito na mas mabilis kumuha ng data mula sa objects at arrays gamit ang destructuring syntax. Hindi ko na need mag-access ng properties gamit ang dot notation nang paulit-ulit. Natutunan ko ring gamitin po ito nang mas direct.

### 13_spread_rest.js
I learned that the spread operator (`...`) expands array elements or object properties cleanly. Meanwhile, the rest parameter allows function arguments to be gathered into a single array variable.

### 14_classes_inheritance.js
Ang natutunan ko here sa classes ay kung paano gumawa ng structured object blueprints sa JavaScript. Naintindihan ko rin ang concept ng inheritance gamit ang `extends` keyword para mag-pass ng features mula parent papuntang child class.

### 15_modules_export.js
Medyo naguluhan po me kung paano ginagamit ang `export` para ma-share ang specific functions o variables sa ibang files. Pero at least po ngayon is natututo me sa pagkakaiba nila.

### 16_modules_import.js
Partner po pala ng `export` ang `import` statement para maipasok ang external code sa current/present file. Na-try ko rin po kung paano mag-import ng parehong default at named exports.

### 17_logical_operators.js
Naging eye-opener sa akin ang truthy at falsy values nang gamitan ang mga ito ng logical operators (`&&`, `||`, `!`). Natutunan ko kung paano nag-e-evaluate si JavaScript sa values tulad ng `0`, `""`, at `null`. Nakatulong 'to para maunawaan ang short-circuit evaluation sa pagbibigay ng fallback values.

### 18_ternary_nullish.js
Mas nagustuhan ko po here gamitin ang ternary operator (`? :`) para sa simpleng `if-else` assignments dahil mas maikli ito. Natutunan ko rin ang paggamit ng optional chaining (`?.`) para ligtas na ma-read ang deeply nested properties. Additionally, nakatulong din ang nullish coalescing (`??`) para magbigay ng fallback sa `null` o `undefined`.

### 19_strings_numbers.js
Natutunan ko rito ang iba't ibang built-in methods ng data formatting. Nakatulong ang `.trim()` at `.split()` para mag-clean at mag-divide ng string inputs nang fast.

### 20_array_methods.js
I realized that methods like `.filter()`, `.find()`, and `.sort()` make data array management extremely easy. Di ko na need mag-sulat ng manu-manong loops para lang mag-search o mag-filter ng specific items. Sobrang nakakatipid ito sa oras at nagpapadali ng pagpa-process ng mga lists.

### 21_errors_json.js
Nalaman ko kung paano gamitin ang `try...catch` blocks para hindi agad mag-crash ang program kapag may runtime error. Natutunan ko rin kung paano mag-throw ng custom errors kapag hindi na-meet ang certain conditions. Bukod doon, nalaman ko rin po pala ang pag-convert ng data gamit ang `JSON.stringify()` at `JSON.parse()`.

### 22_async_javascript.js
Ang naintindihan ko po here is yung process ng asynchronous JavaScript mula sa callbacks hanggang sa paggamit ng Promises. Nalaman ko rin po kung paano ginagawang mas malinis ng `async/await` ang paghawak ng asynchronous tasks. 

### 23_closures_scope.js
And lastly po, I learned the difference between block scope and function scope when handling variables. I also understood how a closure allows an inner function to retain access to its outer variables. Even after the parent function finishes executing, those stored values remain accessible. ^^
