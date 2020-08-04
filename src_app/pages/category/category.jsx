import React, {Component} from 'react';
import {Button, Card, Icon, Table} from 'antd';
import LinkButton from "../../components/link-button";

/* 商品分类路由 */
export default class Category extends Component {
  render() {
    //card的左侧
    const title = '一级分类列表';
    //card的右侧
    const extra = (
      <Button type='primary'>
        <Icon type='plus'/>
        添加
      </Button>
    );

    const dataSource = [
      {
        key: '1',
        name: '家用电器',
      },
      {
        key: '2',
        name: '电脑',
      },
    ];

    const columns = [
      {
        title: '分类的名称',
        dataIndex: 'name',//显示数据对应的属性名
      },
      {
        title: '操作',
        width: 300,
        render: () => (//返回需要显示的界面标签
          <span>
            <LinkButton>修改分类</LinkButton>
            <LinkButton>查看子分类</LinkButton>
          </span>
        )
      }
    ];

    return (
      <div>
        <Card title={title} extra={extra}>
          <Table
            bordered
            rowKey='key'
            dataSource={dataSource}
            columns={columns}/>
        </Card>
      </div>
    );
  }
}