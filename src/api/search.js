/**
 * 用户相关请求模拟
 */

import request from '@/utils/request'

export const getSearchSuggestions = q => {
  return request({
    method: 'GET',
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}
