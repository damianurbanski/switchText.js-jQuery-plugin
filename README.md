# switchText.js jQuery-plugin
Animate and switch dynamically text

### Default usage


##1. Add this files to your html  code :

```
<script src="switchtext.js"></script>
<link rel="stylesheet" href="files/switchtext.css">
```
>Remember!  switchtext.js must be declared after jQuery file.


##2. Add this code.
```javascript
$('.yourElement').switchText(['Something','happen','with that'],
500,
1,
1,
'zoomIn'
);
```

##

## Settings
```javascript
$('.yourelement').switchText(['Something','happen','with that'], // Words to switch
250, // Time between switching (default = 1s)
1, // Loop (optional)
1, // Remove animation on end (works only when loop isn't set)
'zoomIn', //Name of animation
1 // Animation duration (if isn't set will be same as time between switching)
);
```
### Animation types
- zoomIn
- fadeIn
- glitch
- rotateY
- rotateX
- bounce
