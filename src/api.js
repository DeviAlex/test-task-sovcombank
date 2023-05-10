import axios from 'axios';
import getPaymentsMock from './mocks/getPayments';

/**
 * @var {Axios}
 */
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const isMock = process.env.VUE_APP_USE_MOCK === '1';

/**
 * Load payments data.
 *
 * @param {Object} params
 * @returns {Promise}
 */
const getPayments = (params = {}) => {
  if (isMock) {
    return getPaymentsMock();
  }

  return instance.request({
    method: 'get',
    url: '/api/v1/payments',
    params,
  });
};

export default {
  instance,
  getPayments,
};
