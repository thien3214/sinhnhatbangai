// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "chào cậu ",
        "Chúng ta quen nhau",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "bao nhiêu lâu rồi nhỉ?",
        "75 ngày rùi đó, nhanh nhỉ !",  // 同上...
        "chúng ta yêu nhau lâu chưa?",
        "44 ngày <3 ",
        "nhanh thật nhỉ?",
        "Tớ thì không mồm mép",
        "Hay ngồi văn thơ vở sách",
        "Nên làm thứ này tặng cậu",
        "Nhân ngày cậu tròn 20",
        "Chúc cậu bước sang tuổi mới ",
        "Có nhiều niềm vui ",
        "luôn luôn khỏe mạnh",
        "và đừng báo nữa",
        "Love u",
        "Mãi yêu cậu!!!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/tonton_friends_00"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/tonton_friends_00",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "tối quá bật đèn lên nào",
        play: "Thêm music",
        bannar_coming: "Thêm tí màu sắc ",
        balloons_flying: "Bóng bay hong?",
        cake_fadein: "Thêm bánh nào",
        light_candle: "Nến hong？",
        wish_message: "Happy Birthday ",
        story: "for u",
    }
};
