import React from "react";
import styles from "./index.less";
import { Button } from "antd";
import {SlidersOutlined} from "@ant-design/icons/lib";



export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-basic">
      <div>
        <Button type="primary">Primary</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">一个虚线框的按钮</Button>
        <Button type="link" icon={<SlidersOutlined />} href="https://pro.ant.design/docs/layout-component-cn">蚂蚁设计</Button>
      </div>
    </div>
  </div>
);
