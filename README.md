# <center>Wowza Helper Library</center>
***

## Install
---

<strong>To use the package, just do the standard</strong>

    $ npm install --save wowza-helper


## Startup
---

* <strong>CommonJS</strong>

```js

var Wowza = require('wowza-helper');

var wowzaHelper = new Wowza('WOWZA_API_KEY', 'WOWZA_ACCESS_KEY');

```
* <strong>ESM</strong>

```js

import Wowza  from 'wowza-helper';

const wowzaHelper = new Wowza('WOWZA_API_KEY', 'WOWZA_ACCESS_KEY');

```

## Usage
---

* <strong>CreateLiveStream</strong>

```js
// It returns the stream data
// it returns promise so resolve it

const streamData = await wowzaHelper.CreateLiveStream(streamOptions);

```

* <strong>UpdateLiveStream</strong>

```js
// It returns the updated stream data
// it returns promise so resolve it

const streamData = await wowzaHelper.UpdateLiveStream(updateOptions);

```

* <strong>GetAllLiveStream</strong>

```js
// It returns all the stream data
// it returns promise so resolve it

const streamData = await wowzaHelper.GetAllLiveStream();

```

* <strong>GetLiveStreamById</strong>

```js
// It returns the stream data for given streamId
// it returns promise so resolve it

const streamData = await wowzaHelper.GetLiveStreamById(streamId);

```

* <strong>GetLiveStreamThumbnailById</strong>

```js
// It returns the live stream thumbnail data for given streamId
// it returns promise so resolve it

const thumbnailData = await wowzaHelper.GetLiveStreamThumbnailById(streamId);

```

* <strong>StartLiveStreamById</strong>

```js
// It returns the stream data
// it returns promise so resolve it

const streamData = await wowzaHelper.StartLiveStreamById(streamId);

```

* <strong>StartLiveStreamById</strong>

```js
// It returns the stream start data
// it returns promise so resolve it

const streamData = await wowzaHelper.StartLiveStreamById(streamId);

```

* <strong>StopLiveStreamById</strong>

```js
// It returns the stream stop data
// it returns promise so resolve it

const streamData = await wowzaHelper.StopLiveStreamById(streamId);

```

* <strong>GetLiveStreamStatusById</strong>

```js
// It returns the stream status data
// it returns promise so resolve it

const streamData = await wowzaHelper.GetLiveStreamStatusById(streamId);

```