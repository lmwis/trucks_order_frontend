var Ajax = {
    urlPre: "http://localhost:8091/trucks_order/",
    //异步注册
    register: function (nickname, email, password) {
        if (nickname.length == 0 || email.length == 0 || password.length == 0) {
            return;
        }
        var url = this.urlPre+"user/register";
        var data = {
            nickname: nickname,
            email: email,
            password: password
        };
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            //处理跨域请求
            xhrFields: {withCredentials: true},
            success: function (res) {
                console.log(res);
                if (res.status == "success") {

                    alert("注册成功");
                } else if (res.status == "fail") {
                    alert("发送失败：" + res.data.errMsg);
                }

            }
        });

    },
    driverRegister: function (name, sex, age, tel, img1_path, img2_path,
                              img3_path, img4_path, img5_path, password, passwordAgain) {
        // if (nickname.length == 0 || email.length == 0 || password.length == 0) {
        //     return;
        // }
        var url = this.urlPre + "/driver/register";
        var data = {
            name: name,
            sex: sex,
            age: age,
            tel: tel,
            img1_path: img1_path,
            img2_path: img2_path,
            img3_path: img3_path,
            img4_path: img4_path,
            img5_path: img5_path,
            password: password,
            passwordAgain: passwordAgain
        };
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            //处理跨域请求
            xhrFields: {withCredentials: true},
            success: function (res) {
                console.log(res);
                if (res.status == "success") {
                    alert("注册成功");
                } else if (res.status == "fail") {
                    alert("注册失败：" + res.data.errMsg);
                }
            }
        });

    },
    //异步登录
    login: function (email, password,type) {
        if (email.length == 0 || password.length == 0) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.msg('不能为空');
            });
            return;
        }
        var url = this.urlPre + "user/login";
        var data = {
            email: email,
            password: password,
            user_type: type
        };
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            //处理跨域请求
            xhrFields: {withCredentials: true},
            success: function (res) {
                console.log(res);
                if (res.status === "success") {
                    alert("登录成功");
                    if(type === 'user'){
                        $.cookie('user_id',res.data.userId);
                        window.location.href='user_info.html';
                    }else{
                        $.cookie('driver_id',res.data.driverId);
                        window.location.href='online_order.html';
                    }
                } else if (res.status === "fail") {
                    alert("登录失败：" + res.data.errMsg);
                }
            }
        });
    },
    publicOrder: function (item_volume, order_img_path, type, order_time, order_start, order_end, contact, contact_tel,
                           product_desc, price) {
        var url = this.urlPre + "/order/publishOrder";
        var data = {
            item_volume: item_volume,
            order_img_path: order_img_path,
            truck_type: type,
            order_time: order_time,
            order_start: order_start,
            order_end: order_end,
            contact: contact,
            contact_tel: contact_tel,
            product_desc: product_desc,
            price: price
        };
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            //处理跨域请求
            xhrFields: {withCredentials: true},
            success: function (res) {
                console.log(res);
                if (res.status == "success") {
                    alert("登录成功");
                } else if (res.status == "fail") {
                    alert("登录失败：" + res.data.errMsg);
                }
            }
        });
    },
    getAllOrder: function () {
        var url = this.urlPre + "/order/getAll";
        $.ajax({
            type: "GET",
            url: url,
            data: {},
            //处理跨域请求
            xhrFields: {withCredentials: true},
            success: function (res) {
                return res;
            }
        });
    },
    getMyOrder: function (id) {
        var url = this.urlPre + "/order/getMy";
        $.ajax({
            type: "GET",
            url: url,
            data: {
                driver_id: id
            },
            //处理跨域请求
            xhrFields: {withCredentials: true},
            success: function (res) {
                console.log(res);
                if (res.status == "success") {
                    alert("登录成功");
                } else if (res.status == "fail") {
                    alert("登录失败：" + res.data.errMsg);
                }
            }
        });
    },
    getOrderById: function (id) {
        var url = this.urlPre + "/order/getById";
        $.ajax({
            type: "GET",
            url: url,
            data: {
                order_id: id
            },
            //处理跨域请求
            xhrFields: {withCredentials: true},
            success: function (res) {
                console.log(res);
                if (res.status == "success") {
                    alert("登录成功");
                } else if (res.status == "fail") {
                    alert("登录失败：" + res.data.errMsg);
                }
            }
        });
    }
};