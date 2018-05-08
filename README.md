# Absolute Unit

## What

WIP: A micro-library for making round bois

More functionality coming!

## How

At the moment this semi-serious library offers a little more roundness than the 
language itself (correcting floating point silliness)

```js
import { round } from "absolute-unit"

const pie = "3.14159265359";
const unit = round(pie, 2); // => 3.14
```

Shortly you'll be able to parse embedded input as round numbers, thusly

```js
import { round } from "absolute-unit"

const pie = "Roughly 3.14159265359";
const unit = round(pie, 2); // => 3.14
```

In the meantime you can also get the absolute value of a number
(the non-negative value of x without regard to its sign)

```js
import absolute from "absolute-unit"

absolute('-1');     // => 1
absolute(-2);       // => 2
absolute(null);     // => 0
absolute('');       // => 0
absolute([]);       // => 0
absolute([2]);      // => 2
absolute([1,2]);    // => NaN
absolute({});       // => NaN
absolute('string'); // => NaN
absolute();         // => NaN
```

## Why

Just look at him.

![Look at this absolute unit](assets/absolute-unit.jpg)

Asbolute unit.