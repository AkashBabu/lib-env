# lib-env
An Efficient nodejs library for managing NODE_ENV comparisons

All the below comparisons are executed only once at the begining of the application and the results are saved. Hence making the usage more efficient


## Usage

```javascript
import { IsENVTest } from "lib-env";

// By using this library you may change the below code
if(process.env.NODE_ENV === "test") { ... }

// To 
if(IsENVTest) { ... }

```

## Properties

* **IsENVTest**   => returns `true` if NODE_ENV=test
* **IsENVDev**    => returns `true` if NODE_ENV=dev
* **IsENVStag**   => returns `true` if NODE_ENV=stag
* **IsENVProd**   => returns `true` if NODE_ENV=prod

## Methods
* **GetENV()**  
Returns the Current NODE_ENV set. By Default it is set to `dev`