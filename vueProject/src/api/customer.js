import axios from 'axios';

const LINK_LIST_ALL = 'http://mtms-dev.yunba.com/api/mtms/partner/v2/list'
//list
export function getCustomerList(params) {
    return axios({
        url: LINK_LIST_ALL,
        data: params,
        method:'post'
    });
}