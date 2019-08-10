import React from 'react';

class Giphy extends React.Component {
    static async callServer(subUrl, data) {
        let url = global.GIPHY_API_URL + subUrl;
        url += '?api_key=' + process.env.REACT_APP_GIPHY_API_KEY;
        if (typeof data === 'object') {
            for (let i in data) {
                url += '&' + i + '=' + data[i];
            }
        }

        let responseData = {
            status: false,
            msg: 'Something went wrong',
            data: {}
        };
        await fetch(url)
            .then(res => res.json())
            .then((data) => {
                if (data.meta && data.meta.status && data.meta.status === 200) {
                    responseData = {
                        status: true,
                        msg: '',
                        data: data
                    };
                } else {
                    responseData.msg = data.meta.msg;
                }
            })
            .catch(console.log);

        return responseData;
    };

    static async searchGif(keyword, limit, offset) {
        let data = {
            q: keyword,
            limit: (typeof limit !== undefined && !isNaN(limit)) ? limit : 25,
            offset: (typeof offset !== undefined && !isNaN(offset)) ? offset : 0,
            lang: 'en'
        };
        return Giphy.callServer('search', data);
    }
}

export default Giphy;