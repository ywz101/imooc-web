const storage = window.localStorage;
// 设置成员
const set = (key, value) => {
    storage.setItem(key, JSON.stringify(value));
};
// 获取成员
const get = key => {
    return JSON.parse(storage.getItem(key));
};
// 删除
const remove = key => {
    storage.removeItem(key);
};
// 清空
const clear = () => {
    storage.clear();
};

// 暴露
export { set, get, remove, clear }