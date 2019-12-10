import React, { Component } from 'react';
import { observer, inject} from "mobx-react";
import { Button, Input } from 'antd';
import './index.less';
@inject('homeStore')
@observer
export default class Home extends Component {
  get Store() {
    return this.props.homeStore;
  }
  render() {
    const { name } = this.Store;
    return <div className='home-wrap'>
      <Input value={name} onChange={(e) => {
        this.Store.setName(e.target.value)
      }}/>
      <Button type="primary">{name}</Button>
    </div> 
  }
}