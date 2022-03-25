// 写入 cookie
const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }

    if (domain) {
        cookieText += `; domain=${domain}`;
    }

    if (path) {
        cookieText += `; path=${path}`;
    }

    if (secure) {
        cookieText += `; secure`;
    }

    document.cookie = cookieText;
};
// set('username', 'alex');


// 通过 name 获取 cookie 的值
// get
const get = name => {
    // 编码
    name = `${encodeURIComponent(name)}`;
    // 对字符串使用 split 可以得到数组
    const cookies = document.cookie.split('; ');
    // for...of遍历，cookies数组
    for (const item of cookies) {
        const [cookieName, cookieValue] = item.split('=');
        // 判断
        if (cookieName === name) {
            // 解码
            return decodeURIComponent(cookieValue);
        }
    }
    return; // return === return undefined
};
// get('username');


// 根据name、domain、和 path 删除 cookie
const remove = (name, { domain, path } = {}) => {
    set(name, '', { domain, path, maxAge: -1 });
};

// 验收
export { set, get, remove };