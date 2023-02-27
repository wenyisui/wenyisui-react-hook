// 自定义hooks

// 性能优化 PureComponent 做个缓存  传入的参数不变时，子组件不更新

import React from 'react';
import { withInfo } from './service';

class List extends React.PureComponent {

    render() {
        let { info, render } = this.props;
        return (
            <div>
                <ul dangerouslySetInnerHTML={{
                    __html: info.map(item => render(item))
                }}>

                </ul>
            </div>
        )
    }
}

class Zi extends React.Component {


    itemTpl = item => {
        // var tpl = '';
        // for (var [key, value] of Object.entries(item)){
        //     if(typeof value === 'object'){
        //         tpl += `<ul><li>${key}: ${this.itemTpl(value)}</li></ul>`
        //     }else {
        //         tpl += `<li>${key}: ${value}</li>`;
        //     }

        // }
        // return tpl;

        // 性能优化 reduce
        return Object.entries(item).reduce((prev, [key, value]) => {
            // if (typeof value === 'object') {
            //    return prev += `<ul><li>${key}: ${this.itemTpl(value)}</li></ul>`
            // } else {
            //    return prev += `<li>${key}: ${value}</li>`;
            // }

            return typeof value === "object"
              ? (prev += `<ul><li>${key}: ${this.itemTpl(value)}</li></ul>`)
              : (prev += `<li>${key}: ${value}</li>`)
        }, '');
    }
    render() {
        return (
            <div>
                {/* <List {...this.props} render={this.itemTpl.bind(this)}></List> */}
                <List {...this.props} render={this.itemTpl}></List>
            </div>
        )
    }
}

const withInfoZi = withInfo(Zi);
export default withInfoZi;