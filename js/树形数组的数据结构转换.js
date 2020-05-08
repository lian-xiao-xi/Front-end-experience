// 我把这种结构的数组称之为 `树形数组` 
const data = [
  {
    uuid: "a",
    children: [
      {
        ppid: "a",
        uuid: "a-1",
        children: [
          { uuid: "a-1-1", ppid: "a-1" },
          { uuid: "a-1-2", ppid: "a-1" },
          { uuid: "a-1-3", ppid: "a-1" }
        ]
      },
      {
        ppid: "a",
        uuid: "a-2"
      }
    ]
  },
  {
    uuid: "b",
    children: [
      {
        ppid: "b",
        uuid: "b-1",
        children: [
          { uuid: "b-1-1", ppid: "b-1" },
          {
            uuid: "b-1-2",
            ppid: "b-1",
            children: [
              { uuid: "b-1-2-1", ppid: "b-1-2" },
              { uuid: "b-1-2-2", ppid: "b-1-2" }
            ]
          }
        ]
      }
    ]
  }
];

// 扁平化树形数组
function deepFlatten(list) {
  return [].concat(
    ...list.map(type => [
      { uuid: type.uuid, ppid: type.ppid },
      ...(Array.isArray(type.children) ? deepFlatten(type.children) : [])
    ])
  );
}

const flattenType = deepFlatten(data);
console.log(flattenType);

// 还原树形数组
function toTreeData(list, ppid) {
  const tree = pid =>
    list
      .filter(item => item.ppid === pid)
      .map(item => {
        const a = {
          uuid: item.uuid,
          ppid: pid
        };
        const children = tree(item.uuid);
        return children.length > 0 ? { ...a, children } : a;
      });
  return tree(ppid);
}

// 输出的数据和上面的 data 相同
console.log(toTreeData(flattenType, undefined));

// 寻找树形数组中某项所在的链路
function idList(list, uuid) {
  const result = [];
  function a(id) {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.uuid === id) {
        result.unshift(item.uuid);
        a(item.ppid);
        break;
      }
    }
  }
  a(uuid);
  return result;
}
// 输出： ["b", "b-1", "b-1-2", "b-1-2-1"]
console.log(idList(flattenType, "b-1-2-1"));