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
}).mock('/mock/api.describeTicket', {
  ret_code: 0,
  ret_msg: 'succ',
  ret_set: [
    [{
      key: '1',
      name: '小白',
      age: 32,
      address: '10 Downing Street'
    }, {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }],
    [{
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    }, {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }],
    [{
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    }, {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }]
  ]
}).mock('/mock/api.describeNoticeTopFour', {
  ret_code: 0,
  ret_msg: 'succ',
  ret_set: [
    {id: 'asd-123', text: '今天天气很好', content: "今天天气非常好今天天气非常好今天天气非常好今天天气非常好"},
    {id: 'asd-2321', text: '啊实打实的', content: "明天天气也不错明天天气也不错明天天气也不错明天天气也不错明天天气也不错明天天气也不错明天天气也不错明天天气也不错"},
    {id: 'asd-4324', text: '大师傅', content: "后天天气貌似也不错后天天气貌似也不错后天天气貌似也不错后天天气貌似也不错后天天气貌似也不错后天天气貌似也不错后天天气貌似也不错后天天气貌似也不错"},
    {id: 'asd-1232', text: '按时大大', content: "大后天的天体就不知道了,.大后天的天体就不知道了,.大后天的天体就不知道了,.大后天的天体就不知道了,.大后天的天体就不知道了,.大后天的天体就不知道了,.大后天的天体就不知道了,."}
  ]
}).mock('/mock/api.describeBoard', {
  ret_code: 0,
  ret_msg: 'succ',
  ret_set: [
    {id: 'asd-asdas', name: 'demo2', curr: false},
    {id: '213-1232', name: '阿斯达奥所', curr: true},
    {id: '213-12asd', name: '阿斯达奥所', curr: false},
  ]
});