import * as webpack from 'webpack';
import WebpackBase from './webpack.base.conf';

const webpackConfig = {
    config: {
        target: 'node',
        mode: 'developmemnt',
        
    }
}

// 创建编译时配置
const devConfig = new WebpackBase(webpackConfig);
// 通过watch来实时编译
webpack(devConfig).watch({
    aggregateTimeout: 300
}, (err: Error) => {
    console.log(err);
});