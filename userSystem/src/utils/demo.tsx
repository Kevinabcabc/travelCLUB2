import React from 'react'
import {Spin, Empty} from 'antd'


function useLoading(status: string, dom: React.ReactNode, emptyDOM? : React.ReactNode){
  switch(status) {
    case 'loading': {
      return <Spin size="large" tip='loading'/>;
    }
    case 'success': {
      return dom;
    }
    case 'fail': {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="请求错误!"/>;
    }
    default: {//waiting
      return emptyDOM || null;
    }
  }
}

export default useLoading;
