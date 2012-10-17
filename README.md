jquery.spin.js
==============

Integration layer between jquery.js and spin.js

==============

Methods
- spin()
- spinBlock(opts)
- spinUnblock()

Examples:

- toggle displaying a spinner within a container element

        $('#someElement').spin();

- show a spinner over a given element; creates absolutely possitioned div and renders the spinner inside. execute .spinUnblock() to hide it.

        $('#someElement').spinBlock();
