/**
 * 文章请求模块
 */
import request from '@/utils/request'

/**
 * 请求获取文章列表数据
 */

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/v1_0/articles',
    // 相当于：params: params
    params
  })
}

/**
 * 根据id获取指定文章
 */

export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: `/v1_0/articles/${articleId}`
  })
}
