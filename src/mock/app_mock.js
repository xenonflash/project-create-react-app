var Mock = require('mockjs');

Mock.mock('/mock/api.DescribeCountBoard/', (param) => {
  return {
    ret_code: 0,
    ret_msg: 'succ',
    ret_set: [
      {name: '监控工单', value: 2},
      {name: '报障工单', value: 3},
      {name: '服务工单', value: 0},
      {name: 'CMDB', value: 1},
    ]
  }
});