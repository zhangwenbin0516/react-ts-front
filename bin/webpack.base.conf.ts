import path from 'path';

import { Configuration, ExternalsElement } from 'webpack';

class WebpackBase implements Configuration{
    entry: [path.resolve(__dirname, '../src/index.ts')]
    constructor(data: object) {
       console.log(data)
    }
}

export default WebpackBase;