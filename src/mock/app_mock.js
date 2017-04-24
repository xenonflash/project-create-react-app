import Mock from 'mockjs';

Mock.mock(/\/mock\/api\.Describe/, (param) => {
  return {
    ret_code: 0,
    ret_msg: 'succ',
    ret_set: [
      {name: '监控工单', value: 2},
      {name: '报障工单', value: 3},
      {name: '服务工单', value: 0},
      {name: '软件发布', value: 1},
      {name: 'CMDB', value: 1},
    ]
  }
}).mock('/mock/api.promise', () => {
  return {
    ret_code: 0,
    ret_msg: 'succ',
    ret_set: [
     '小明',
     '小红'
    ]
  }
});