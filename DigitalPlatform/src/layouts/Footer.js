import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '首页',
          title: '首页',
          href: 'http://www.kaipuyun.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://https://github.com/dblues0925',
          blankTarget: true,
        },
        {
          key: 'DigitalPlatform',
          title: '数字内容服务平台',
          href: 'https://https://github.com/dblues0925/digitalPlatform',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018 开普云体验技术部出品
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
