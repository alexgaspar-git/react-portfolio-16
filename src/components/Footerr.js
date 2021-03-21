import React from 'react'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; 
import { render } from 'react-dom';

export default function Footerr() {
    return (
        <Footer
        columns={[
          {
            icon: (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            ),
            title: '语雀',
            url: 'https://yuque.com',
            description: '知识创作与分享工具',
            openExternal: true,
          },
          {
            icon: (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            ),
            title: '语雀',
            url: 'https://yuque.com',
            description: '知识创作与分享工具',
            openExternal: true,
          },
        ]}
        bottom="Copyright @2021 All right reserverd | by CodingSchool"
      />
    );
}
